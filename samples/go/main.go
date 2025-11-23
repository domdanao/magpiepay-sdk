package main

import (
	"context"
	"fmt"
	"os"

	magpiepay "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	apiKey := os.Getenv("MAGPIE_API_KEY")
	if apiKey == "" {
		fmt.Println("Error: MAGPIE_API_KEY environment variable not set")
		os.Exit(1)
	}

	cfg := magpiepay.NewConfiguration()
	cfg.Host = "api.magpiepay.com"
	cfg.Scheme = "https"

	client := magpiepay.NewAPIClient(cfg)

	fmt.Println("Fetching bank codes...")
	
	resp, _, err := client.ReferencesAPI.ListBankCodesV1ReferencesBankCodesGet(context.Background()).XAPIKey(apiKey).Execute()
	if err != nil {
		fmt.Printf("Error when calling ReferencesApi->ListBankCodesV1ReferencesBankCodesGet: %v\n", err)
		os.Exit(1)
	}

	fmt.Println("Success! Found bank codes:")
	// Iterate over resp.Data which is []BankCodeEntry
	for _, bank := range resp.Data {
		// Name is a pointer, so dereference it if not nil
		name := ""
		if bank.Name != nil {
			name = *bank.Name
		}
		fmt.Printf("- %s (%s)\n", name, bank.Code)
	}
}
