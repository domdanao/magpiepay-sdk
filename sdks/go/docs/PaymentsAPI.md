# \PaymentsAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetPaymentV1PaymentsPaymentIdGet**](PaymentsAPI.md#GetPaymentV1PaymentsPaymentIdGet) | **Get** /v1/payments/{payment_id} | Get payment
[**ListPaymentsV1PaymentsGet**](PaymentsAPI.md#ListPaymentsV1PaymentsGet) | **Get** /v1/payments/ | List payments



## GetPaymentV1PaymentsPaymentIdGet

> PaymentSingleResponse GetPaymentV1PaymentsPaymentIdGet(ctx, paymentId).XAPIKey(xAPIKey).Authorization(authorization).Execute()

Get payment



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
	paymentId := "paymentId_example" // string | 
	xAPIKey := "xAPIKey_example" // string |  (optional)
	authorization := "authorization_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PaymentsAPI.GetPaymentV1PaymentsPaymentIdGet(context.Background(), paymentId).XAPIKey(xAPIKey).Authorization(authorization).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PaymentsAPI.GetPaymentV1PaymentsPaymentIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPaymentV1PaymentsPaymentIdGet`: PaymentSingleResponse
	fmt.Fprintf(os.Stdout, "Response from `PaymentsAPI.GetPaymentV1PaymentsPaymentIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**paymentId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPaymentV1PaymentsPaymentIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xAPIKey** | **string** |  | 
 **authorization** | **string** |  | 

### Return type

[**PaymentSingleResponse**](PaymentSingleResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListPaymentsV1PaymentsGet

> PaymentCollectionResponse ListPaymentsV1PaymentsGet(ctx).Limit(limit).Cursor(cursor).XAPIKey(xAPIKey).Authorization(authorization).Execute()

List payments



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
	limit := int32(56) // int32 | Number of payments to return (1-100). (optional) (default to 50)
	cursor := "cursor_example" // string | Cursor returned from the previous page. (optional)
	xAPIKey := "xAPIKey_example" // string |  (optional)
	authorization := "authorization_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PaymentsAPI.ListPaymentsV1PaymentsGet(context.Background()).Limit(limit).Cursor(cursor).XAPIKey(xAPIKey).Authorization(authorization).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PaymentsAPI.ListPaymentsV1PaymentsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListPaymentsV1PaymentsGet`: PaymentCollectionResponse
	fmt.Fprintf(os.Stdout, "Response from `PaymentsAPI.ListPaymentsV1PaymentsGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPaymentsV1PaymentsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Number of payments to return (1-100). | [default to 50]
 **cursor** | **string** | Cursor returned from the previous page. | 
 **xAPIKey** | **string** |  | 
 **authorization** | **string** |  | 

### Return type

[**PaymentCollectionResponse**](PaymentCollectionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

