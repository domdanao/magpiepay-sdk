# QRPhResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the QRPh request. | 
**referenceId** | **String** | Client-provided reference for correlating the request. | 
**type** | **String** | QR code type, either static or dynamic. | 
**amount** | **Int** |  | [optional] 
**submerchantId** | **String** |  | [optional] 
**status** | **String** | Current status of the QRPh request. | 
**metadata** | **[String: AnyCodable]** |  | [optional] 
**qrphPayload** | **String** |  | [optional] 
**qrphImage** | **String** |  | [optional] 
**checkoutUrl** | **String** |  | [optional] 
**paymentId** | **String** |  | [optional] 
**paidAt** | **String** |  | [optional] 
**expiresAt** | **String** |  | [optional] 
**cancelledAt** | **String** |  | [optional] 
**cancellationReason** | **String** |  | [optional] 
**createdAt** | **String** | ISO timestamp when the QRPh request was created. | 
**updatedAt** | **String** | ISO timestamp when the QRPh request was last updated. | 
**livemode** | **Bool** | Indicates whether the request was created in live or test mode. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


