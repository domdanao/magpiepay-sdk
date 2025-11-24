# ReferencesApi

All URIs are relative to *https://api.magpiepay.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listBankCodes**](#listbankcodes) | **GET** /v1/references/bank_codes | List Bank Codes|

# **listBankCodes**
> BankCodeCollection listBankCodes()


### Example

```typescript
import {
    ReferencesApi,
    Configuration
} from '@domdanao/magpiepay-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ReferencesApi(configuration);

let xAPIKey: string; // (optional) (default to undefined)
let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listBankCodes(
    xAPIKey,
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xAPIKey** | [**string**] |  | (optional) defaults to undefined|
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**BankCodeCollection**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

