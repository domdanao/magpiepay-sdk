## @magpiepay/sdk@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @magpiepay/sdk@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

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


### Documentation For Models

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


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="basicAuth"></a>
### basicAuth

- **Type**: HTTP basic authentication

