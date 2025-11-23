# QRPhResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the QRPh request. | 
**reference_id** | **str** | Client-provided reference for correlating the request. | 
**type** | **str** | QR code type, either static or dynamic. | 
**amount** | **int** |  | [optional] 
**submerchant_id** | **str** |  | [optional] 
**status** | **str** | Current status of the QRPh request. | 
**metadata** | **Dict[str, object]** |  | [optional] 
**qrph_payload** | **str** |  | [optional] 
**qrph_image** | **str** |  | [optional] 
**checkout_url** | **str** |  | [optional] 
**payment_id** | **str** |  | [optional] 
**paid_at** | **str** |  | [optional] 
**expires_at** | **str** |  | [optional] 
**cancelled_at** | **str** |  | [optional] 
**cancellation_reason** | **str** |  | [optional] 
**created_at** | **str** | ISO timestamp when the QRPh request was created. | 
**updated_at** | **str** | ISO timestamp when the QRPh request was last updated. | 
**livemode** | **bool** | Indicates whether the request was created in live or test mode. | 

## Example

```python
from magpiepay.models.qrph_response import QRPhResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QRPhResponse from a JSON string
qrph_response_instance = QRPhResponse.from_json(json)
# print the JSON string representation of the object
print(QRPhResponse.to_json())

# convert the object into a dict
qrph_response_dict = qrph_response_instance.to_dict()
# create an instance of QRPhResponse from a dict
qrph_response_from_dict = QRPhResponse.from_dict(qrph_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


