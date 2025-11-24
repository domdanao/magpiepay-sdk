# PayoutResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique payout identifier. | 
**referenceId** | **String** | Client-provided reference tying to the payout request. | 
**channel** | **String** | Payment channel (instapay/pesonet). | 
**amount** | **Int** | Amount in centavos. | 
**magpieFee** | **Int** |  | [optional] 
**sourceAccountId** | **String** | Org bank account used as source. | 
**destination** | [**PayoutDestinationResponse**](PayoutDestinationResponse.md) | Destination bank account data. | 
**purpose** | **String** |  | [optional] 
**status** | **String** | Current status of the payout. | 
**provider** | **String** |  | [optional] 
**providerRef** | **[String: AnyCodable]** | Provider-specific reference data. | [optional] 
**providerMessage** | **String** |  | [optional] 
**metadata** | **[String: AnyCodable]** | Merchant-defined metadata. | [optional] 
**createdAt** | **String** | ISO timestamp when payout was created. | 
**updatedAt** | **String** | ISO timestamp when the payout was last modified. | 
**postedAt** | **String** |  | [optional] 
**completedAt** | **String** |  | [optional] 
**failedAt** | **String** |  | [optional] 
**failureCode** | **String** |  | [optional] 
**failureMessage** | **String** |  | [optional] 
**livemode** | **Bool** | True when the payout was created in live mode. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


