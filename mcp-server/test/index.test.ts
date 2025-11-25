import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { PaymentsApi, PayoutsApi, ReferencesApi, QRPhRequestsApi } from "@domdanao/magpiepay-sdk-typescript";

// Mock dependencies
jest.mock("@modelcontextprotocol/sdk/server/mcp.js");
jest.mock("@modelcontextprotocol/sdk/server/stdio.js");
jest.mock("@domdanao/magpiepay-sdk-typescript");
jest.mock("fs");
jest.mock("path");

// Set environment variable
process.env.MAGPIEPAY_API_KEY = "test_key";

describe("MCP Server", () => {
    let mockServer: any;
    let mockPaymentsApi: any;
    let mockPayoutsApi: any;
    let mockReferencesApi: any;
    let mockQrphApi: any;

    beforeEach(() => {
        jest.clearAllMocks();

        // Mock McpServer instance
        mockServer = {
            registerTool: jest.fn(),
            registerResource: jest.fn(),
            connect: jest.fn(),
        };
        (McpServer as unknown as jest.Mock).mockImplementation(() => mockServer);

        // Mock API instances
        mockPaymentsApi = {
            listPayments: jest.fn(),
            getPayment: jest.fn(),
        };
        (PaymentsApi as unknown as jest.Mock).mockImplementation(() => mockPaymentsApi);

        mockPayoutsApi = {
            createPayout: jest.fn(),
        };
        (PayoutsApi as unknown as jest.Mock).mockImplementation(() => mockPayoutsApi);

        mockReferencesApi = {
            listBankCodes: jest.fn(),
        };
        (ReferencesApi as unknown as jest.Mock).mockImplementation(() => mockReferencesApi);

        mockQrphApi = {
            createQrph: jest.fn(),
        };
        (QRPhRequestsApi as unknown as jest.Mock).mockImplementation(() => mockQrphApi);
    });

    it("should register tools and resources on startup", async () => {
        // Import the module to trigger initialization
        jest.isolateModules(() => {
            require("../src/index");
        });

        expect(mockServer.registerTool).toHaveBeenCalledWith("list_payments", expect.any(Object), expect.any(Function));
        expect(mockServer.registerTool).toHaveBeenCalledWith("get_payment", expect.any(Object), expect.any(Function));
        expect(mockServer.registerTool).toHaveBeenCalledWith("create_payout", expect.any(Object), expect.any(Function));
        expect(mockServer.registerTool).toHaveBeenCalledWith("list_bank_codes", expect.any(Object), expect.any(Function));
        expect(mockServer.registerTool).toHaveBeenCalledWith("create_qrph", expect.any(Object), expect.any(Function));

        expect(mockServer.registerResource).toHaveBeenCalledWith("openapi-spec", "magpiepay://api/spec", expect.any(Object), expect.any(Function));
        expect(mockServer.registerResource).toHaveBeenCalledWith("api-docs", "magpiepay://docs/api", expect.any(Object), expect.any(Function));
    });

    it("should call listPayments API when list_payments tool is invoked", async () => {
        jest.isolateModules(() => {
            require("../src/index");
        });

        const listPaymentsCall = mockServer.registerTool.mock.calls.find((call: any) => call[0] === "list_payments");
        const callback = listPaymentsCall[2];

        mockPaymentsApi.listPayments.mockResolvedValue({ data: { payments: [] } });

        const result = await callback({ limit: 10, cursor: "abc" });

        expect(mockPaymentsApi.listPayments).toHaveBeenCalledWith(10, "abc");
        expect(result).toEqual({
            content: [{ type: "text", text: JSON.stringify({ payments: [] }, null, 2) }],
        });
    });

    it("should call createPayout API when create_payout tool is invoked", async () => {
        jest.isolateModules(() => {
            require("../src/index");
        });

        const createPayoutCall = mockServer.registerTool.mock.calls.find((call: any) => call[0] === "create_payout");
        const callback = createPayoutCall[2];

        mockPayoutsApi.createPayout.mockResolvedValue({ data: { id: "payout_123" } });

        const args = {
            amount: 1000,
            currency: "PHP",
            description: "Test Payout",
            reference_id: "ref_123",
            source_account_id: "src_123",
            channel: "instapay",
            destination: {
                account_number: "1234567890",
                bank_code: "BDO",
            },
        };

        const result = await callback(args);

        expect(mockPayoutsApi.createPayout).toHaveBeenCalledWith({
            amount: 1000,
            reference_id: "ref_123",
            source_account_id: "src_123",
            channel: "instapay",
            destination: {
                account_number: "1234567890",
                bank_code: "BDO",
            },
            purpose: "Test Payout",
        });
        expect(result).toEqual({
            content: [{ type: "text", text: JSON.stringify({ id: "payout_123" }, null, 2) }],
        });
    });
});
