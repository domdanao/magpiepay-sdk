import org.openapitools.client.apis.ReferencesApi
import org.openapitools.client.infrastructure.ApiClient
import java.io.IOException

fun main() {
    val apiKey = System.getenv("MAGPIEPAY_API_KEY")
    if (apiKey.isNullOrEmpty()) {
        println("Error: MAGPIEPAY_API_KEY environment variable not set")
        System.exit(1)
    }

    // Configure
    val apiClient = ApiClient(baseUrl = "https://api.magpiepay.com/")
    val api = apiClient.createService(ReferencesApi::class.java)

    println("Fetching bank codes...")

    try {
        val response = api.listBankCodes(xAPIKey = apiKey).execute()
        if (response.isSuccessful) {
            println("Success! Found bank codes:")
            val collection = response.body()
            collection?.data?.forEach { bank ->
                println("- ${bank.name} (${bank.code})")
            }
        } else {
            println("Error: ${response.code()} ${response.message()}")
            println(response.errorBody()?.string())
        }
    } catch (e: IOException) {
        println("Exception: ${e.message}")
    }
}
