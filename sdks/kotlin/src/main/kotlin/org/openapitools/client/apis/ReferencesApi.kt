package org.openapitools.client.apis

import org.openapitools.client.infrastructure.CollectionFormats.*
import retrofit2.http.*
import retrofit2.Call
import okhttp3.RequestBody
import com.squareup.moshi.Json

import org.openapitools.client.models.BankCodeCollection
import org.openapitools.client.models.HTTPValidationError

interface ReferencesApi {
    /**
     * GET v1/references/bank_codes
     * List Bank Codes
     * 
     * Responses:
     *  - 200: Successful Response
     *  - 422: Validation Error
     *
     * @param xAPIKey  (optional)
     * @param authorization  (optional)
     * @return [Call]<[BankCodeCollection]>
     */
    @GET("v1/references/bank_codes")
    fun listBankCodes(@Header("X-API-Key") xAPIKey: kotlin.String? = null, @Header("Authorization") authorization: kotlin.String? = null): Call<BankCodeCollection>

}
