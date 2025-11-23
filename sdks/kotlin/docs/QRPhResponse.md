
# QRPhResponse

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **id** | **kotlin.String** | Unique identifier for the QRPh request. |  |
| **referenceId** | **kotlin.String** | Client-provided reference for correlating the request. |  |
| **type** | [**inline**](#Type) | QR code type, either static or dynamic. |  |
| **status** | [**inline**](#Status) | Current status of the QRPh request. |  |
| **createdAt** | **kotlin.String** | ISO timestamp when the QRPh request was created. |  |
| **updatedAt** | **kotlin.String** | ISO timestamp when the QRPh request was last updated. |  |
| **livemode** | **kotlin.Boolean** | Indicates whether the request was created in live or test mode. |  |
| **amount** | **kotlin.Int** |  |  [optional] |
| **submerchantId** | **kotlin.String** |  |  [optional] |
| **metadata** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md) |  |  [optional] |
| **qrphPayload** | **kotlin.String** |  |  [optional] |
| **qrphImage** | **kotlin.String** |  |  [optional] |
| **checkoutUrl** | **kotlin.String** |  |  [optional] |
| **paymentId** | **kotlin.String** |  |  [optional] |
| **paidAt** | **kotlin.String** |  |  [optional] |
| **expiresAt** | **kotlin.String** |  |  [optional] |
| **cancelledAt** | **kotlin.String** |  |  [optional] |
| **cancellationReason** | **kotlin.String** |  |  [optional] |


<a id="Type"></a>
## Enum: type
| Name | Value |
| ---- | ----- |
| type | static, dynamic |


<a id="Status"></a>
## Enum: status
| Name | Value |
| ---- | ----- |
| status | active, paid, cancelled, expired |



