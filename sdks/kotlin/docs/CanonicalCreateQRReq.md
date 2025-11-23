
# CanonicalCreateQRReq

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **referenceId** | **kotlin.String** | Client-provided identifier used to correlate the QRPh request. |  |
| **type** | [**inline**](#Type) | QR type, dynamic for fixed payments or static for amount-less flows. |  |
| **amount** | **kotlin.Int** |  |  [optional] |
| **submerchantId** | **kotlin.String** |  |  [optional] |
| **metadata** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md) |  |  [optional] |


<a id="Type"></a>
## Enum: type
| Name | Value |
| ---- | ----- |
| type | static, dynamic |



