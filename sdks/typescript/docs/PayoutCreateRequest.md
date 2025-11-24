# PayoutCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference_id** | **string** | Client-provided reference for the payout. | [default to undefined]
**channel** | **string** | Channel to use for the payout. | [default to undefined]
**amount** | **number** | Amount in centavos. | [default to undefined]
**source_account_id** | **string** | Org bank account ID to debit. | [default to undefined]
**destination** | [**PayoutDestination**](PayoutDestination.md) | Destination account details. | [default to undefined]
**purpose** | **string** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** |  | [optional] [default to undefined]

## Example

```typescript
import { PayoutCreateRequest } from '@domdanao/magpiepay-sdk-typescript';

const instance: PayoutCreateRequest = {
    reference_id,
    channel,
    amount,
    source_account_id,
    destination,
    purpose,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
