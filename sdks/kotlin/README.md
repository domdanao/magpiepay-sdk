# magpiepay-android

The official Kotlin/Android library for the MagpiePay API.

## Installation

Add the dependency to your `build.gradle.kts`:

```kotlin
implementation("org.openapitools:magpiepay-android:1.0.0")
```

## Usage

### Configuration

Initialize the `ApiClient` with your API key.

```kotlin
import org.openapitools.client.infrastructure.ApiClient
import org.openapitools.client.apis.PaymentsApi

val apiClient = ApiClient(baseUrl = "https://api.magpiepay.com")
apiClient.addDefaultHeader("X-API-Key", "YOUR_API_KEY")

val paymentsApi = PaymentsApi(apiClient)
```

#### Custom Base URL

You can override the base URL for local development:

```kotlin
val baseUrl = System.getenv("MAGPIEPAY_BASE_URL") ?: "https://api.magpiepay.com"
val apiClient = ApiClient(baseUrl = baseUrl)
apiClient.addDefaultHeader("X-API-Key", System.getenv("MAGPIEPAY_API_KEY"))
```

### Examples

#### List Payments

```kotlin
import kotlinx.coroutines.runBlocking

runBlocking {
    try {
        val response = paymentsApi.listPayments()
        response.data.forEach { payment ->
            println(payment)
        }
    } catch (e: Exception) {
        println("Error: ${e.message}")
    }
}
```

#### Create a Payout

```kotlin
import org.openapitools.client.apis.PayoutsApi
import org.openapitools.client.models.PayoutCreateRequest
import java.math.BigDecimal

val payoutsApi = PayoutsApi(apiClient)

val request = PayoutCreateRequest(
    amount = BigDecimal("1000"),
    currency = "PHP",
    description = "Test Payout"
)

runBlocking {
    try {
        val response = payoutsApi.createPayout(request)
        println(response)
    } catch (e: Exception) {
        println("Error: ${e.message}")
    }
}
```

## API Resources

- [PaymentsApi](docs/PaymentsApi.md)
- [PayoutsApi](docs/PayoutsApi.md)
- [QRPhRequestsApi](docs/QRPhRequestsApi.md)
- [ReferencesApi](docs/ReferencesApi.md)

## License

Unlicense
