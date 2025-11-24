package org.openapitools.client.apis

import org.openapitools.client.infrastructure.CollectionFormats.*
import retrofit2.http.*
import retrofit2.Call
import okhttp3.RequestBody
import com.squareup.moshi.Json

import org.openapitools.client.models.HTTPValidationError
import org.openapitools.client.models.PayoutCollectionResponse
import org.openapitools.client.models.PayoutCreateRequest
import org.openapitools.client.models.PayoutSingleResponse

interface PayoutsApi {
    /**
     * POST v1/payouts/
     * Create a payout
     * Initiates a payout using a canonical payload and returns the normalized payout record.
     * Responses:
     *  - 201: Successful Response
     *  - 422: Validation Error
     *
     * @param payoutCreateRequest 
     * @param xAPIKey  (optional)
     * @param authorization  (optional)
     * @return [Call]<[PayoutSingleResponse]>
     */
    @POST("v1/payouts/")
    fun createPayout(@Body payoutCreateRequest: PayoutCreateRequest, @Header("X-API-Key") xAPIKey: kotlin.String? = null, @Header("Authorization") authorization: kotlin.String? = null): Call<PayoutSingleResponse>

    /**
     * GET v1/payouts/{payout_id}
     * Get payout
     * Retrieves the latest state for a payout.
     * Responses:
     *  - 200: Successful Response
     *  - 422: Validation Error
     *
     * @param payoutId 
     * @param xAPIKey  (optional)
     * @param authorization  (optional)
     * @return [Call]<[PayoutSingleResponse]>
     */
    @GET("v1/payouts/{payout_id}")
    fun getPayout(@Path("payout_id") payoutId: kotlin.String, @Header("X-API-Key") xAPIKey: kotlin.String? = null, @Header("Authorization") authorization: kotlin.String? = null): Call<PayoutSingleResponse>

    /**
     * GET v1/payouts/
     * List payouts
     * Returns a paginated collection of payouts for the authenticated organization.
     * Responses:
     *  - 200: Successful Response
     *  - 422: Validation Error
     *
     * @param limit Number of payouts to return (1-100). (optional, default to 50)
     * @param cursor Cursor returned from the previous page. (optional)
     * @param referenceId Filter payouts by reference ID. (optional)
     * @param xAPIKey  (optional)
     * @param authorization  (optional)
     * @return [Call]<[PayoutCollectionResponse]>
     */
    @GET("v1/payouts/")
    fun listPayouts(@Query("limit") limit: kotlin.Int? = 50, @Query("cursor") cursor: kotlin.String? = null, @Query("reference_id") referenceId: kotlin.String? = null, @Header("X-API-Key") xAPIKey: kotlin.String? = null, @Header("Authorization") authorization: kotlin.String? = null): Call<PayoutCollectionResponse>

}
