# magpiepay.ReferencesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_bank_codes_v1_references_bank_codes_get**](ReferencesApi.md#list_bank_codes_v1_references_bank_codes_get) | **GET** /v1/references/bank_codes | List Bank Codes


# **list_bank_codes_v1_references_bank_codes_get**
> BankCodeCollection list_bank_codes_v1_references_bank_codes_get(x_api_key=x_api_key, authorization=authorization)

List Bank Codes

### Example

* Basic Authentication (basicAuth):

```python
import magpiepay
from magpiepay.models.bank_code_collection import BankCodeCollection
from magpiepay.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = magpiepay.Configuration(
    host = "http://localhost"
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
    api_instance = magpiepay.ReferencesApi(api_client)
    x_api_key = 'x_api_key_example' # str |  (optional)
    authorization = 'authorization_example' # str |  (optional)

    try:
        # List Bank Codes
        api_response = api_instance.list_bank_codes_v1_references_bank_codes_get(x_api_key=x_api_key, authorization=authorization)
        print("The response of ReferencesApi->list_bank_codes_v1_references_bank_codes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferencesApi->list_bank_codes_v1_references_bank_codes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api_key** | **str**|  | [optional] 
 **authorization** | **str**|  | [optional] 

### Return type

[**BankCodeCollection**](BankCodeCollection.md)

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

