# PaymentSingleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PaymentResponse**](PaymentResponse.md) |  | 

## Example

```python
from magpiepay.models.payment_single_response import PaymentSingleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentSingleResponse from a JSON string
payment_single_response_instance = PaymentSingleResponse.from_json(json)
# print the JSON string representation of the object
print(PaymentSingleResponse.to_json())

# convert the object into a dict
payment_single_response_dict = payment_single_response_instance.to_dict()
# create an instance of PaymentSingleResponse from a dict
payment_single_response_from_dict = PaymentSingleResponse.from_dict(payment_single_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


