# QRPhRequestsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelQrphV1QrphIdCancelPost**](#cancelqrphv1qrphidcancelpost) | **POST** /v1/qrph/{id}/cancel | Cancel a QRPh request|
|[**createQrphV1QrphPost**](#createqrphv1qrphpost) | **POST** /v1/qrph/ | Create a QRPh request|
|[**getQrphStatusV1QrphIdGet**](#getqrphstatusv1qrphidget) | **GET** /v1/qrph/{id} | Get QRPh status|
|[**listQrphV1QrphGet**](#listqrphv1qrphget) | **GET** /v1/qrph/ | List QRPh requests|

# **cancelQrphV1QrphIdCancelPost**
> QRPhSingleResponse cancelQrphV1QrphIdCancelPost()

Cancels the specified QRPh request and returns the updated request record.

### Example

```typescript
import {
    QRPhRequestsApi,
    Configuration,
    CancelQRPhRequest
} from '@magpiepay/sdk';

const configuration = new Configuration();
const apiInstance = new QRPhRequestsApi(configuration);

let id: string; // (default to undefined)
let xAPIKey: string; // (optional) (default to undefined)
let authorization: string; // (optional) (default to undefined)
let cancelQRPhRequest: CancelQRPhRequest; // (optional)

const { status, data } = await apiInstance.cancelQrphV1QrphIdCancelPost(
    id,
    xAPIKey,
    authorization,
    cancelQRPhRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelQRPhRequest** | **CancelQRPhRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xAPIKey** | [**string**] |  | (optional) defaults to undefined|
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**QRPhSingleResponse**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createQrphV1QrphPost**
> QRPhSingleResponse createQrphV1QrphPost(canonicalCreateQRReq)

Creates a QRPh request from the canonical payload and returns the normalized request with the checkout URL attached.

### Example

```typescript
import {
    QRPhRequestsApi,
    Configuration,
    CanonicalCreateQRReq
} from '@magpiepay/sdk';

const configuration = new Configuration();
const apiInstance = new QRPhRequestsApi(configuration);

let canonicalCreateQRReq: CanonicalCreateQRReq; //
let xAPIKey: string; // (optional) (default to undefined)
let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.createQrphV1QrphPost(
    canonicalCreateQRReq,
    xAPIKey,
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **canonicalCreateQRReq** | **CanonicalCreateQRReq**|  | |
| **xAPIKey** | [**string**] |  | (optional) defaults to undefined|
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**QRPhSingleResponse**

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

# **getQrphStatusV1QrphIdGet**
> QRPhSingleResponse getQrphStatusV1QrphIdGet()

Returns the current QRPh request state, including checkout URLs and payment IDs.

### Example

```typescript
import {
    QRPhRequestsApi,
    Configuration
} from '@magpiepay/sdk';

const configuration = new Configuration();
const apiInstance = new QRPhRequestsApi(configuration);

let id: string; // (default to undefined)
let xAPIKey: string; // (optional) (default to undefined)
let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getQrphStatusV1QrphIdGet(
    id,
    xAPIKey,
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xAPIKey** | [**string**] |  | (optional) defaults to undefined|
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**QRPhSingleResponse**

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

# **listQrphV1QrphGet**
> QRPhCollectionResponse listQrphV1QrphGet()

Returns a paginated collection of QRPh requests for the authenticated organization. Use `limit` and `cursor` for pagination and `reference_id` to locate a specific request.

### Example

```typescript
import {
    QRPhRequestsApi,
    Configuration
} from '@magpiepay/sdk';

const configuration = new Configuration();
const apiInstance = new QRPhRequestsApi(configuration);

let limit: number; //Number of items to return (1-100). (optional) (default to 50)
let cursor: string; //Opaque cursor returned from the previous page for pagination. (optional) (default to undefined)
let referenceId: string; //Filter on a specific request reference ID. (optional) (default to undefined)
let xAPIKey: string; // (optional) (default to undefined)
let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listQrphV1QrphGet(
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
| **limit** | [**number**] | Number of items to return (1-100). | (optional) defaults to 50|
| **cursor** | [**string**] | Opaque cursor returned from the previous page for pagination. | (optional) defaults to undefined|
| **referenceId** | [**string**] | Filter on a specific request reference ID. | (optional) defaults to undefined|
| **xAPIKey** | [**string**] |  | (optional) defaults to undefined|
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**QRPhCollectionResponse**

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

