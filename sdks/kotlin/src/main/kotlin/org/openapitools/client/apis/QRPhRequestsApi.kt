package org.openapitools.client.apis

import org.openapitools.client.infrastructure.CollectionFormats.*
import retrofit2.http.*
import retrofit2.Call
import okhttp3.RequestBody
import com.squareup.moshi.Json

import org.openapitools.client.models.CancelQRPhRequest
import org.openapitools.client.models.CanonicalCreateQRReq
import org.openapitools.client.models.HTTPValidationError
import org.openapitools.client.models.QRPhCollectionResponse
import org.openapitools.client.models.QRPhSingleResponse

interface QRPhRequestsApi {
    /**
     * POST v1/qrph/{id}/cancel
     * Cancel a QRPh request
     * Cancels the specified QRPh request and returns the updated request record.
     * Responses:
     *  - 200: Successful Response
     *  - 422: Validation Error
     *
     * @param id 
     * @param xAPIKey  (optional)
     * @param authorization  (optional)
     * @param cancelQRPhRequest  (optional)
     * @return [Call]<[QRPhSingleResponse]>
     */
    @POST("v1/qrph/{id}/cancel")
    fun cancelQrphV1QrphIdCancelPost(@Path("id") id: kotlin.String, @Header("X-API-Key") xAPIKey: kotlin.String? = null, @Header("Authorization") authorization: kotlin.String? = null, @Body cancelQRPhRequest: CancelQRPhRequest? = null): Call<QRPhSingleResponse>

    /**
     * POST v1/qrph/
     * Create a QRPh request
     * Creates a QRPh request from the canonical payload and returns the normalized request with the checkout URL attached.
     * Responses:
     *  - 201: Successful Response
     *  - 422: Validation Error
     *
     * @param canonicalCreateQRReq 
     * @param xAPIKey  (optional)
     * @param authorization  (optional)
     * @return [Call]<[QRPhSingleResponse]>
     */
    @POST("v1/qrph/")
    fun createQrphV1QrphPost(@Body canonicalCreateQRReq: CanonicalCreateQRReq, @Header("X-API-Key") xAPIKey: kotlin.String? = null, @Header("Authorization") authorization: kotlin.String? = null): Call<QRPhSingleResponse>

    /**
     * GET v1/qrph/{id}
     * Get QRPh status
     * Returns the current QRPh request state, including checkout URLs and payment IDs.
     * Responses:
     *  - 200: Successful Response
     *  - 422: Validation Error
     *
     * @param id 
     * @param xAPIKey  (optional)
     * @param authorization  (optional)
     * @return [Call]<[QRPhSingleResponse]>
     */
    @GET("v1/qrph/{id}")
    fun getQrphStatusV1QrphIdGet(@Path("id") id: kotlin.String, @Header("X-API-Key") xAPIKey: kotlin.String? = null, @Header("Authorization") authorization: kotlin.String? = null): Call<QRPhSingleResponse>

    /**
     * GET v1/qrph/
     * List QRPh requests
     * Returns a paginated collection of QRPh requests for the authenticated organization. Use &#x60;limit&#x60; and &#x60;cursor&#x60; for pagination and &#x60;reference_id&#x60; to locate a specific request.
     * Responses:
     *  - 200: Successful Response
     *  - 422: Validation Error
     *
     * @param limit Number of items to return (1-100). (optional, default to 50)
     * @param cursor Opaque cursor returned from the previous page for pagination. (optional)
     * @param referenceId Filter on a specific request reference ID. (optional)
     * @param xAPIKey  (optional)
     * @param authorization  (optional)
     * @return [Call]<[QRPhCollectionResponse]>
     */
    @GET("v1/qrph/")
    fun listQrphV1QrphGet(@Query("limit") limit: kotlin.Int? = 50, @Query("cursor") cursor: kotlin.String? = null, @Query("reference_id") referenceId: kotlin.String? = null, @Header("X-API-Key") xAPIKey: kotlin.String? = null, @Header("Authorization") authorization: kotlin.String? = null): Call<QRPhCollectionResponse>

}
