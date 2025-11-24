# @domdanao/magpiepay-sdk-typescript

The official TypeScript/JavaScript client for the MagpiePay API.

## Installation

```bash
npm install @domdanao/magpiepay-sdk-typescript
```

## Getting Started

### Authentication

Initialize the client with your API key. The API uses Basic Authentication, where the username is your API key and the password is left empty.

```typescript
import { Configuration, PaymentsApi } from '@domdanao/magpiepay-sdk-typescript';

const config = new Configuration({
    username: 'YOUR_API_KEY',
    password: '', // Password is empty for MagpiePay API Key auth
});

const paymentsApi = new PaymentsApi(config);
```

### Quick Start: List Bank Codes

```typescript
import { Configuration, ReferencesApi } from '@domdanao/magpiepay-sdk-typescript';

const config = new Configuration({
    username: 'YOUR_API_KEY',
    password: '',
});

const referencesApi = new ReferencesApi(config);

async function listBanks() {
    try {
        const response = await referencesApi.listBankCodesV1ReferencesBankCodesGet();
        console.log('Bank Codes:', response.data);
    } catch (error) {
        console.error('Error fetching bank codes:', error);
    }
}

listBanks();
```

## Recipes

### Create a Payment (QRPh)

```typescript
import { Configuration, QRPhRequestsApi, CanonicalCreateQRReqTypeEnum } from '@domdanao/magpiepay-sdk-typescript';

const config = new Configuration({
    username: 'YOUR_API_KEY',
    password: '',
});

const qrphApi = new QRPhRequestsApi(config);

async function createPayment() {
    try {
        const response = await qrphApi.createQrphV1QrphPost({
            reference_id: 'my-ref-123',
            amount: 10000, // 100.00 PHP
            type: CanonicalCreateQRReqTypeEnum.Dynamic,
            metadata: {
                customer_name: 'John Doe'
            }
        });
        
        console.log('Payment Created:', response.data);
        console.log('Checkout URL:', response.data.data.checkout_url);
    } catch (error) {
        console.error('Error creating payment:', error);
    }
}
```

### Create a Payout

```typescript
import { Configuration, PayoutsApi, PayoutCreateRequestChannelEnum } from '@domdanao/magpiepay-sdk-typescript';

const config = new Configuration({
    username: 'YOUR_API_KEY',
    password: '',
});

const payoutsApi = new PayoutsApi(config);

async function createPayout() {
    try {
        const response = await payoutsApi.createPayoutV1PayoutsPost({
            reference_id: 'payout-ref-456',
            amount: 50000, // 500.00 PHP
            channel: PayoutCreateRequestChannelEnum.Instapay,
            source_account_id: 'src_123',
            destination: {
                bank_code: 'BDO',
                account_number: '1234567890',
                first_name: 'Jane',
                last_name: 'Doe'
            }
        });

        console.log('Payout Initiated:', response.data);
    } catch (error) {
        console.error('Error creating payout:', error);
    }
}
```

## Error Handling

The SDK throws errors that can be caught.

```typescript
try {
    // ... api call
} catch (error: any) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Data:', error.response.data);
        console.error('Status:', error.response.status);
    } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received');
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
    }
}
```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PaymentsApi* | [**getPaymentV1PaymentsPaymentIdGet**](docs/PaymentsApi.md#getpaymentv1paymentspaymentidget) | **GET** /v1/payments/{payment_id} | Get payment
*PaymentsApi* | [**listPaymentsV1PaymentsGet**](docs/PaymentsApi.md#listpaymentsv1paymentsget) | **GET** /v1/payments/ | List payments
*PayoutsApi* | [**createPayoutV1PayoutsPost**](docs/PayoutsApi.md#createpayoutv1payoutspost) | **POST** /v1/payouts/ | Create a payout
*PayoutsApi* | [**getPayoutV1PayoutsPayoutIdGet**](docs/PayoutsApi.md#getpayoutv1payoutspayoutidget) | **GET** /v1/payouts/{payout_id} | Get payout
*PayoutsApi* | [**listPayoutsV1PayoutsGet**](docs/PayoutsApi.md#listpayoutsv1payoutsget) | **GET** /v1/payouts/ | List payouts
*QRPhRequestsApi* | [**cancelQrphV1QrphIdCancelPost**](docs/QRPhRequestsApi.md#cancelqrphv1qrphidcancelpost) | **POST** /v1/qrph/{id}/cancel | Cancel a QRPh request
*QRPhRequestsApi* | [**createQrphV1QrphPost**](docs/QRPhRequestsApi.md#createqrphv1qrphpost) | **POST** /v1/qrph/ | Create a QRPh request
*QRPhRequestsApi* | [**getQrphStatusV1QrphIdGet**](docs/QRPhRequestsApi.md#getqrphstatusv1qrphidget) | **GET** /v1/qrph/{id} | Get QRPh status
*QRPhRequestsApi* | [**listQrphV1QrphGet**](docs/QRPhRequestsApi.md#listqrphv1qrphget) | **GET** /v1/qrph/ | List QRPh requests
*ReferencesApi* | [**listBankCodesV1ReferencesBankCodesGet**](docs/ReferencesApi.md#listbankcodesv1referencesbankcodesget) | **GET** /v1/references/bank_codes | List Bank Codes


## Documentation For Models

 - [ApiError](docs/ApiError.md)
 - [BankCodeCollection](docs/BankCodeCollection.md)
 - [BankCodeEntry](docs/BankCodeEntry.md)
 - [CancelQRPhRequest](docs/CancelQRPhRequest.md)
 - [CanonicalCreateQRReq](docs/CanonicalCreateQRReq.md)
 - [HTTPValidationError](docs/HTTPValidationError.md)
 - [PaymentCollectionResponse](docs/PaymentCollectionResponse.md)
 - [PaymentResponse](docs/PaymentResponse.md)
 - [PaymentSingleResponse](docs/PaymentSingleResponse.md)
 - [PayoutCollectionResponse](docs/PayoutCollectionResponse.md)
 - [PayoutCreateRequest](docs/PayoutCreateRequest.md)
 - [PayoutDestination](docs/PayoutDestination.md)
 - [PayoutDestinationResponse](docs/PayoutDestinationResponse.md)
 - [PayoutResponse](docs/PayoutResponse.md)
 - [PayoutSingleResponse](docs/PayoutSingleResponse.md)
 - [QRPhCollectionResponse](docs/QRPhCollectionResponse.md)
 - [QRPhResponse](docs/QRPhResponse.md)
 - [QRPhSingleResponse](docs/QRPhSingleResponse.md)
 - [ValidationError](docs/ValidationError.md)
 - [ValidationErrorLocInner](docs/ValidationErrorLocInner.md)
