# PayoutResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique payout identifier. | 
**reference_id** | **str** | Client-provided reference tying to the payout request. | 
**channel** | **str** | Payment channel (instapay/pesonet). | 
**amount** | **int** | Amount in centavos. | 
**magpie_fee** | **int** |  | [optional] 
**source_account_id** | **str** | Org bank account used as source. | 
**destination** | [**PayoutDestinationResponse**](PayoutDestinationResponse.md) | Destination bank account data. | 
**purpose** | **str** |  | [optional] 
**status** | **str** | Current status of the payout. | 
**provider** | **str** |  | [optional] 
**provider_ref** | **Dict[str, object]** | Provider-specific reference data. | [optional] 
**provider_message** | **str** |  | [optional] 
**metadata** | **Dict[str, object]** | Merchant-defined metadata. | [optional] 
**created_at** | **str** | ISO timestamp when payout was created. | 
**updated_at** | **str** | ISO timestamp when the payout was last modified. | 
**posted_at** | **str** |  | [optional] 
**completed_at** | **str** |  | [optional] 
**failed_at** | **str** |  | [optional] 
**failure_code** | **str** |  | [optional] 
**failure_message** | **str** |  | [optional] 
**livemode** | **bool** | True when the payout was created in live mode. | 

## Example

```python
from magpiepay.models.payout_response import PayoutResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PayoutResponse from a JSON string
payout_response_instance = PayoutResponse.from_json(json)
# print the JSON string representation of the object
print(PayoutResponse.to_json())

# convert the object into a dict
payout_response_dict = payout_response_instance.to_dict()
# create an instance of PayoutResponse from a dict
payout_response_from_dict = PayoutResponse.from_dict(payout_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


