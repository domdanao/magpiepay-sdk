# \PayoutsAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreatePayoutV1PayoutsPost**](PayoutsAPI.md#CreatePayoutV1PayoutsPost) | **Post** /v1/payouts/ | Create a payout
[**GetPayoutV1PayoutsPayoutIdGet**](PayoutsAPI.md#GetPayoutV1PayoutsPayoutIdGet) | **Get** /v1/payouts/{payout_id} | Get payout
[**ListPayoutsV1PayoutsGet**](PayoutsAPI.md#ListPayoutsV1PayoutsGet) | **Get** /v1/payouts/ | List payouts



## CreatePayoutV1PayoutsPost

> PayoutSingleResponse CreatePayoutV1PayoutsPost(ctx).PayoutCreateRequest(payoutCreateRequest).XAPIKey(xAPIKey).Authorization(authorization).Execute()

Create a payout



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
	payoutCreateRequest := *openapiclient.NewPayoutCreateRequest("ReferenceId_example", "Channel_example", int32(123), "SourceAccountId_example", *openapiclient.NewPayoutDestination("BankCode_example", "AccountNumber_example")) // PayoutCreateRequest | 
	xAPIKey := "xAPIKey_example" // string |  (optional)
	authorization := "authorization_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PayoutsAPI.CreatePayoutV1PayoutsPost(context.Background()).PayoutCreateRequest(payoutCreateRequest).XAPIKey(xAPIKey).Authorization(authorization).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PayoutsAPI.CreatePayoutV1PayoutsPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreatePayoutV1PayoutsPost`: PayoutSingleResponse
	fmt.Fprintf(os.Stdout, "Response from `PayoutsAPI.CreatePayoutV1PayoutsPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreatePayoutV1PayoutsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payoutCreateRequest** | [**PayoutCreateRequest**](PayoutCreateRequest.md) |  | 
 **xAPIKey** | **string** |  | 
 **authorization** | **string** |  | 

### Return type

[**PayoutSingleResponse**](PayoutSingleResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPayoutV1PayoutsPayoutIdGet

> PayoutSingleResponse GetPayoutV1PayoutsPayoutIdGet(ctx, payoutId).XAPIKey(xAPIKey).Authorization(authorization).Execute()

Get payout



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
	payoutId := "payoutId_example" // string | 
	xAPIKey := "xAPIKey_example" // string |  (optional)
	authorization := "authorization_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PayoutsAPI.GetPayoutV1PayoutsPayoutIdGet(context.Background(), payoutId).XAPIKey(xAPIKey).Authorization(authorization).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PayoutsAPI.GetPayoutV1PayoutsPayoutIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPayoutV1PayoutsPayoutIdGet`: PayoutSingleResponse
	fmt.Fprintf(os.Stdout, "Response from `PayoutsAPI.GetPayoutV1PayoutsPayoutIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**payoutId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPayoutV1PayoutsPayoutIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xAPIKey** | **string** |  | 
 **authorization** | **string** |  | 

### Return type

[**PayoutSingleResponse**](PayoutSingleResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListPayoutsV1PayoutsGet

> PayoutCollectionResponse ListPayoutsV1PayoutsGet(ctx).Limit(limit).Cursor(cursor).ReferenceId(referenceId).XAPIKey(xAPIKey).Authorization(authorization).Execute()

List payouts



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
	limit := int32(56) // int32 | Number of payouts to return (1-100). (optional) (default to 50)
	cursor := "cursor_example" // string | Cursor returned from the previous page. (optional)
	referenceId := "referenceId_example" // string | Filter payouts by reference ID. (optional)
	xAPIKey := "xAPIKey_example" // string |  (optional)
	authorization := "authorization_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PayoutsAPI.ListPayoutsV1PayoutsGet(context.Background()).Limit(limit).Cursor(cursor).ReferenceId(referenceId).XAPIKey(xAPIKey).Authorization(authorization).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PayoutsAPI.ListPayoutsV1PayoutsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListPayoutsV1PayoutsGet`: PayoutCollectionResponse
	fmt.Fprintf(os.Stdout, "Response from `PayoutsAPI.ListPayoutsV1PayoutsGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPayoutsV1PayoutsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Number of payouts to return (1-100). | [default to 50]
 **cursor** | **string** | Cursor returned from the previous page. | 
 **referenceId** | **string** | Filter payouts by reference ID. | 
 **xAPIKey** | **string** |  | 
 **authorization** | **string** |  | 

### Return type

[**PayoutCollectionResponse**](PayoutCollectionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

