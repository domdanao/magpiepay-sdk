# PayoutCreateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referenceId** | **String** | Client-provided reference for the payout. | 
**channel** | **String** | Channel to use for the payout. | 
**amount** | **Int** | Amount in centavos. | 
**sourceAccountId** | **String** | Org bank account ID to debit. | 
**destination** | [**PayoutDestination**](PayoutDestination.md) | Destination account details. | 
**purpose** | **String** |  | [optional] 
**metadata** | **[String: AnyCodable]** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


