import os
import sys
import magpiepay
from magpiepay.api import references_api
from pprint import pprint

# Get API key from environment
api_key = os.environ.get('MAGPIE_API_KEY')
if not api_key:
    print("Error: MAGPIE_API_KEY environment variable not set")
    sys.exit(1)

# Configure the client
configuration = magpiepay.Configuration(
    host = "https://api.magpiepay.com"
)

# Create an instance of the API class
with magpiepay.ApiClient(configuration) as api_client:
    api_instance = references_api.ReferencesApi(api_client)

    try:
        print("Fetching bank codes...")
        # Pass API key directly as x_api_key argument
        api_response = api_instance.list_bank_codes_v1_references_bank_codes_get(x_api_key=api_key)
        print("Success! Found bank codes:")
        pprint(api_response)
    except magpiepay.ApiException as e:
        print("Exception when calling ReferencesApi->listBankCodesV1ReferencesBankCodesGet: %s\n" % e)
