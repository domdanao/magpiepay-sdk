# \QRPhRequestsAPI

All URIs are relative to *https://api.magpiepay.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CancelQrph**](QRPhRequestsAPI.md#CancelQrph) | **Post** /v1/qrph/{id}/cancel | Cancel a QRPh request
[**CreateQrph**](QRPhRequestsAPI.md#CreateQrph) | **Post** /v1/qrph/ | Create a QRPh request
[**GetQrph**](QRPhRequestsAPI.md#GetQrph) | **Get** /v1/qrph/{id} | Get QRPh status
[**ListQrph**](QRPhRequestsAPI.md#ListQrph) | **Get** /v1/qrph/ | List QRPh requests



## CancelQrph

> QRPhSingleResponse CancelQrph(ctx, id).XAPIKey(xAPIKey).Authorization(authorization).CancelQRPhRequest(cancelQRPhRequest).Execute()

Cancel a QRPh request



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
	id := "id_example" // string | 
	xAPIKey := "xAPIKey_example" // string |  (optional)
	authorization := "authorization_example" // string |  (optional)
	cancelQRPhRequest := *openapiclient.NewCancelQRPhRequest() // CancelQRPhRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QRPhRequestsAPI.CancelQrph(context.Background(), id).XAPIKey(xAPIKey).Authorization(authorization).CancelQRPhRequest(cancelQRPhRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QRPhRequestsAPI.CancelQrph``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CancelQrph`: QRPhSingleResponse
	fmt.Fprintf(os.Stdout, "Response from `QRPhRequestsAPI.CancelQrph`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelQrphRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xAPIKey** | **string** |  | 
 **authorization** | **string** |  | 
 **cancelQRPhRequest** | [**CancelQRPhRequest**](CancelQRPhRequest.md) |  | 

### Return type

[**QRPhSingleResponse**](QRPhSingleResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateQrph

> QRPhSingleResponse CreateQrph(ctx).CanonicalCreateQRReq(canonicalCreateQRReq).XAPIKey(xAPIKey).Authorization(authorization).Execute()

Create a QRPh request



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
	canonicalCreateQRReq := *openapiclient.NewCanonicalCreateQRReq("ReferenceId_example", "Type_example") // CanonicalCreateQRReq | 
	xAPIKey := "xAPIKey_example" // string |  (optional)
	authorization := "authorization_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QRPhRequestsAPI.CreateQrph(context.Background()).CanonicalCreateQRReq(canonicalCreateQRReq).XAPIKey(xAPIKey).Authorization(authorization).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QRPhRequestsAPI.CreateQrph``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateQrph`: QRPhSingleResponse
	fmt.Fprintf(os.Stdout, "Response from `QRPhRequestsAPI.CreateQrph`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateQrphRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **canonicalCreateQRReq** | [**CanonicalCreateQRReq**](CanonicalCreateQRReq.md) |  | 
 **xAPIKey** | **string** |  | 
 **authorization** | **string** |  | 

### Return type

[**QRPhSingleResponse**](QRPhSingleResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetQrph

> QRPhSingleResponse GetQrph(ctx, id).XAPIKey(xAPIKey).Authorization(authorization).Execute()

Get QRPh status



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
	id := "id_example" // string | 
	xAPIKey := "xAPIKey_example" // string |  (optional)
	authorization := "authorization_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QRPhRequestsAPI.GetQrph(context.Background(), id).XAPIKey(xAPIKey).Authorization(authorization).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QRPhRequestsAPI.GetQrph``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetQrph`: QRPhSingleResponse
	fmt.Fprintf(os.Stdout, "Response from `QRPhRequestsAPI.GetQrph`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetQrphRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xAPIKey** | **string** |  | 
 **authorization** | **string** |  | 

### Return type

[**QRPhSingleResponse**](QRPhSingleResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListQrph

> QRPhCollectionResponse ListQrph(ctx).Limit(limit).Cursor(cursor).ReferenceId(referenceId).XAPIKey(xAPIKey).Authorization(authorization).Execute()

List QRPh requests



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
	limit := int32(56) // int32 | Number of items to return (1-100). (optional) (default to 50)
	cursor := "cursor_example" // string | Opaque cursor returned from the previous page for pagination. (optional)
	referenceId := "referenceId_example" // string | Filter on a specific request reference ID. (optional)
	xAPIKey := "xAPIKey_example" // string |  (optional)
	authorization := "authorization_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.QRPhRequestsAPI.ListQrph(context.Background()).Limit(limit).Cursor(cursor).ReferenceId(referenceId).XAPIKey(xAPIKey).Authorization(authorization).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QRPhRequestsAPI.ListQrph``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListQrph`: QRPhCollectionResponse
	fmt.Fprintf(os.Stdout, "Response from `QRPhRequestsAPI.ListQrph`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListQrphRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Number of items to return (1-100). | [default to 50]
 **cursor** | **string** | Opaque cursor returned from the previous page for pagination. | 
 **referenceId** | **string** | Filter on a specific request reference ID. | 
 **xAPIKey** | **string** |  | 
 **authorization** | **string** |  | 

### Return type

[**QRPhCollectionResponse**](QRPhCollectionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

