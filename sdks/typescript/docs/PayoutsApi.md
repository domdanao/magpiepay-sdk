# PayoutsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPayoutV1PayoutsPost**](#createpayoutv1payoutspost) | **POST** /v1/payouts/ | Create a payout|
|[**getPayoutV1PayoutsPayoutIdGet**](#getpayoutv1payoutspayoutidget) | **GET** /v1/payouts/{payout_id} | Get payout|
|[**listPayoutsV1PayoutsGet**](#listpayoutsv1payoutsget) | **GET** /v1/payouts/ | List payouts|

# **createPayoutV1PayoutsPost**
> PayoutSingleResponse createPayoutV1PayoutsPost(payoutCreateRequest)

Initiates a payout using a canonical payload and returns the normalized payout record.

### Example

```typescript
import {
    PayoutsApi,
    Configuration,
    PayoutCreateRequest
} from '@magpiepay/sdk';

const configuration = new Configuration();
const apiInstance = new PayoutsApi(configuration);

let payoutCreateRequest: PayoutCreateRequest; //
let xAPIKey: string; // (optional) (default to undefined)
let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.createPayoutV1PayoutsPost(
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

# **getPayoutV1PayoutsPayoutIdGet**
> PayoutSingleResponse getPayoutV1PayoutsPayoutIdGet()

Retrieves the latest state for a payout.

### Example

```typescript
import {
    PayoutsApi,
    Configuration
} from '@magpiepay/sdk';

const configuration = new Configuration();
const apiInstance = new PayoutsApi(configuration);

let payoutId: string; // (default to undefined)
let xAPIKey: string; // (optional) (default to undefined)
let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getPayoutV1PayoutsPayoutIdGet(
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

# **listPayoutsV1PayoutsGet**
> PayoutCollectionResponse listPayoutsV1PayoutsGet()

Returns a paginated collection of payouts for the authenticated organization.

### Example

```typescript
import {
    PayoutsApi,
    Configuration
} from '@magpiepay/sdk';

const configuration = new Configuration();
const apiInstance = new PayoutsApi(configuration);

let limit: number; //Number of payouts to return (1-100). (optional) (default to 50)
let cursor: string; //Cursor returned from the previous page. (optional) (default to undefined)
let referenceId: string; //Filter payouts by reference ID. (optional) (default to undefined)
let xAPIKey: string; // (optional) (default to undefined)
let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listPayoutsV1PayoutsGet(
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

