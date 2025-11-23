# CanonicalCreateQRReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference_id** | **string** | Client-provided identifier used to correlate the QRPh request. | [default to undefined]
**type** | **string** | QR type, dynamic for fixed payments or static for amount-less flows. | [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**submerchant_id** | **string** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** |  | [optional] [default to undefined]

## Example

```typescript
import { CanonicalCreateQRReq } from '@magpiepay/sdk';

const instance: CanonicalCreateQRReq = {
    reference_id,
    type,
    amount,
    submerchant_id,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
