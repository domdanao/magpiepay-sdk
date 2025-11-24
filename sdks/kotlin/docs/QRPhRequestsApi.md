# QRPhRequestsApi

All URIs are relative to *https://api.magpiepay.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**cancelQrph**](QRPhRequestsApi.md#cancelQrph) | **POST** v1/qrph/{id}/cancel | Cancel a QRPh request |
| [**createQrph**](QRPhRequestsApi.md#createQrph) | **POST** v1/qrph/ | Create a QRPh request |
| [**getQrph**](QRPhRequestsApi.md#getQrph) | **GET** v1/qrph/{id} | Get QRPh status |
| [**listQrph**](QRPhRequestsApi.md#listQrph) | **GET** v1/qrph/ | List QRPh requests |



Cancel a QRPh request

Cancels the specified QRPh request and returns the updated request record.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.*
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(QRPhRequestsApi::class.java)
val id : kotlin.String = id_example // kotlin.String | 
val xAPIKey : kotlin.String = xAPIKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val cancelQRPhRequest : CancelQRPhRequest = {"cancellation_reason":"Customer requested refund"} // CancelQRPhRequest | 

val result : QRPhSingleResponse = webService.cancelQrph(id, xAPIKey, authorization, cancelQRPhRequest)
```

### Parameters
| **id** | **kotlin.String**|  | |
| **xAPIKey** | **kotlin.String**|  | [optional] |
| **authorization** | **kotlin.String**|  | [optional] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **cancelQRPhRequest** | [**CancelQRPhRequest**](CancelQRPhRequest.md)|  | [optional] |

### Return type

[**QRPhSingleResponse**](QRPhSingleResponse.md)

### Authorization


Configure basicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


Create a QRPh request

Creates a QRPh request from the canonical payload and returns the normalized request with the checkout URL attached.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.*
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(QRPhRequestsApi::class.java)
val canonicalCreateQRReq : CanonicalCreateQRReq = {"reference_id":"order-2025-11-20","type":"dynamic","amount":2500,"metadata":{"customer_id":"cust_123","notes":"in-store purchase"}} // CanonicalCreateQRReq | 
val xAPIKey : kotlin.String = xAPIKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 

val result : QRPhSingleResponse = webService.createQrph(canonicalCreateQRReq, xAPIKey, authorization)
```

### Parameters
| **canonicalCreateQRReq** | [**CanonicalCreateQRReq**](CanonicalCreateQRReq.md)|  | |
| **xAPIKey** | **kotlin.String**|  | [optional] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **authorization** | **kotlin.String**|  | [optional] |

### Return type

[**QRPhSingleResponse**](QRPhSingleResponse.md)

### Authorization


Configure basicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


Get QRPh status

Returns the current QRPh request state, including checkout URLs and payment IDs.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.*
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(QRPhRequestsApi::class.java)
val id : kotlin.String = id_example // kotlin.String | 
val xAPIKey : kotlin.String = xAPIKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 

val result : QRPhSingleResponse = webService.getQrph(id, xAPIKey, authorization)
```

### Parameters
| **id** | **kotlin.String**|  | |
| **xAPIKey** | **kotlin.String**|  | [optional] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **authorization** | **kotlin.String**|  | [optional] |

### Return type

[**QRPhSingleResponse**](QRPhSingleResponse.md)

### Authorization


Configure basicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


List QRPh requests

Returns a paginated collection of QRPh requests for the authenticated organization. Use &#x60;limit&#x60; and &#x60;cursor&#x60; for pagination and &#x60;reference_id&#x60; to locate a specific request.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.*
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(QRPhRequestsApi::class.java)
val limit : kotlin.Int = 56 // kotlin.Int | Number of items to return (1-100).
val cursor : kotlin.String = cursor_example // kotlin.String | Opaque cursor returned from the previous page for pagination.
val referenceId : kotlin.String = referenceId_example // kotlin.String | Filter on a specific request reference ID.
val xAPIKey : kotlin.String = xAPIKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 

val result : QRPhCollectionResponse = webService.listQrph(limit, cursor, referenceId, xAPIKey, authorization)
```

### Parameters
| **limit** | **kotlin.Int**| Number of items to return (1-100). | [optional] [default to 50] |
| **cursor** | **kotlin.String**| Opaque cursor returned from the previous page for pagination. | [optional] |
| **referenceId** | **kotlin.String**| Filter on a specific request reference ID. | [optional] |
| **xAPIKey** | **kotlin.String**|  | [optional] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **authorization** | **kotlin.String**|  | [optional] |

### Return type

[**QRPhCollectionResponse**](QRPhCollectionResponse.md)

### Authorization


Configure basicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

