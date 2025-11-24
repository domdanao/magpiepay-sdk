# ApiError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Stable kebab-case identifier for the error. | [default to undefined]
**message** | **string** | Human readable summary of what went wrong. | [default to undefined]
**details** | **{ [key: string]: any; }** | Optional machine readable context for the error. | [optional] [default to undefined]
**request_id** | **string** | Correlation identifier attached to the request/response. | [default to undefined]

## Example

```typescript
import { ApiError } from '@domdanao/magpiepay-sdk-typescript';

const instance: ApiError = {
    code,
    message,
    details,
    request_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
