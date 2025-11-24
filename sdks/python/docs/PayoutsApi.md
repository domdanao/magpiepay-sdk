# magpiepay.PayoutsApi

All URIs are relative to *https://api.magpiepay.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_payout**](PayoutsApi.md#create_payout) | **POST** /v1/payouts/ | Create a payout
[**get_payout**](PayoutsApi.md#get_payout) | **GET** /v1/payouts/{payout_id} | Get payout
[**list_payouts**](PayoutsApi.md#list_payouts) | **GET** /v1/payouts/ | List payouts


# **create_payout**
> PayoutSingleResponse create_payout(payout_create_request, x_api_key=x_api_key, authorization=authorization)

Create a payout

Initiates a payout using a canonical payload and returns the normalized payout record.

### Example

* Basic Authentication (basicAuth):

```python
import magpiepay
from magpiepay.models.payout_create_request import PayoutCreateRequest
from magpiepay.models.payout_single_response import PayoutSingleResponse
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
    api_instance = magpiepay.PayoutsApi(api_client)
    payout_create_request = {"reference_id":"PAYOUT-123-456","channel":"instapay","amount":40000,"source_account_id":"act_01k90z02ps251323zgkd23cb0d","destination":{"first_name":"Juan","last_name":"Dela Cruz","bank_code":"bdo","account_number":"002400091125"},"purpose":"Salary payout"} # PayoutCreateRequest | 
    x_api_key = 'x_api_key_example' # str |  (optional)
    authorization = 'authorization_example' # str |  (optional)

    try:
        # Create a payout
        api_response = api_instance.create_payout(payout_create_request, x_api_key=x_api_key, authorization=authorization)
        print("The response of PayoutsApi->create_payout:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayoutsApi->create_payout: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_create_request** | [**PayoutCreateRequest**](PayoutCreateRequest.md)|  | 
 **x_api_key** | **str**|  | [optional] 
 **authorization** | **str**|  | [optional] 

### Return type

[**PayoutSingleResponse**](PayoutSingleResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_payout**
> PayoutSingleResponse get_payout(payout_id, x_api_key=x_api_key, authorization=authorization)

Get payout

Retrieves the latest state for a payout.

### Example

* Basic Authentication (basicAuth):

```python
import magpiepay
from magpiepay.models.payout_single_response import PayoutSingleResponse
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
    api_instance = magpiepay.PayoutsApi(api_client)
    payout_id = 'payout_id_example' # str | 
    x_api_key = 'x_api_key_example' # str |  (optional)
    authorization = 'authorization_example' # str |  (optional)

    try:
        # Get payout
        api_response = api_instance.get_payout(payout_id, x_api_key=x_api_key, authorization=authorization)
        print("The response of PayoutsApi->get_payout:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayoutsApi->get_payout: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_id** | **str**|  | 
 **x_api_key** | **str**|  | [optional] 
 **authorization** | **str**|  | [optional] 

### Return type

[**PayoutSingleResponse**](PayoutSingleResponse.md)

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

# **list_payouts**
> PayoutCollectionResponse list_payouts(limit=limit, cursor=cursor, reference_id=reference_id, x_api_key=x_api_key, authorization=authorization)

List payouts

Returns a paginated collection of payouts for the authenticated organization.

### Example

* Basic Authentication (basicAuth):

```python
import magpiepay
from magpiepay.models.payout_collection_response import PayoutCollectionResponse
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
    api_instance = magpiepay.PayoutsApi(api_client)
    limit = 50 # int | Number of payouts to return (1-100). (optional) (default to 50)
    cursor = 'cursor_example' # str | Cursor returned from the previous page. (optional)
    reference_id = 'reference_id_example' # str | Filter payouts by reference ID. (optional)
    x_api_key = 'x_api_key_example' # str |  (optional)
    authorization = 'authorization_example' # str |  (optional)

    try:
        # List payouts
        api_response = api_instance.list_payouts(limit=limit, cursor=cursor, reference_id=reference_id, x_api_key=x_api_key, authorization=authorization)
        print("The response of PayoutsApi->list_payouts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayoutsApi->list_payouts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of payouts to return (1-100). | [optional] [default to 50]
 **cursor** | **str**| Cursor returned from the previous page. | [optional] 
 **reference_id** | **str**| Filter payouts by reference ID. | [optional] 
 **x_api_key** | **str**|  | [optional] 
 **authorization** | **str**|  | [optional] 

### Return type

[**PayoutCollectionResponse**](PayoutCollectionResponse.md)

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

