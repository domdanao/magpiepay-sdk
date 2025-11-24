# QRPhResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the QRPh request. | [default to undefined]
**reference_id** | **string** | Client-provided reference for correlating the request. | [default to undefined]
**type** | **string** | QR code type, either static or dynamic. | [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**submerchant_id** | **string** |  | [optional] [default to undefined]
**status** | **string** | Current status of the QRPh request. | [default to undefined]
**metadata** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**qrph_payload** | **string** |  | [optional] [default to undefined]
**qrph_image** | **string** |  | [optional] [default to undefined]
**checkout_url** | **string** |  | [optional] [default to undefined]
**payment_id** | **string** |  | [optional] [default to undefined]
**paid_at** | **string** |  | [optional] [default to undefined]
**expires_at** | **string** |  | [optional] [default to undefined]
**cancelled_at** | **string** |  | [optional] [default to undefined]
**cancellation_reason** | **string** |  | [optional] [default to undefined]
**created_at** | **string** | ISO timestamp when the QRPh request was created. | [default to undefined]
**updated_at** | **string** | ISO timestamp when the QRPh request was last updated. | [default to undefined]
**livemode** | **boolean** | Indicates whether the request was created in live or test mode. | [default to undefined]

## Example

```typescript
import { QRPhResponse } from '@domdanao/magpiepay-sdk-typescript';

const instance: QRPhResponse = {
    id,
    reference_id,
    type,
    amount,
    submerchant_id,
    status,
    metadata,
    qrph_payload,
    qrph_image,
    checkout_url,
    payment_id,
    paid_at,
    expires_at,
    cancelled_at,
    cancellation_reason,
    created_at,
    updated_at,
    livemode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
