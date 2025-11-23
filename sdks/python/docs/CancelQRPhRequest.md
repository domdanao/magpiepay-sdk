# CancelQRPhRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_reason** | **str** |  | [optional] 

## Example

```python
from magpiepay.models.cancel_qrph_request import CancelQRPhRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CancelQRPhRequest from a JSON string
cancel_qrph_request_instance = CancelQRPhRequest.from_json(json)
# print the JSON string representation of the object
print(CancelQRPhRequest.to_json())

# convert the object into a dict
cancel_qrph_request_dict = cancel_qrph_request_instance.to_dict()
# create an instance of CancelQRPhRequest from a dict
cancel_qrph_request_from_dict = CancelQRPhRequest.from_dict(cancel_qrph_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


