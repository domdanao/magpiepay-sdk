# QRPhCollectionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[QRPhResponse]**](QRPhResponse.md) |  | 
**limit** | **int** |  | 
**next_cursor** | **str** |  | 

## Example

```python
from magpiepay.models.qrph_collection_response import QRPhCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QRPhCollectionResponse from a JSON string
qrph_collection_response_instance = QRPhCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(QRPhCollectionResponse.to_json())

# convert the object into a dict
qrph_collection_response_dict = qrph_collection_response_instance.to_dict()
# create an instance of QRPhCollectionResponse from a dict
qrph_collection_response_from_dict = QRPhCollectionResponse.from_dict(qrph_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


