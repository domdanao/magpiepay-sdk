# PayoutsApi

All URIs are relative to *https://api.magpiepay.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPayout**](#createpayout) | **POST** /v1/payouts/ | Create a payout|
|[**getPayout**](#getpayout) | **GET** /v1/payouts/{payout_id} | Get payout|
|[**listPayouts**](#listpayouts) | **GET** /v1/payouts/ | List payouts|

# **createPayout**
> PayoutSingleResponse createPayout(payoutCreateRequest)

Initiates a payout using a canonical payload and returns the normalized payout record.

### Example

```typescript
import {
    PayoutsApi,
    Configuration,
    PayoutCreateRequest
} from '@domdanao/magpiepay-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new PayoutsApi(configuration);

let payoutCreateRequest: PayoutCreateRequest; //
let xAPIKey: string; // (optional) (default to undefined)
let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.createPayout(
    payoutCreateRequest,
    xAPIKey,
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **payoutCreateRequest** | **PayoutCreateRequest**|  | |
| **xAPIKey** | [**string**] |  | (optional) defaults to undefined|
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PayoutSingleResponse**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPayout**
> PayoutSingleResponse getPayout()

Retrieves the latest state for a payout.

### Example

```typescript
import {
    PayoutsApi,
    Configuration
} from '@domdanao/magpiepay-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new PayoutsApi(configuration);

let payoutId: string; // (default to undefined)
let xAPIKey: string; // (optional) (default to undefined)
let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getPayout(
    payoutId,
    xAPIKey,
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **payoutId** | [**string**] |  | defaults to undefined|
| **xAPIKey** | [**string**] |  | (optional) defaults to undefined|
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PayoutSingleResponse**

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

# **listPayouts**
> PayoutCollectionResponse listPayouts()

Returns a paginated collection of payouts for the authenticated organization.

### Example

```typescript
import {
    PayoutsApi,
    Configuration
} from '@domdanao/magpiepay-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new PayoutsApi(configuration);

let limit: number; //Number of payouts to return (1-100). (optional) (default to 50)
let cursor: string; //Cursor returned from the previous page. (optional) (default to undefined)
let referenceId: string; //Filter payouts by reference ID. (optional) (default to undefined)
let xAPIKey: string; // (optional) (default to undefined)
let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listPayouts(
    limit,
    cursor,
    referenceId,
    xAPIKey,
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of payouts to return (1-100). | (optional) defaults to 50|
| **cursor** | [**string**] | Cursor returned from the previous page. | (optional) defaults to undefined|
| **referenceId** | [**string**] | Filter payouts by reference ID. | (optional) defaults to undefined|
| **xAPIKey** | [**string**] |  | (optional) defaults to undefined|
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PayoutCollectionResponse**

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

