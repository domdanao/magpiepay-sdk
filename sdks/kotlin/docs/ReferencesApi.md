# ReferencesApi

All URIs are relative to *https://api.magpiepay.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**listBankCodes**](ReferencesApi.md#listBankCodes) | **GET** v1/references/bank_codes | List Bank Codes |



List Bank Codes

### Example
```kotlin
// Import classes:
//import org.openapitools.client.*
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiClient = ApiClient()
apiClient.setCredentials("USERNAME", "PASSWORD")
val webService = apiClient.createWebservice(ReferencesApi::class.java)
val xAPIKey : kotlin.String = xAPIKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 

val result : BankCodeCollection = webService.listBankCodes(xAPIKey, authorization)
```

### Parameters
| **xAPIKey** | **kotlin.String**|  | [optional] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **authorization** | **kotlin.String**|  | [optional] |

### Return type

[**BankCodeCollection**](BankCodeCollection.md)

### Authorization


Configure basicAuth:
    ApiClient().setCredentials("USERNAME", "PASSWORD")

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

