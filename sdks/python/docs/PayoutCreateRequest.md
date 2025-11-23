# PayoutCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference_id** | **str** | Client-provided reference for the payout. | 
**channel** | **str** | Channel to use for the payout. | 
**amount** | **int** | Amount in centavos. | 
**source_account_id** | **str** | Org bank account ID to debit. | 
**destination** | [**PayoutDestination**](PayoutDestination.md) | Destination account details. | 
**purpose** | **str** |  | [optional] 
**metadata** | **Dict[str, object]** |  | [optional] 

## Example

```python
from magpiepay.models.payout_create_request import PayoutCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PayoutCreateRequest from a JSON string
payout_create_request_instance = PayoutCreateRequest.from_json(json)
# print the JSON string representation of the object
print(PayoutCreateRequest.to_json())

# convert the object into a dict
payout_create_request_dict = payout_create_request_instance.to_dict()
# create an instance of PayoutCreateRequest from a dict
payout_create_request_from_dict = PayoutCreateRequest.from_dict(payout_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


