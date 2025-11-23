# PayoutDestinationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**bank_code** | **str** |  | [optional] 
**account_number** | **str** |  | [optional] 

## Example

```python
from magpiepay.models.payout_destination_response import PayoutDestinationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PayoutDestinationResponse from a JSON string
payout_destination_response_instance = PayoutDestinationResponse.from_json(json)
# print the JSON string representation of the object
print(PayoutDestinationResponse.to_json())

# convert the object into a dict
payout_destination_response_dict = payout_destination_response_instance.to_dict()
# create an instance of PayoutDestinationResponse from a dict
payout_destination_response_from_dict = PayoutDestinationResponse.from_dict(payout_destination_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


