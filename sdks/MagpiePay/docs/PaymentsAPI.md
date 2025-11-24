# PaymentsAPI

All URIs are relative to *https://api.magpiepay.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayment**](PaymentsAPI.md#getpayment) | **GET** /v1/payments/{payment_id} | Get payment
[**listPayments**](PaymentsAPI.md#listpayments) | **GET** /v1/payments/ | List payments


# **getPayment**
```swift
    open class func getPayment(paymentId: String, xAPIKey: String? = nil, authorization: String? = nil, completion: @escaping (_ data: PaymentSingleResponse?, _ error: Error?) -> Void)
```

Get payment

Retrieve the current state of a QRPh payment.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MagpiePay

let paymentId = "paymentId_example" // String | 
let xAPIKey = "xAPIKey_example" // String |  (optional)
let authorization = "authorization_example" // String |  (optional)

// Get payment
PaymentsAPI.getPayment(paymentId: paymentId, xAPIKey: xAPIKey, authorization: authorization) { (response, error) in
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
 **paymentId** | **String** |  | 
 **xAPIKey** | **String** |  | [optional] 
 **authorization** | **String** |  | [optional] 

### Return type

[**PaymentSingleResponse**](PaymentSingleResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPayments**
```swift
    open class func listPayments(limit: Int? = nil, cursor: String? = nil, xAPIKey: String? = nil, authorization: String? = nil, completion: @escaping (_ data: PaymentCollectionResponse?, _ error: Error?) -> Void)
```

List payments

Returns a paginated list of QRPh payments for the authenticated organization.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MagpiePay

let limit = 987 // Int | Number of payments to return (1-100). (optional) (default to 50)
let cursor = "cursor_example" // String | Cursor returned from the previous page. (optional)
let xAPIKey = "xAPIKey_example" // String |  (optional)
let authorization = "authorization_example" // String |  (optional)

// List payments
PaymentsAPI.listPayments(limit: limit, cursor: cursor, xAPIKey: xAPIKey, authorization: authorization) { (response, error) in
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
 **limit** | **Int** | Number of payments to return (1-100). | [optional] [default to 50]
 **cursor** | **String** | Cursor returned from the previous page. | [optional] 
 **xAPIKey** | **String** |  | [optional] 
 **authorization** | **String** |  | [optional] 

### Return type

[**PaymentCollectionResponse**](PaymentCollectionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

