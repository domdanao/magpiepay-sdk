# MagpiePay

The official Swift library for the MagpiePay API.

## Installation

### Swift Package Manager

Add the following to your `Package.swift` file:

```swift
dependencies: [
    .package(url: "https://github.com/domdanao/magpiepay-sdk-swift.git", from: "1.0.0")
]
```

## Usage

### Configuration

Initialize the `MagpiePayAPI` with your API key.

```swift
import MagpiePay

MagpiePayAPI.customHeaders = ["X-API-Key": "YOUR_API_KEY"]
// Or if using basic auth
// MagpiePayAPI.customHeaders = ["Authorization": "Basic ..."]
```

#### Custom Base URL

You can override the base URL for local development:

```swift
// The SDK defaults to https://api.magpiepay.com
// Override if needed:
MagpiePayAPI.basePath = ProcessInfo.processInfo.environment["MAGPIEPAY_BASE_URL"] ?? "https://api.magpiepay.com"
```

### Examples

#### List Payments

```swift
PaymentsAPI.listPayments { (response, error) in
    guard error == nil else {
        print(error!)
        return
    }

    if let payments = response?.data {
        for payment in payments {
            print(payment)
        }
    }
}
```

#### Create a Payout

```swift
let payoutRequest = PayoutCreateRequest(amount: 1000, currency: "PHP", description: "Test Payout")

PayoutsAPI.createPayout(payoutCreateRequest: payoutRequest) { (response, error) in
    guard error == nil else {
        print(error!)
        return
    }

    if let payout = response {
        print(payout)
    }
}
```

## API Resources

- [PaymentsAPI](docs/PaymentsAPI.md)
- [PayoutsAPI](docs/PayoutsAPI.md)
- [QRPhRequestsAPI](docs/QRPhRequestsAPI.md)
- [ReferencesAPI](docs/ReferencesAPI.md)

## License

Unlicense
