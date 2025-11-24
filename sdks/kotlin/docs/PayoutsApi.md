# PayoutsApi

All URIs are relative to *https://api.magpiepay.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createPayout**](PayoutsApi.md#createPayout) | **POST** v1/payouts/ | Create a payout |
| [**getPayout**](PayoutsApi.md#getPayout) | **GET** v1/payouts/{payout_id} | Get payout |
| [**listPayouts**](PayoutsApi.md#listPayouts) | **GET** v1/payouts/ | List payouts |



Create a payout

Initiates a payout using a canonical payload and returns the normalized payout record.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.*
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(PayoutsApi::class.java)
val payoutCreateRequest : PayoutCreateRequest = {"reference_id":"PAYOUT-123-456","channel":"instapay","amount":40000,"source_account_id":"act_01k90z02ps251323zgkd23cb0d","destination":{"first_name":"Juan","last_name":"Dela Cruz","bank_code":"bdo","account_number":"002400091125"},"purpose":"Salary payout"} // PayoutCreateRequest | 
val xAPIKey : kotlin.String = xAPIKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 

val result : PayoutSingleResponse = webService.createPayout(payoutCreateRequest, xAPIKey, authorization)
```

### Parameters
| **payoutCreateRequest** | [**PayoutCreateRequest**](PayoutCreateRequest.md)|  | |
| **xAPIKey** | **kotlin.String**|  | [optional] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **authorization** | **kotlin.String**|  | [optional] |

### Return type

[**PayoutSingleResponse**](PayoutSingleResponse.md)

### Authorization


Configure basicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


Get payout

Retrieves the latest state for a payout.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.*
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(PayoutsApi::class.java)
val payoutId : kotlin.String = payoutId_example // kotlin.String | 
val xAPIKey : kotlin.String = xAPIKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 

val result : PayoutSingleResponse = webService.getPayout(payoutId, xAPIKey, authorization)
```

### Parameters
| **payoutId** | **kotlin.String**|  | |
| **xAPIKey** | **kotlin.String**|  | [optional] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **authorization** | **kotlin.String**|  | [optional] |

### Return type

[**PayoutSingleResponse**](PayoutSingleResponse.md)

### Authorization


Configure basicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


List payouts

Returns a paginated collection of payouts for the authenticated organization.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.*
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(PayoutsApi::class.java)
val limit : kotlin.Int = 56 // kotlin.Int | Number of payouts to return (1-100).
val cursor : kotlin.String = cursor_example // kotlin.String | Cursor returned from the previous page.
val referenceId : kotlin.String = referenceId_example // kotlin.String | Filter payouts by reference ID.
val xAPIKey : kotlin.String = xAPIKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 

val result : PayoutCollectionResponse = webService.listPayouts(limit, cursor, referenceId, xAPIKey, authorization)
```

### Parameters
| **limit** | **kotlin.Int**| Number of payouts to return (1-100). | [optional] [default to 50] |
| **cursor** | **kotlin.String**| Cursor returned from the previous page. | [optional] |
| **referenceId** | **kotlin.String**| Filter payouts by reference ID. | [optional] |
| **xAPIKey** | **kotlin.String**|  | [optional] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **authorization** | **kotlin.String**|  | [optional] |

### Return type

[**PayoutCollectionResponse**](PayoutCollectionResponse.md)

### Authorization


Configure basicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

