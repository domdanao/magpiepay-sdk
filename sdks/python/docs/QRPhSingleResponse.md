# QRPhSingleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**QRPhResponse**](QRPhResponse.md) |  | 

## Example

```python
from magpiepay.models.qrph_single_response import QRPhSingleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QRPhSingleResponse from a JSON string
qrph_single_response_instance = QRPhSingleResponse.from_json(json)
# print the JSON string representation of the object
print(QRPhSingleResponse.to_json())

# convert the object into a dict
qrph_single_response_dict = qrph_single_response_instance.to_dict()
# create an instance of QRPhSingleResponse from a dict
qrph_single_response_from_dict = QRPhSingleResponse.from_dict(qrph_single_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


