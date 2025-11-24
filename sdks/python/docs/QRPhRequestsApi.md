# magpiepay.QRPhRequestsApi

All URIs are relative to *https://api.magpiepay.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_qrph**](QRPhRequestsApi.md#cancel_qrph) | **POST** /v1/qrph/{id}/cancel | Cancel a QRPh request
[**create_qrph**](QRPhRequestsApi.md#create_qrph) | **POST** /v1/qrph/ | Create a QRPh request
[**get_qrph**](QRPhRequestsApi.md#get_qrph) | **GET** /v1/qrph/{id} | Get QRPh status
[**list_qrph**](QRPhRequestsApi.md#list_qrph) | **GET** /v1/qrph/ | List QRPh requests


# **cancel_qrph**
> QRPhSingleResponse cancel_qrph(id, x_api_key=x_api_key, authorization=authorization, cancel_qrph_request=cancel_qrph_request)

Cancel a QRPh request

Cancels the specified QRPh request and returns the updated request record.

### Example

* Basic Authentication (basicAuth):

```python
import magpiepay
from magpiepay.models.cancel_qrph_request import CancelQRPhRequest
from magpiepay.models.qrph_single_response import QRPhSingleResponse
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
    api_instance = magpiepay.QRPhRequestsApi(api_client)
    id = 'id_example' # str | 
    x_api_key = 'x_api_key_example' # str |  (optional)
    authorization = 'authorization_example' # str |  (optional)
    cancel_qrph_request = {"cancellation_reason":"Customer requested refund"} # CancelQRPhRequest |  (optional)

    try:
        # Cancel a QRPh request
        api_response = api_instance.cancel_qrph(id, x_api_key=x_api_key, authorization=authorization, cancel_qrph_request=cancel_qrph_request)
        print("The response of QRPhRequestsApi->cancel_qrph:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QRPhRequestsApi->cancel_qrph: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **x_api_key** | **str**|  | [optional] 
 **authorization** | **str**|  | [optional] 
 **cancel_qrph_request** | [**CancelQRPhRequest**](CancelQRPhRequest.md)|  | [optional] 

### Return type

[**QRPhSingleResponse**](QRPhSingleResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_qrph**
> QRPhSingleResponse create_qrph(canonical_create_qr_req, x_api_key=x_api_key, authorization=authorization)

Create a QRPh request

Creates a QRPh request from the canonical payload and returns the normalized request with the checkout URL attached.

### Example

* Basic Authentication (basicAuth):

```python
import magpiepay
from magpiepay.models.canonical_create_qr_req import CanonicalCreateQRReq
from magpiepay.models.qrph_single_response import QRPhSingleResponse
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
    api_instance = magpiepay.QRPhRequestsApi(api_client)
    canonical_create_qr_req = {"reference_id":"order-2025-11-20","type":"dynamic","amount":2500,"metadata":{"customer_id":"cust_123","notes":"in-store purchase"}} # CanonicalCreateQRReq | 
    x_api_key = 'x_api_key_example' # str |  (optional)
    authorization = 'authorization_example' # str |  (optional)

    try:
        # Create a QRPh request
        api_response = api_instance.create_qrph(canonical_create_qr_req, x_api_key=x_api_key, authorization=authorization)
        print("The response of QRPhRequestsApi->create_qrph:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QRPhRequestsApi->create_qrph: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **canonical_create_qr_req** | [**CanonicalCreateQRReq**](CanonicalCreateQRReq.md)|  | 
 **x_api_key** | **str**|  | [optional] 
 **authorization** | **str**|  | [optional] 

### Return type

[**QRPhSingleResponse**](QRPhSingleResponse.md)

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

# **get_qrph**
> QRPhSingleResponse get_qrph(id, x_api_key=x_api_key, authorization=authorization)

Get QRPh status

Returns the current QRPh request state, including checkout URLs and payment IDs.

### Example

* Basic Authentication (basicAuth):

```python
import magpiepay
from magpiepay.models.qrph_single_response import QRPhSingleResponse
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
    api_instance = magpiepay.QRPhRequestsApi(api_client)
    id = 'id_example' # str | 
    x_api_key = 'x_api_key_example' # str |  (optional)
    authorization = 'authorization_example' # str |  (optional)

    try:
        # Get QRPh status
        api_response = api_instance.get_qrph(id, x_api_key=x_api_key, authorization=authorization)
        print("The response of QRPhRequestsApi->get_qrph:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QRPhRequestsApi->get_qrph: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **x_api_key** | **str**|  | [optional] 
 **authorization** | **str**|  | [optional] 

### Return type

[**QRPhSingleResponse**](QRPhSingleResponse.md)

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

# **list_qrph**
> QRPhCollectionResponse list_qrph(limit=limit, cursor=cursor, reference_id=reference_id, x_api_key=x_api_key, authorization=authorization)

List QRPh requests

Returns a paginated collection of QRPh requests for the authenticated organization. Use `limit` and `cursor` for pagination and `reference_id` to locate a specific request.

### Example

* Basic Authentication (basicAuth):

```python
import magpiepay
from magpiepay.models.qrph_collection_response import QRPhCollectionResponse
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
    api_instance = magpiepay.QRPhRequestsApi(api_client)
    limit = 50 # int | Number of items to return (1-100). (optional) (default to 50)
    cursor = 'cursor_example' # str | Opaque cursor returned from the previous page for pagination. (optional)
    reference_id = 'reference_id_example' # str | Filter on a specific request reference ID. (optional)
    x_api_key = 'x_api_key_example' # str |  (optional)
    authorization = 'authorization_example' # str |  (optional)

    try:
        # List QRPh requests
        api_response = api_instance.list_qrph(limit=limit, cursor=cursor, reference_id=reference_id, x_api_key=x_api_key, authorization=authorization)
        print("The response of QRPhRequestsApi->list_qrph:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QRPhRequestsApi->list_qrph: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of items to return (1-100). | [optional] [default to 50]
 **cursor** | **str**| Opaque cursor returned from the previous page for pagination. | [optional] 
 **reference_id** | **str**| Filter on a specific request reference ID. | [optional] 
 **x_api_key** | **str**|  | [optional] 
 **authorization** | **str**|  | [optional] 

### Return type

[**QRPhCollectionResponse**](QRPhCollectionResponse.md)

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

