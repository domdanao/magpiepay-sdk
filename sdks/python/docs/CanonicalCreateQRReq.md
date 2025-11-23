# CanonicalCreateQRReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference_id** | **str** | Client-provided identifier used to correlate the QRPh request. | 
**type** | **str** | QR type, dynamic for fixed payments or static for amount-less flows. | 
**amount** | **int** |  | [optional] 
**submerchant_id** | **str** |  | [optional] 
**metadata** | **Dict[str, object]** |  | [optional] 

## Example

```python
from magpiepay.models.canonical_create_qr_req import CanonicalCreateQRReq

# TODO update the JSON string below
json = "{}"
# create an instance of CanonicalCreateQRReq from a JSON string
canonical_create_qr_req_instance = CanonicalCreateQRReq.from_json(json)
# print the JSON string representation of the object
print(CanonicalCreateQRReq.to_json())

# convert the object into a dict
canonical_create_qr_req_dict = canonical_create_qr_req_instance.to_dict()
# create an instance of CanonicalCreateQRReq from a dict
canonical_create_qr_req_from_dict = CanonicalCreateQRReq.from_dict(canonical_create_qr_req_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


