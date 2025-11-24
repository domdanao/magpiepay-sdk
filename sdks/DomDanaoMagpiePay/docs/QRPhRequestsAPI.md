# QRPhRequestsAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelQrphV1QrphIdCancelPost**](QRPhRequestsAPI.md#cancelqrphv1qrphidcancelpost) | **POST** /v1/qrph/{id}/cancel | Cancel a QRPh request
[**createQrphV1QrphPost**](QRPhRequestsAPI.md#createqrphv1qrphpost) | **POST** /v1/qrph/ | Create a QRPh request
[**getQrphStatusV1QrphIdGet**](QRPhRequestsAPI.md#getqrphstatusv1qrphidget) | **GET** /v1/qrph/{id} | Get QRPh status
[**listQrphV1QrphGet**](QRPhRequestsAPI.md#listqrphv1qrphget) | **GET** /v1/qrph/ | List QRPh requests


# **cancelQrphV1QrphIdCancelPost**
```swift
    open class func cancelQrphV1QrphIdCancelPost(id: String, xAPIKey: String? = nil, authorization: String? = nil, cancelQRPhRequest: CancelQRPhRequest? = nil, completion: @escaping (_ data: QRPhSingleResponse?, _ error: Error?) -> Void)
```

Cancel a QRPh request

Cancels the specified QRPh request and returns the updated request record.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MagpiePay

let id = "id_example" // String | 
let xAPIKey = "xAPIKey_example" // String |  (optional)
let authorization = "authorization_example" // String |  (optional)
let cancelQRPhRequest = CancelQRPhRequest(cancellationReason: "cancellationReason_example") // CancelQRPhRequest |  (optional)

// Cancel a QRPh request
QRPhRequestsAPI.cancelQrphV1QrphIdCancelPost(id: id, xAPIKey: xAPIKey, authorization: authorization, cancelQRPhRequest: cancelQRPhRequest) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** |  | 
 **xAPIKey** | **String** |  | [optional] 
 **authorization** | **String** |  | [optional] 
 **cancelQRPhRequest** | [**CancelQRPhRequest**](CancelQRPhRequest.md) |  | [optional] 

### Return type

[**QRPhSingleResponse**](QRPhSingleResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createQrphV1QrphPost**
```swift
    open class func createQrphV1QrphPost(canonicalCreateQRReq: CanonicalCreateQRReq, xAPIKey: String? = nil, authorization: String? = nil, completion: @escaping (_ data: QRPhSingleResponse?, _ error: Error?) -> Void)
```

Create a QRPh request

Creates a QRPh request from the canonical payload and returns the normalized request with the checkout URL attached.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MagpiePay

let canonicalCreateQRReq = CanonicalCreateQRReq(referenceId: "referenceId_example", type: "type_example", amount: 123, submerchantId: "submerchantId_example", metadata: "TODO") // CanonicalCreateQRReq | 
let xAPIKey = "xAPIKey_example" // String |  (optional)
let authorization = "authorization_example" // String |  (optional)

// Create a QRPh request
QRPhRequestsAPI.createQrphV1QrphPost(canonicalCreateQRReq: canonicalCreateQRReq, xAPIKey: xAPIKey, authorization: authorization) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **canonicalCreateQRReq** | [**CanonicalCreateQRReq**](CanonicalCreateQRReq.md) |  | 
 **xAPIKey** | **String** |  | [optional] 
 **authorization** | **String** |  | [optional] 

### Return type

[**QRPhSingleResponse**](QRPhSingleResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getQrphStatusV1QrphIdGet**
```swift
    open class func getQrphStatusV1QrphIdGet(id: String, xAPIKey: String? = nil, authorization: String? = nil, completion: @escaping (_ data: QRPhSingleResponse?, _ error: Error?) -> Void)
```

Get QRPh status

Returns the current QRPh request state, including checkout URLs and payment IDs.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MagpiePay

let id = "id_example" // String | 
let xAPIKey = "xAPIKey_example" // String |  (optional)
let authorization = "authorization_example" // String |  (optional)

// Get QRPh status
QRPhRequestsAPI.getQrphStatusV1QrphIdGet(id: id, xAPIKey: xAPIKey, authorization: authorization) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** |  | 
 **xAPIKey** | **String** |  | [optional] 
 **authorization** | **String** |  | [optional] 

### Return type

[**QRPhSingleResponse**](QRPhSingleResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listQrphV1QrphGet**
```swift
    open class func listQrphV1QrphGet(limit: Int? = nil, cursor: String? = nil, referenceId: String? = nil, xAPIKey: String? = nil, authorization: String? = nil, completion: @escaping (_ data: QRPhCollectionResponse?, _ error: Error?) -> Void)
```

List QRPh requests

Returns a paginated collection of QRPh requests for the authenticated organization. Use `limit` and `cursor` for pagination and `reference_id` to locate a specific request.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MagpiePay

let limit = 987 // Int | Number of items to return (1-100). (optional) (default to 50)
let cursor = "cursor_example" // String | Opaque cursor returned from the previous page for pagination. (optional)
let referenceId = "referenceId_example" // String | Filter on a specific request reference ID. (optional)
let xAPIKey = "xAPIKey_example" // String |  (optional)
let authorization = "authorization_example" // String |  (optional)

// List QRPh requests
QRPhRequestsAPI.listQrphV1QrphGet(limit: limit, cursor: cursor, referenceId: referenceId, xAPIKey: xAPIKey, authorization: authorization) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Int** | Number of items to return (1-100). | [optional] [default to 50]
 **cursor** | **String** | Opaque cursor returned from the previous page for pagination. | [optional] 
 **referenceId** | **String** | Filter on a specific request reference ID. | [optional] 
 **xAPIKey** | **String** |  | [optional] 
 **authorization** | **String** |  | [optional] 

### Return type

[**QRPhCollectionResponse**](QRPhCollectionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

