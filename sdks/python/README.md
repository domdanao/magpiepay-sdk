# domdanao-magpiepay-sdk-python

The official Python library for the MagpiePay API.

## Installation

Install the package via pip:

```bash
pip install domdanao-magpiepay-sdk-python
```

## Usage

### Configuration

Initialize the `Configuration` object with your API key.

```python
import os
import magpiepay
from magpiepay.api import payments_api, payouts_api
from magpiepay.model.payout_create_request import PayoutCreateRequest

# Configure API key authorization
configuration = magpiepay.Configuration(
    host = "https://api.magpiepay.com",
    username = os.environ["MAGPIEPAY_API_KEY"],
    password = ""
)

# Create an instance of the API class
api_client = magpiepay.ApiClient(configuration)
payments = payments_api.PaymentsApi(api_client)
payouts = payouts_api.PayoutsApi(api_client)
```

#### Custom Base URL

You can override the base URL for local development:

```python
configuration = magpiepay.Configuration(
    host = os.environ.get("MAGPIEPAY_BASE_URL", "https://api.magpiepay.com"),
    username = os.environ["MAGPIEPAY_API_KEY"],
    password = ""
)
```

### Examples

#### List Payments

```python
try:
    api_response = payments.list_payments()
    print(api_response)
except magpiepay.ApiException as e:
    print("Exception when calling PaymentsApi->list_payments: %s\n" % e)
```

#### Create a Payout

```python
payout_request = PayoutCreateRequest(
    amount=1000,
    currency="PHP",
    description="Test Payout",
    # ... other fields
)

try:
    api_response = payouts.create_payout(payout_create_request=payout_request)
    print(api_response)
except magpiepay.ApiException as e:
    print("Exception when calling PayoutsApi->create_payout: %s\n" % e)
```

## API Resources

- [PaymentsApi](docs/PaymentsApi.md)
- [PayoutsApi](docs/PayoutsApi.md)
- [QRPhRequestsApi](docs/QRPhRequestsApi.md)
- [ReferencesApi](docs/ReferencesApi.md)

## License

Unlicense
