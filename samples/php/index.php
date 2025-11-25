<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Get API Key from environment variable
$apiKey = getenv('MAGPIEPAY_API_KEY');

if (!$apiKey) {
    echo "Error: Please set the MAGPIEPAY_API_KEY environment variable.\n";
    exit(1);
}

// Configure API key authorization: xAPIKey
$config = MagpiePay\Configuration::getDefaultConfiguration()
    ->setApiKey('X-API-Key', $apiKey)
    ->setHost('https://api.magpiepay.com');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = MagpiePay\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-Key', 'Bearer');

$apiInstance = new MagpiePay\Api\ReferencesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    echo "Fetching bank codes...\n";
    $result = $apiInstance->listBankCodes($apiKey);
    echo "Success! Found bank codes:\n";

    // The result is an instance of BankCodeCollection, which contains 'data' property
    $data = $result->getData();

    // Print first 5 items
    $count = 0;
    foreach ($data as $bankCode) {
        if ($count >= 5)
            break;
        echo "- " . $bankCode->getName() . " (" . $bankCode->getCode() . ")\n";
        $count++;
    }

} catch (Exception $e) {
    echo 'Exception when calling ReferencesApi->listBankCodes: ', $e->getMessage(), PHP_EOL;
}
