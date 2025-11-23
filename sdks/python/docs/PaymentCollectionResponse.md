# PaymentCollectionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PaymentResponse]**](PaymentResponse.md) |  | 
**limit** | **int** |  | 
**next_cursor** | **str** |  | 

## Example

```python
from magpiepay.models.payment_collection_response import PaymentCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentCollectionResponse from a JSON string
payment_collection_response_instance = PaymentCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(PaymentCollectionResponse.to_json())

# convert the object into a dict
payment_collection_response_dict = payment_collection_response_instance.to_dict()
# create an instance of PaymentCollectionResponse from a dict
payment_collection_response_from_dict = PaymentCollectionResponse.from_dict(payment_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


