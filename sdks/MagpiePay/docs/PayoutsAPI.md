# PayoutsAPI

All URIs are relative to *https://api.magpiepay.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPayout**](PayoutsAPI.md#createpayout) | **POST** /v1/payouts/ | Create a payout
[**getPayout**](PayoutsAPI.md#getpayout) | **GET** /v1/payouts/{payout_id} | Get payout
[**listPayouts**](PayoutsAPI.md#listpayouts) | **GET** /v1/payouts/ | List payouts


# **createPayout**
```swift
    open class func createPayout(payoutCreateRequest: PayoutCreateRequest, xAPIKey: String? = nil, authorization: String? = nil, completion: @escaping (_ data: PayoutSingleResponse?, _ error: Error?) -> Void)
```

Create a payout

Initiates a payout using a canonical payload and returns the normalized payout record.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MagpiePay

let payoutCreateRequest = PayoutCreateRequest(referenceId: "referenceId_example", channel: "channel_example", amount: 123, sourceAccountId: "sourceAccountId_example", destination: PayoutDestination(firstName: "firstName_example", lastName: "lastName_example", bankCode: "bankCode_example", accountNumber: "accountNumber_example"), purpose: "purpose_example", metadata: "TODO") // PayoutCreateRequest | 
let xAPIKey = "xAPIKey_example" // String |  (optional)
let authorization = "authorization_example" // String |  (optional)

// Create a payout
PayoutsAPI.createPayout(payoutCreateRequest: payoutCreateRequest, xAPIKey: xAPIKey, authorization: authorization) { (response, error) in
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
 **payoutCreateRequest** | [**PayoutCreateRequest**](PayoutCreateRequest.md) |  | 
 **xAPIKey** | **String** |  | [optional] 
 **authorization** | **String** |  | [optional] 

### Return type

[**PayoutSingleResponse**](PayoutSingleResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPayout**
```swift
    open class func getPayout(payoutId: String, xAPIKey: String? = nil, authorization: String? = nil, completion: @escaping (_ data: PayoutSingleResponse?, _ error: Error?) -> Void)
```

Get payout

Retrieves the latest state for a payout.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MagpiePay

let payoutId = "payoutId_example" // String | 
let xAPIKey = "xAPIKey_example" // String |  (optional)
let authorization = "authorization_example" // String |  (optional)

// Get payout
PayoutsAPI.getPayout(payoutId: payoutId, xAPIKey: xAPIKey, authorization: authorization) { (response, error) in
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
 **payoutId** | **String** |  | 
 **xAPIKey** | **String** |  | [optional] 
 **authorization** | **String** |  | [optional] 

### Return type

[**PayoutSingleResponse**](PayoutSingleResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPayouts**
```swift
    open class func listPayouts(limit: Int? = nil, cursor: String? = nil, referenceId: String? = nil, xAPIKey: String? = nil, authorization: String? = nil, completion: @escaping (_ data: PayoutCollectionResponse?, _ error: Error?) -> Void)
```

List payouts

Returns a paginated collection of payouts for the authenticated organization.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MagpiePay

let limit = 987 // Int | Number of payouts to return (1-100). (optional) (default to 50)
let cursor = "cursor_example" // String | Cursor returned from the previous page. (optional)
let referenceId = "referenceId_example" // String | Filter payouts by reference ID. (optional)
let xAPIKey = "xAPIKey_example" // String |  (optional)
let authorization = "authorization_example" // String |  (optional)

// List payouts
PayoutsAPI.listPayouts(limit: limit, cursor: cursor, referenceId: referenceId, xAPIKey: xAPIKey, authorization: authorization) { (response, error) in
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
 **limit** | **Int** | Number of payouts to return (1-100). | [optional] [default to 50]
 **cursor** | **String** | Cursor returned from the previous page. | [optional] 
 **referenceId** | **String** | Filter payouts by reference ID. | [optional] 
 **xAPIKey** | **String** |  | [optional] 
 **authorization** | **String** |  | [optional] 

### Return type

[**PayoutCollectionResponse**](PayoutCollectionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

