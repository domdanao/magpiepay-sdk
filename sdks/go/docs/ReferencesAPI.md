# \ReferencesAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ListBankCodesV1ReferencesBankCodesGet**](ReferencesAPI.md#ListBankCodesV1ReferencesBankCodesGet) | **Get** /v1/references/bank_codes | List Bank Codes



## ListBankCodesV1ReferencesBankCodesGet

> BankCodeCollection ListBankCodesV1ReferencesBankCodesGet(ctx).XAPIKey(xAPIKey).Authorization(authorization).Execute()

List Bank Codes

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	xAPIKey := "xAPIKey_example" // string |  (optional)
	authorization := "authorization_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReferencesAPI.ListBankCodesV1ReferencesBankCodesGet(context.Background()).XAPIKey(xAPIKey).Authorization(authorization).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReferencesAPI.ListBankCodesV1ReferencesBankCodesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListBankCodesV1ReferencesBankCodesGet`: BankCodeCollection
	fmt.Fprintf(os.Stdout, "Response from `ReferencesAPI.ListBankCodesV1ReferencesBankCodesGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListBankCodesV1ReferencesBankCodesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAPIKey** | **string** |  | 
 **authorization** | **string** |  | 

### Return type

[**BankCodeCollection**](BankCodeCollection.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

