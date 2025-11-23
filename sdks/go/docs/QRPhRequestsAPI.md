# \QRPhRequestsAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CancelQrphV1QrphIdCancelPost**](QRPhRequestsAPI.md#CancelQrphV1QrphIdCancelPost) | **Post** /v1/qrph/{id}/cancel | Cancel a QRPh request
[**CreateQrphV1QrphPost**](QRPhRequestsAPI.md#CreateQrphV1QrphPost) | **Post** /v1/qrph/ | Create a QRPh request
[**GetQrphStatusV1QrphIdGet**](QRPhRequestsAPI.md#GetQrphStatusV1QrphIdGet) | **Get** /v1/qrph/{id} | Get QRPh status
[**ListQrphV1QrphGet**](QRPhRequestsAPI.md#ListQrphV1QrphGet) | **Get** /v1/qrph/ | List QRPh requests



## CancelQrphV1QrphIdCancelPost

> QRPhSingleResponse CancelQrphV1QrphIdCancelPost(ctx, id).XAPIKey(xAPIKey).Authorization(authorization).CancelQRPhRequest(cancelQRPhRequest).Execute()

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
	resp, r, err := apiClient.QRPhRequestsAPI.CancelQrphV1QrphIdCancelPost(context.Background(), id).XAPIKey(xAPIKey).Authorization(authorization).CancelQRPhRequest(cancelQRPhRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QRPhRequestsAPI.CancelQrphV1QrphIdCancelPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CancelQrphV1QrphIdCancelPost`: QRPhSingleResponse
	fmt.Fprintf(os.Stdout, "Response from `QRPhRequestsAPI.CancelQrphV1QrphIdCancelPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelQrphV1QrphIdCancelPostRequest struct via the builder pattern


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


## CreateQrphV1QrphPost

> QRPhSingleResponse CreateQrphV1QrphPost(ctx).CanonicalCreateQRReq(canonicalCreateQRReq).XAPIKey(xAPIKey).Authorization(authorization).Execute()

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
	resp, r, err := apiClient.QRPhRequestsAPI.CreateQrphV1QrphPost(context.Background()).CanonicalCreateQRReq(canonicalCreateQRReq).XAPIKey(xAPIKey).Authorization(authorization).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QRPhRequestsAPI.CreateQrphV1QrphPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateQrphV1QrphPost`: QRPhSingleResponse
	fmt.Fprintf(os.Stdout, "Response from `QRPhRequestsAPI.CreateQrphV1QrphPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateQrphV1QrphPostRequest struct via the builder pattern


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


## GetQrphStatusV1QrphIdGet

> QRPhSingleResponse GetQrphStatusV1QrphIdGet(ctx, id).XAPIKey(xAPIKey).Authorization(authorization).Execute()

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
	resp, r, err := apiClient.QRPhRequestsAPI.GetQrphStatusV1QrphIdGet(context.Background(), id).XAPIKey(xAPIKey).Authorization(authorization).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QRPhRequestsAPI.GetQrphStatusV1QrphIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetQrphStatusV1QrphIdGet`: QRPhSingleResponse
	fmt.Fprintf(os.Stdout, "Response from `QRPhRequestsAPI.GetQrphStatusV1QrphIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetQrphStatusV1QrphIdGetRequest struct via the builder pattern


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


## ListQrphV1QrphGet

> QRPhCollectionResponse ListQrphV1QrphGet(ctx).Limit(limit).Cursor(cursor).ReferenceId(referenceId).XAPIKey(xAPIKey).Authorization(authorization).Execute()

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
	resp, r, err := apiClient.QRPhRequestsAPI.ListQrphV1QrphGet(context.Background()).Limit(limit).Cursor(cursor).ReferenceId(referenceId).XAPIKey(xAPIKey).Authorization(authorization).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `QRPhRequestsAPI.ListQrphV1QrphGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListQrphV1QrphGet`: QRPhCollectionResponse
	fmt.Fprintf(os.Stdout, "Response from `QRPhRequestsAPI.ListQrphV1QrphGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListQrphV1QrphGetRequest struct via the builder pattern


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

