# domdanao/magpiepay-sdk-go

The official Go library for the MagpiePay API.

## Installation

Install the package via `go get`:

```bash
go get github.com/domdanao/magpiepay-sdk-go
```

## Usage

### Configuration

Initialize the `Configuration` object with your API key.

```go
package main

import (
	"context"
	"fmt"
	"os"

	"github.com/domdanao/magpiepay-sdk-go"
)

func main() {
	apiKey := os.Getenv("MAGPIEPAY_API_KEY")

	cfg := magpiepay.NewConfiguration()
	cfg.Servers = magpiepay.ServerConfigurations{
		{
			URL: "https://api.magpiepay.com",
		},
	}
	
	// Set API Key in context
	ctx := context.WithValue(context.Background(), magpiepay.ContextAPIKeys, map[string]magpiepay.APIKey{
		"xAPIKey": {Key: apiKey},
	})

	client := magpiepay.NewAPIClient(cfg)
	
	// ... use client
}
```

### Examples

#### List Payments

```go
payments, _, err := client.PaymentsAPI.ListPayments(ctx).Execute()
if err != nil {
	fmt.Fprintf(os.Stderr, "Error when calling PaymentsAPI.ListPayments: %v\n", err)
	return
}
fmt.Printf("Response: %v\n", payments)
```

#### Create a Payout

```go
payoutReq := *magpiepay.NewPayoutCreateRequest(1000, "PHP", "Test Payout")

payout, _, err := client.PayoutsAPI.CreatePayout(ctx).PayoutCreateRequest(payoutReq).Execute()
if err != nil {
	fmt.Fprintf(os.Stderr, "Error when calling PayoutsAPI.CreatePayout: %v\n", err)
	return
}
fmt.Printf("Response: %v\n", payout)
```

## API Resources

- [PaymentsAPI](docs/PaymentsAPI.md)
- [PayoutsAPI](docs/PayoutsAPI.md)
- [QRPhRequestsAPI](docs/QRPhRequestsAPI.md)
- [ReferencesAPI](docs/ReferencesAPI.md)

## License

Unlicense
