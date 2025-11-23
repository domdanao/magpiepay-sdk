# PaymentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the payment record. | [default to undefined]
**qrph_id** | **string** | Associated QRPh request identifier. | [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**magpie_mdr** | **string** |  | [optional] [default to undefined]
**magpie_fee** | **number** |  | [optional] [default to undefined]
**merchant_net_amount** | **number** |  | [optional] [default to undefined]
**payment_source** | **string** |  | [optional] [default to undefined]
**paid_at** | **string** |  | [optional] [default to undefined]
**created_at** | **string** | ISO timestamp when the payment record was created. | [default to undefined]
**updated_at** | **string** | ISO timestamp when the payment record was last updated. | [default to undefined]
**livemode** | **boolean** | Whether the payment was processed in live mode. | [default to undefined]

## Example

```typescript
import { PaymentResponse } from '@magpiepay/sdk';

const instance: PaymentResponse = {
    id,
    qrph_id,
    status,
    amount,
    magpie_mdr,
    magpie_fee,
    merchant_net_amount,
    payment_source,
    paid_at,
    created_at,
    updated_at,
    livemode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
