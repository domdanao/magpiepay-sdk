
# PayoutResponse

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **id** | **kotlin.String** | Unique payout identifier. |  |
| **referenceId** | **kotlin.String** | Client-provided reference tying to the payout request. |  |
| **channel** | **kotlin.String** | Payment channel (instapay/pesonet). |  |
| **amount** | **kotlin.Int** | Amount in centavos. |  |
| **sourceAccountId** | **kotlin.String** | Org bank account used as source. |  |
| **destination** | [**PayoutDestinationResponse**](PayoutDestinationResponse.md) | Destination bank account data. |  |
| **status** | **kotlin.String** | Current status of the payout. |  |
| **createdAt** | **kotlin.String** | ISO timestamp when payout was created. |  |
| **updatedAt** | **kotlin.String** | ISO timestamp when the payout was last modified. |  |
| **livemode** | **kotlin.Boolean** | True when the payout was created in live mode. |  |
| **magpieFee** | **kotlin.Int** |  |  [optional] |
| **purpose** | **kotlin.String** |  |  [optional] |
| **provider** | **kotlin.String** |  |  [optional] |
| **providerRef** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md) | Provider-specific reference data. |  [optional] |
| **providerMessage** | **kotlin.String** |  |  [optional] |
| **metadata** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md) | Merchant-defined metadata. |  [optional] |
| **postedAt** | **kotlin.String** |  |  [optional] |
| **completedAt** | **kotlin.String** |  |  [optional] |
| **failedAt** | **kotlin.String** |  |  [optional] |
| **failureCode** | **kotlin.String** |  |  [optional] |
| **failureMessage** | **kotlin.String** |  |  [optional] |



