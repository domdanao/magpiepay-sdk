# BankCodeCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BankCodeEntry]**](BankCodeEntry.md) |  | 

## Example

```python
from magpiepay.models.bank_code_collection import BankCodeCollection

# TODO update the JSON string below
json = "{}"
# create an instance of BankCodeCollection from a JSON string
bank_code_collection_instance = BankCodeCollection.from_json(json)
# print the JSON string representation of the object
print(BankCodeCollection.to_json())

# convert the object into a dict
bank_code_collection_dict = bank_code_collection_instance.to_dict()
# create an instance of BankCodeCollection from a dict
bank_code_collection_from_dict = BankCodeCollection.from_dict(bank_code_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


