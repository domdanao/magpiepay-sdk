# PaymentsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getPaymentV1PaymentsPaymentIdGet**](#getpaymentv1paymentspaymentidget) | **GET** /v1/payments/{payment_id} | Get payment|
|[**listPaymentsV1PaymentsGet**](#listpaymentsv1paymentsget) | **GET** /v1/payments/ | List payments|

# **getPaymentV1PaymentsPaymentIdGet**
> PaymentSingleResponse getPaymentV1PaymentsPaymentIdGet()

Retrieve the current state of a QRPh payment.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from '@magpiepay/sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let paymentId: string; // (default to undefined)
let xAPIKey: string; // (optional) (default to undefined)
let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getPaymentV1PaymentsPaymentIdGet(
    paymentId,
    xAPIKey,
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentId** | [**string**] |  | defaults to undefined|
| **xAPIKey** | [**string**] |  | (optional) defaults to undefined|
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PaymentSingleResponse**

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

# **listPaymentsV1PaymentsGet**
> PaymentCollectionResponse listPaymentsV1PaymentsGet()

Returns a paginated list of QRPh payments for the authenticated organization.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from '@magpiepay/sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let limit: number; //Number of payments to return (1-100). (optional) (default to 50)
let cursor: string; //Cursor returned from the previous page. (optional) (default to undefined)
let xAPIKey: string; // (optional) (default to undefined)
let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listPaymentsV1PaymentsGet(
    limit,
    cursor,
    xAPIKey,
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of payments to return (1-100). | (optional) defaults to 50|
| **cursor** | [**string**] | Cursor returned from the previous page. | (optional) defaults to undefined|
| **xAPIKey** | [**string**] |  | (optional) defaults to undefined|
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PaymentCollectionResponse**

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

