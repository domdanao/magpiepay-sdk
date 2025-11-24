# ReferencesAPI

All URIs are relative to *https://api.magpiepay.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listBankCodes**](ReferencesAPI.md#listbankcodes) | **GET** /v1/references/bank_codes | List Bank Codes


# **listBankCodes**
```swift
    open class func listBankCodes(xAPIKey: String? = nil, authorization: String? = nil, completion: @escaping (_ data: BankCodeCollection?, _ error: Error?) -> Void)
```

List Bank Codes

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import MagpiePay

let xAPIKey = "xAPIKey_example" // String |  (optional)
let authorization = "authorization_example" // String |  (optional)

// List Bank Codes
ReferencesAPI.listBankCodes(xAPIKey: xAPIKey, authorization: authorization) { (response, error) in
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
 **xAPIKey** | **String** |  | [optional] 
 **authorization** | **String** |  | [optional] 

### Return type

[**BankCodeCollection**](BankCodeCollection.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

