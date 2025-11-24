# \PaymentsAPI

All URIs are relative to *https://api.magpiepay.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetPayment**](PaymentsAPI.md#GetPayment) | **Get** /v1/payments/{payment_id} | Get payment
[**ListPayments**](PaymentsAPI.md#ListPayments) | **Get** /v1/payments/ | List payments



## GetPayment

> PaymentSingleResponse GetPayment(ctx, paymentId).XAPIKey(xAPIKey).Authorization(authorization).Execute()

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
	resp, r, err := apiClient.PaymentsAPI.GetPayment(context.Background(), paymentId).XAPIKey(xAPIKey).Authorization(authorization).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PaymentsAPI.GetPayment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPayment`: PaymentSingleResponse
	fmt.Fprintf(os.Stdout, "Response from `PaymentsAPI.GetPayment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**paymentId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPaymentRequest struct via the builder pattern


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


## ListPayments

> PaymentCollectionResponse ListPayments(ctx).Limit(limit).Cursor(cursor).XAPIKey(xAPIKey).Authorization(authorization).Execute()

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
	resp, r, err := apiClient.PaymentsAPI.ListPayments(context.Background()).Limit(limit).Cursor(cursor).XAPIKey(xAPIKey).Authorization(authorization).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PaymentsAPI.ListPayments``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListPayments`: PaymentCollectionResponse
	fmt.Fprintf(os.Stdout, "Response from `PaymentsAPI.ListPayments`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPaymentsRequest struct via the builder pattern


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

