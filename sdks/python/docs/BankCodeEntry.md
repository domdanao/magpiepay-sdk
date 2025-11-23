# BankCodeEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | 
**name** | **str** |  | [optional] 

## Example

```python
from magpiepay.models.bank_code_entry import BankCodeEntry

# TODO update the JSON string below
json = "{}"
# create an instance of BankCodeEntry from a JSON string
bank_code_entry_instance = BankCodeEntry.from_json(json)
# print the JSON string representation of the object
print(BankCodeEntry.to_json())

# convert the object into a dict
bank_code_entry_dict = bank_code_entry_instance.to_dict()
# create an instance of BankCodeEntry from a dict
bank_code_entry_from_dict = BankCodeEntry.from_dict(bank_code_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


