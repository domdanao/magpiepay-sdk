# PayoutSingleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PayoutResponse**](PayoutResponse.md) |  | 

## Example

```python
from magpiepay.models.payout_single_response import PayoutSingleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PayoutSingleResponse from a JSON string
payout_single_response_instance = PayoutSingleResponse.from_json(json)
# print the JSON string representation of the object
print(PayoutSingleResponse.to_json())

# convert the object into a dict
payout_single_response_dict = payout_single_response_instance.to_dict()
# create an instance of PayoutSingleResponse from a dict
payout_single_response_from_dict = PayoutSingleResponse.from_dict(payout_single_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


