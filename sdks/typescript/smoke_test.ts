import { ReferencesApi, Configuration } from "./index";

const apiKey = process.env.MAGPIE_API_KEY;

if (!apiKey) {
    console.error("Please set the MAGPIE_API_KEY environment variable.");
    process.exit(1);
}

const config = new Configuration({
    basePath: "https://api.magpiepay.com", // Assuming this is the prod URL, or I should check openapi.json servers
    apiKey: apiKey,
});

const api = new ReferencesApi(config);

async function run() {
    try {
        console.log("Fetching bank codes...");
        // Pass apiKey as the first argument (xAPIKey)
        const response = await api.listBankCodesV1ReferencesBankCodesGet(apiKey);
        console.log("Success! Found bank codes:");
        // @ts-ignore
        const codes = response.data.data?.slice(0, 5);
        console.log(JSON.stringify(codes, null, 2));
    } catch (error) {
        console.error("Error fetching bank codes:");
        if (error && typeof error === 'object' && 'response' in error) {
            // @ts-ignore
            console.error("Status:", error.response?.status);
            // @ts-ignore
            console.error("Data:", JSON.stringify(error.response?.data, null, 2));
        } else {
            console.error(error);
        }
        process.exit(1);
    }
}

run();
