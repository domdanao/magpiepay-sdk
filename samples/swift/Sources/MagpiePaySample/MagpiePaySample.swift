import Foundation
import MagpiePay

@main
struct MagpiePaySample {
    static func main() {
        let apiKey = ProcessInfo.processInfo.environment["MAGPIE_API_KEY"] ?? ""
        if apiKey.isEmpty {
            print("Error: MAGPIE_API_KEY environment variable not set")
            exit(1)
        }

        // Configure
        MagpiePayAPI.basePath = "https://api.magpiepay.com"
        MagpiePayAPI.customHeaders = ["X-API-Key": apiKey]

        print("Fetching bank codes...")

        let semaphore = DispatchSemaphore(value: 0)

        ReferencesAPI.listBankCodesV1ReferencesBankCodesGet { result, error in
            if let error = error {
                print("Error: \(error)")
            } else if let result = result {
                print("Success! Found bank codes:")
                // result is BankCodeCollection
                if let data = result.data {
                    for bank in data {
                        print("- \(bank.name ?? "") (\(bank.code))")
                    }
                }
            }
            semaphore.signal()
        }

        semaphore.wait()
    }
}
