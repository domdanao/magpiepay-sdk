# PayoutDestination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**bank_code** | **str** | Bank code for the beneficiary account. | 
**account_number** | **str** | Beneficiary account number. | 

## Example

```python
from magpiepay.models.payout_destination import PayoutDestination

# TODO update the JSON string below
json = "{}"
# create an instance of PayoutDestination from a JSON string
payout_destination_instance = PayoutDestination.from_json(json)
# print the JSON string representation of the object
print(PayoutDestination.to_json())

# convert the object into a dict
payout_destination_dict = payout_destination_instance.to_dict()
# create an instance of PayoutDestination from a dict
payout_destination_from_dict = PayoutDestination.from_dict(payout_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


