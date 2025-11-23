
# PayoutCreateRequest

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **referenceId** | **kotlin.String** | Client-provided reference for the payout. |  |
| **channel** | [**inline**](#Channel) | Channel to use for the payout. |  |
| **amount** | **kotlin.Int** | Amount in centavos. |  |
| **sourceAccountId** | **kotlin.String** | Org bank account ID to debit. |  |
| **destination** | [**PayoutDestination**](PayoutDestination.md) | Destination account details. |  |
| **purpose** | **kotlin.String** |  |  [optional] |
| **metadata** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md) |  |  [optional] |


<a id="Channel"></a>
## Enum: channel
| Name | Value |
| ---- | ----- |
| channel | instapay, pesonet |



