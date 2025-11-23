
# ApiError

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **code** | **kotlin.String** | Stable kebab-case identifier for the error. |  |
| **message** | **kotlin.String** | Human readable summary of what went wrong. |  |
| **requestId** | [**java.util.UUID**](java.util.UUID.md) | Correlation identifier attached to the request/response. |  |
| **details** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](kotlin.Any.md) | Optional machine readable context for the error. |  [optional] |



