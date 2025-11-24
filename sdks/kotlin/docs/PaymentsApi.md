# PaymentsApi

All URIs are relative to *https://api.magpiepay.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getPayment**](PaymentsApi.md#getPayment) | **GET** v1/payments/{payment_id} | Get payment |
| [**listPayments**](PaymentsApi.md#listPayments) | **GET** v1/payments/ | List payments |



Get payment

Retrieve the current state of a QRPh payment.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.*
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(PaymentsApi::class.java)
val paymentId : kotlin.String = paymentId_example // kotlin.String | 
val xAPIKey : kotlin.String = xAPIKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 

val result : PaymentSingleResponse = webService.getPayment(paymentId, xAPIKey, authorization)
```

### Parameters
| **paymentId** | **kotlin.String**|  | |
| **xAPIKey** | **kotlin.String**|  | [optional] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **authorization** | **kotlin.String**|  | [optional] |

### Return type

[**PaymentSingleResponse**](PaymentSingleResponse.md)

### Authorization


Configure basicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


List payments

Returns a paginated list of QRPh payments for the authenticated organization.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.*
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(PaymentsApi::class.java)
val limit : kotlin.Int = 56 // kotlin.Int | Number of payments to return (1-100).
val cursor : kotlin.String = cursor_example // kotlin.String | Cursor returned from the previous page.
val xAPIKey : kotlin.String = xAPIKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 

val result : PaymentCollectionResponse = webService.listPayments(limit, cursor, xAPIKey, authorization)
```

### Parameters
| **limit** | **kotlin.Int**| Number of payments to return (1-100). | [optional] [default to 50] |
| **cursor** | **kotlin.String**| Cursor returned from the previous page. | [optional] |
| **xAPIKey** | **kotlin.String**|  | [optional] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **authorization** | **kotlin.String**|  | [optional] |

### Return type

[**PaymentCollectionResponse**](PaymentCollectionResponse.md)

### Authorization


Configure basicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

