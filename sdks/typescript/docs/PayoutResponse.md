# PayoutResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique payout identifier. | [default to undefined]
**reference_id** | **string** | Client-provided reference tying to the payout request. | [default to undefined]
**channel** | **string** | Payment channel (instapay/pesonet). | [default to undefined]
**amount** | **number** | Amount in centavos. | [default to undefined]
**magpie_fee** | **number** |  | [optional] [default to undefined]
**source_account_id** | **string** | Org bank account used as source. | [default to undefined]
**destination** | [**PayoutDestinationResponse**](PayoutDestinationResponse.md) | Destination bank account data. | [default to undefined]
**purpose** | **string** |  | [optional] [default to undefined]
**status** | **string** | Current status of the payout. | [default to undefined]
**provider** | **string** |  | [optional] [default to undefined]
**provider_ref** | **{ [key: string]: any; }** | Provider-specific reference data. | [optional] [default to undefined]
**provider_message** | **string** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** | Merchant-defined metadata. | [optional] [default to undefined]
**created_at** | **string** | ISO timestamp when payout was created. | [default to undefined]
**updated_at** | **string** | ISO timestamp when the payout was last modified. | [default to undefined]
**posted_at** | **string** |  | [optional] [default to undefined]
**completed_at** | **string** |  | [optional] [default to undefined]
**failed_at** | **string** |  | [optional] [default to undefined]
**failure_code** | **string** |  | [optional] [default to undefined]
**failure_message** | **string** |  | [optional] [default to undefined]
**livemode** | **boolean** | True when the payout was created in live mode. | [default to undefined]

## Example

```typescript
import { PayoutResponse } from '@magpiepay/sdk';

const instance: PayoutResponse = {
    id,
    reference_id,
    channel,
    amount,
    magpie_fee,
    source_account_id,
    destination,
    purpose,
    status,
    provider,
    provider_ref,
    provider_message,
    metadata,
    created_at,
    updated_at,
    posted_at,
    completed_at,
    failed_at,
    failure_code,
    failure_message,
    livemode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
