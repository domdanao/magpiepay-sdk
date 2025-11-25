# @domdanao/magpiepay-mcp-server

The official Model Context Protocol (MCP) server for the MagpiePay API. This server exposes MagpiePay's functionality (Payments, Payouts, QRPh) as MCP tools and resources, allowing AI agents to interact with the API directly.

## Installation

You can run the server directly using `npx`:

```bash
npx @domdanao/magpiepay-mcp-server
```

Or install it globally:

```bash
npm install -g @domdanao/magpiepay-mcp-server
```

## Configuration

The server requires your MagpiePay API Key to be set as an environment variable:

- `MAGPIEPAY_API_KEY`: Your MagpiePay API Key (Live or Test).

## Usage

### Claude Desktop

To use this server with Claude Desktop, add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "magpiepay": {
      "command": "npx",
      "args": ["-y", "@domdanao/magpiepay-mcp-server"],
      "env": {
        "MAGPIEPAY_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### Manual Run

```bash
export MAGPIEPAY_API_KEY=your_key
npx @domdanao/magpiepay-mcp-server
```

## Available Tools

- **`list_payments`**: List payments with optional filtering (limit, cursor).
- **`get_payment`**: Get details of a specific payment by ID.
- **`create_payout`**: Create a new payout (InstaPay/PESONet).
- **`list_bank_codes`**: List available bank codes for payouts.
- **`create_qrph`**: Create a QRPh payment request (static or dynamic).

## Available Resources

- **`magpiepay://api/spec`**: Returns the full OpenAPI JSON specification.
- **`magpiepay://docs/api`**: Returns simplified API documentation.

## Development

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Build the project:
    ```bash
    npm run build
    ```
4.  Run tests:
    ```bash
    npm test
    ```
