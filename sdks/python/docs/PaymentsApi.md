# magpiepay.PaymentsApi

All URIs are relative to *https://api.magpiepay.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_payment**](PaymentsApi.md#get_payment) | **GET** /v1/payments/{payment_id} | Get payment
[**list_payments**](PaymentsApi.md#list_payments) | **GET** /v1/payments/ | List payments


# **get_payment**
> PaymentSingleResponse get_payment(payment_id, x_api_key=x_api_key, authorization=authorization)

Get payment

Retrieve the current state of a QRPh payment.

### Example

* Basic Authentication (basicAuth):

```python
import magpiepay
from magpiepay.models.payment_single_response import PaymentSingleResponse
from magpiepay.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.magpiepay.com
# See configuration.py for a list of all supported configuration parameters.
configuration = magpiepay.Configuration(
    host = "https://api.magpiepay.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = magpiepay.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with magpiepay.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = magpiepay.PaymentsApi(api_client)
    payment_id = 'payment_id_example' # str | 
    x_api_key = 'x_api_key_example' # str |  (optional)
    authorization = 'authorization_example' # str |  (optional)

    try:
        # Get payment
        api_response = api_instance.get_payment(payment_id, x_api_key=x_api_key, authorization=authorization)
        print("The response of PaymentsApi->get_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->get_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_id** | **str**|  | 
 **x_api_key** | **str**|  | [optional] 
 **authorization** | **str**|  | [optional] 

### Return type

[**PaymentSingleResponse**](PaymentSingleResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_payments**
> PaymentCollectionResponse list_payments(limit=limit, cursor=cursor, x_api_key=x_api_key, authorization=authorization)

List payments

Returns a paginated list of QRPh payments for the authenticated organization.

### Example

* Basic Authentication (basicAuth):

```python
import magpiepay
from magpiepay.models.payment_collection_response import PaymentCollectionResponse
from magpiepay.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.magpiepay.com
# See configuration.py for a list of all supported configuration parameters.
configuration = magpiepay.Configuration(
    host = "https://api.magpiepay.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = magpiepay.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with magpiepay.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = magpiepay.PaymentsApi(api_client)
    limit = 50 # int | Number of payments to return (1-100). (optional) (default to 50)
    cursor = 'cursor_example' # str | Cursor returned from the previous page. (optional)
    x_api_key = 'x_api_key_example' # str |  (optional)
    authorization = 'authorization_example' # str |  (optional)

    try:
        # List payments
        api_response = api_instance.list_payments(limit=limit, cursor=cursor, x_api_key=x_api_key, authorization=authorization)
        print("The response of PaymentsApi->list_payments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->list_payments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of payments to return (1-100). | [optional] [default to 50]
 **cursor** | **str**| Cursor returned from the previous page. | [optional] 
 **x_api_key** | **str**|  | [optional] 
 **authorization** | **str**|  | [optional] 

### Return type

[**PaymentCollectionResponse**](PaymentCollectionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

