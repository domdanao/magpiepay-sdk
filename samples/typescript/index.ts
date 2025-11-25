import { Configuration, ReferencesApi } from '@domdanao/magpiepay-sdk-typescript';

const apiKey = process.env.MAGPIEPAY_API_KEY;

if (!apiKey) {
    console.error("Error: Please set the MAGPIEPAY_API_KEY environment variable.");
    process.exit(1);
}

const config = new Configuration({
    username: apiKey,
    password: '',
});

const referencesApi = new ReferencesApi(config);

async function main() {
    try {
        console.log("Fetching bank codes...");
        const response = await referencesApi.listBankCodes();
        console.log("Success! Found bank codes:");

        const bankCodes = response.data.data;
        bankCodes.slice(0, 5).forEach(code => {
            console.log(`- ${code.name} (${code.code})`);
        });

    } catch (error: any) {
        console.error("Error fetching bank codes:", error.message);
        if (error.response) {
            console.error("Response data:", error.response.data);
        }
    }
}

main();
