# ApiError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Stable kebab-case identifier for the error. | 
**message** | **str** | Human readable summary of what went wrong. | 
**details** | **Dict[str, object]** | Optional machine readable context for the error. | [optional] 
**request_id** | **str** | Correlation identifier attached to the request/response. | 

## Example

```python
from magpiepay.models.api_error import ApiError

# TODO update the JSON string below
json = "{}"
# create an instance of ApiError from a JSON string
api_error_instance = ApiError.from_json(json)
# print the JSON string representation of the object
print(ApiError.to_json())

# convert the object into a dict
api_error_dict = api_error_instance.to_dict()
# create an instance of ApiError from a dict
api_error_from_dict = ApiError.from_dict(api_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


