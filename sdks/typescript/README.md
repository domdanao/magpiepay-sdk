# @domdanao/magpiepay-sdk-typescript

The official TypeScript/Node.js library for the MagpiePay API.

## Installation

Install the package via npm:

```bash
npm install @domdanao/magpiepay-sdk-typescript
```

## Usage

### Configuration

Initialize the `Configuration` object with your API key.

```typescript
import { Configuration, PaymentsApi } from '@domdanao/magpiepay-sdk-typescript';

const config = new Configuration({
    username: process.env.MAGPIEPAY_API_KEY, // Use your API Key as the username
    password: '', // Leave password empty
});

const paymentsApi = new PaymentsApi(config);
```

#### Custom Base URL

You can override the base URL for local development:

```typescript
const config = new Configuration({
    username: process.env.MAGPIEPAY_API_KEY,
    password: '',
    basePath: process.env.MAGPIEPAY_BASE_URL || 'https://api.magpiepay.com',
});
```

### Examples

#### List Payments

```typescript
try {
    const response = await paymentsApi.listPayments();
    console.log(response.data);
} catch (error) {
    console.error(error);
}
```

#### Create a Payout

```typescript
import { PayoutsApi, PayoutCreateRequest } from '@domdanao/magpiepay-sdk-typescript';

const payoutsApi = new PayoutsApi(config);

const payoutRequest: PayoutCreateRequest = {
    amount: 1000,
    currency: 'PHP',
    description: 'Test Payout',
    // ... other fields
};

try {
    const response = await payoutsApi.createPayout(payoutRequest);
    console.log(response.data);
} catch (error) {
    console.error(error);
}
```

## API Resources

- [PaymentsApi](docs/PaymentsApi.md)
- [PayoutsApi](docs/PayoutsApi.md)
- [QRPhRequestsApi](docs/QRPhRequestsApi.md)
- [ReferencesApi](docs/ReferencesApi.md)

## License

Unlicense
