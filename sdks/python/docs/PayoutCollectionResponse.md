# PayoutCollectionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PayoutResponse]**](PayoutResponse.md) |  | 
**limit** | **int** |  | 
**next_cursor** | **str** |  | 

## Example

```python
from magpiepay.models.payout_collection_response import PayoutCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PayoutCollectionResponse from a JSON string
payout_collection_response_instance = PayoutCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(PayoutCollectionResponse.to_json())

# convert the object into a dict
payout_collection_response_dict = payout_collection_response_instance.to_dict()
# create an instance of PayoutCollectionResponse from a dict
payout_collection_response_from_dict = PayoutCollectionResponse.from_dict(payout_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


