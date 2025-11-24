import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { Configuration, PaymentsApi, PayoutsApi, ReferencesApi, QRPhRequestsApi } from "@domdanao/magpiepay-sdk-typescript";
import * as fs from "fs";
import * as path from "path";

// Initialize SDK
const apiKey = process.env.MAGPIE_API_KEY;
if (!apiKey) {
    console.error("Error: MAGPIE_API_KEY environment variable not set");
    process.exit(1);
}

const config = new Configuration({
    username: apiKey,
    password: "",
});

const paymentsApi = new PaymentsApi(config);
const payoutsApi = new PayoutsApi(config);
const referencesApi = new ReferencesApi(config);
const qrphApi = new QRPhRequestsApi(config);

// Create MCP Server
const server = new McpServer({
    name: "magpiepay-mcp",
    version: "1.0.0",
});

// --- Tools ---

// List Payments
server.registerTool(
    "list_payments",
    {
        description: "List payments with optional filtering",
        inputSchema: z.object({
            limit: z.number().optional().describe("Number of payments to return (1-100)"),
            cursor: z.string().optional().describe("Cursor for pagination"),
        }),
    },
    async ({ limit, cursor }) => {
        try {
            const response = await paymentsApi.listPayments(limit, cursor);
            return {
                content: [{ type: "text", text: JSON.stringify(response.data, null, 2) }],
            };
        } catch (error: any) {
            return {
                content: [{ type: "text", text: `Error: ${error.message}` }],
                isError: true,
            };
        }
    }
);

// Get Payment
server.registerTool(
    "get_payment",
    {
        description: "Get details of a specific payment",
        inputSchema: z.object({
            payment_id: z.string().describe("The ID of the payment to retrieve"),
        }),
    },
    async ({ payment_id }) => {
        try {
            const response = await paymentsApi.getPayment(payment_id);
            return {
                content: [{ type: "text", text: JSON.stringify(response.data, null, 2) }],
            };
        } catch (error: any) {
            return {
                content: [{ type: "text", text: `Error: ${error.message}` }],
                isError: true,
            };
        }
    }
);

// Create Payout
server.registerTool(
    "create_payout",
    {
        description: "Create a new payout",
        inputSchema: z.object({
            amount: z.number().describe("Amount to payout in centavos"),
            currency: z.string().describe("Currency code (e.g., PHP)"),
            description: z.string().describe("Description of the payout"),
            reference_id: z.string().describe("Client-provided reference ID"),
            source_account_id: z.string().describe("Source account ID"),
            channel: z.enum(['instapay', 'pesonet']).describe("Payout channel"),
            destination: z.object({
                account_number: z.string(),
                bank_code: z.string(),
                first_name: z.string().optional(),
                last_name: z.string().optional()
            }).describe("Destination account details")
        }),
    },
    async ({ amount, currency, description, reference_id, source_account_id, channel, destination }) => {
        try {
            const response = await payoutsApi.createPayout({
                amount,
                reference_id,
                source_account_id,
                channel,
                destination,
                purpose: description, // Mapping description to purpose
            });
            return {
                content: [{ type: "text", text: JSON.stringify(response.data, null, 2) }],
            };
        } catch (error: any) {
            return {
                content: [{ type: "text", text: `Error: ${error.message}` }],
                isError: true,
            };
        }
    }
);

// List Bank Codes
server.registerTool(
    "list_bank_codes",
    {
        description: "List available bank codes",
        inputSchema: z.object({}),
    },
    async () => {
        try {
            const response = await referencesApi.listBankCodes();
            return {
                content: [{ type: "text", text: JSON.stringify(response.data, null, 2) }],
            };
        } catch (error: any) {
            return {
                content: [{ type: "text", text: `Error: ${error.message}` }],
                isError: true,
            };
        }
    }
);

// Create QRPh
server.registerTool(
    "create_qrph",
    {
        description: "Create a QRPh payment request",
        inputSchema: z.object({
            amount: z.number().describe("Amount in centavos"),
            reference_id: z.string().describe("Client-provided reference ID"),
            type: z.enum(['static', 'dynamic']).describe("QR type"),
            submerchant_id: z.string().optional().describe("Sub-merchant ID"),
            metadata: z.record(z.any()).optional().describe("Additional metadata"),
        }),
    },
    async ({ amount, reference_id, type, submerchant_id, metadata }) => {
        try {
            const response = await qrphApi.createQrph({
                amount,
                reference_id,
                type,
                submerchant_id,
                metadata,
            });
            return {
                content: [{ type: "text", text: JSON.stringify(response.data, null, 2) }],
            };
        } catch (error: any) {
            return {
                content: [{ type: "text", text: `Error: ${error.message}` }],
                isError: true,
            };
        }
    }
);

// --- Resources ---

// OpenAPI Spec
server.registerResource(
    "openapi-spec",
    "magpiepay://api/spec",
    { mimeType: "application/json" },
    async (uri) => {
        const specPath = path.join(__dirname, "../../openapi.json");
        const spec = fs.readFileSync(specPath, "utf-8");
        return {
            contents: [{ uri: uri.href, text: spec }],
        };
    }
);

// API Documentation
server.registerResource(
    "api-docs",
    "magpiepay://docs/api",
    { mimeType: "text/markdown" },
    async (uri) => {
        return {
            contents: [{
                uri: uri.href,
                text: "# MagpiePay API Documentation\n\nThis MCP server exposes the MagpiePay API tools.\n\n## Tools\n- `list_payments`: List payments.\n- `get_payment`: Get payment details.\n- `create_payout`: Create a payout.\n- `list_bank_codes`: List bank codes.\n- `create_qrph`: Create QRPh code.\n\nSee `magpiepay://api/spec` for the full OpenAPI specification."
            }],
        };
    }
);

// Start Server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("MagpiePay MCP Server running on stdio");
}

main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
