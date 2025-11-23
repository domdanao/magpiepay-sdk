# PaymentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the payment record. | 
**qrph_id** | **str** | Associated QRPh request identifier. | 
**status** | **str** |  | [optional] 
**amount** | **int** |  | [optional] 
**magpie_mdr** | **str** |  | [optional] 
**magpie_fee** | **int** |  | [optional] 
**merchant_net_amount** | **int** |  | [optional] 
**payment_source** | **str** |  | [optional] 
**paid_at** | **str** |  | [optional] 
**created_at** | **str** | ISO timestamp when the payment record was created. | 
**updated_at** | **str** | ISO timestamp when the payment record was last updated. | 
**livemode** | **bool** | Whether the payment was processed in live mode. | 

## Example

```python
from magpiepay.models.payment_response import PaymentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentResponse from a JSON string
payment_response_instance = PaymentResponse.from_json(json)
# print the JSON string representation of the object
print(PaymentResponse.to_json())

# convert the object into a dict
payment_response_dict = payment_response_instance.to_dict()
# create an instance of PaymentResponse from a dict
payment_response_from_dict = PaymentResponse.from_dict(payment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


