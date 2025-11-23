package org.openapitools.client.apis

import org.openapitools.client.infrastructure.CollectionFormats.*
import retrofit2.http.*
import retrofit2.Call
import okhttp3.RequestBody
import com.squareup.moshi.Json

import org.openapitools.client.models.HTTPValidationError
import org.openapitools.client.models.PaymentCollectionResponse
import org.openapitools.client.models.PaymentSingleResponse

interface PaymentsApi {
    /**
     * GET v1/payments/{payment_id}
     * Get payment
     * Retrieve the current state of a QRPh payment.
     * Responses:
     *  - 200: Successful Response
     *  - 422: Validation Error
     *
     * @param paymentId 
     * @param xAPIKey  (optional)
     * @param authorization  (optional)
     * @return [Call]<[PaymentSingleResponse]>
     */
    @GET("v1/payments/{payment_id}")
    fun getPaymentV1PaymentsPaymentIdGet(@Path("payment_id") paymentId: kotlin.String, @Header("X-API-Key") xAPIKey: kotlin.String? = null, @Header("Authorization") authorization: kotlin.String? = null): Call<PaymentSingleResponse>

    /**
     * GET v1/payments/
     * List payments
     * Returns a paginated list of QRPh payments for the authenticated organization.
     * Responses:
     *  - 200: Successful Response
     *  - 422: Validation Error
     *
     * @param limit Number of payments to return (1-100). (optional, default to 50)
     * @param cursor Cursor returned from the previous page. (optional)
     * @param xAPIKey  (optional)
     * @param authorization  (optional)
     * @return [Call]<[PaymentCollectionResponse]>
     */
    @GET("v1/payments/")
    fun listPaymentsV1PaymentsGet(@Query("limit") limit: kotlin.Int? = 50, @Query("cursor") cursor: kotlin.String? = null, @Header("X-API-Key") xAPIKey: kotlin.String? = null, @Header("Authorization") authorization: kotlin.String? = null): Call<PaymentCollectionResponse>

}
