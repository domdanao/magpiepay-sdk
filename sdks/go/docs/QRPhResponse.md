# QRPhResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique identifier for the QRPh request. | 
**ReferenceId** | **string** | Client-provided reference for correlating the request. | 
**Type** | **string** | QR code type, either static or dynamic. | 
**Amount** | Pointer to **NullableInt32** |  | [optional] 
**SubmerchantId** | Pointer to **NullableString** |  | [optional] 
**Status** | **string** | Current status of the QRPh request. | 
**Metadata** | Pointer to **map[string]interface{}** |  | [optional] 
**QrphPayload** | Pointer to **NullableString** |  | [optional] 
**QrphImage** | Pointer to **NullableString** |  | [optional] 
**CheckoutUrl** | Pointer to **NullableString** |  | [optional] 
**PaymentId** | Pointer to **NullableString** |  | [optional] 
**PaidAt** | Pointer to **NullableString** |  | [optional] 
**ExpiresAt** | Pointer to **NullableString** |  | [optional] 
**CancelledAt** | Pointer to **NullableString** |  | [optional] 
**CancellationReason** | Pointer to **NullableString** |  | [optional] 
**CreatedAt** | **string** | ISO timestamp when the QRPh request was created. | 
**UpdatedAt** | **string** | ISO timestamp when the QRPh request was last updated. | 
**Livemode** | **bool** | Indicates whether the request was created in live or test mode. | 

## Methods

### NewQRPhResponse

`func NewQRPhResponse(id string, referenceId string, type_ string, status string, createdAt string, updatedAt string, livemode bool, ) *QRPhResponse`

NewQRPhResponse instantiates a new QRPhResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQRPhResponseWithDefaults

`func NewQRPhResponseWithDefaults() *QRPhResponse`

NewQRPhResponseWithDefaults instantiates a new QRPhResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *QRPhResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *QRPhResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *QRPhResponse) SetId(v string)`

SetId sets Id field to given value.


### GetReferenceId

`func (o *QRPhResponse) GetReferenceId() string`

GetReferenceId returns the ReferenceId field if non-nil, zero value otherwise.

### GetReferenceIdOk

`func (o *QRPhResponse) GetReferenceIdOk() (*string, bool)`

GetReferenceIdOk returns a tuple with the ReferenceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceId

`func (o *QRPhResponse) SetReferenceId(v string)`

SetReferenceId sets ReferenceId field to given value.


### GetType

`func (o *QRPhResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *QRPhResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *QRPhResponse) SetType(v string)`

SetType sets Type field to given value.


### GetAmount

`func (o *QRPhResponse) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *QRPhResponse) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *QRPhResponse) SetAmount(v int32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *QRPhResponse) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### SetAmountNil

`func (o *QRPhResponse) SetAmountNil(b bool)`

 SetAmountNil sets the value for Amount to be an explicit nil

### UnsetAmount
`func (o *QRPhResponse) UnsetAmount()`

UnsetAmount ensures that no value is present for Amount, not even an explicit nil
### GetSubmerchantId

`func (o *QRPhResponse) GetSubmerchantId() string`

GetSubmerchantId returns the SubmerchantId field if non-nil, zero value otherwise.

### GetSubmerchantIdOk

`func (o *QRPhResponse) GetSubmerchantIdOk() (*string, bool)`

GetSubmerchantIdOk returns a tuple with the SubmerchantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubmerchantId

`func (o *QRPhResponse) SetSubmerchantId(v string)`

SetSubmerchantId sets SubmerchantId field to given value.

### HasSubmerchantId

`func (o *QRPhResponse) HasSubmerchantId() bool`

HasSubmerchantId returns a boolean if a field has been set.

### SetSubmerchantIdNil

`func (o *QRPhResponse) SetSubmerchantIdNil(b bool)`

 SetSubmerchantIdNil sets the value for SubmerchantId to be an explicit nil

### UnsetSubmerchantId
`func (o *QRPhResponse) UnsetSubmerchantId()`

UnsetSubmerchantId ensures that no value is present for SubmerchantId, not even an explicit nil
### GetStatus

`func (o *QRPhResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *QRPhResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *QRPhResponse) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetMetadata

`func (o *QRPhResponse) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *QRPhResponse) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *QRPhResponse) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *QRPhResponse) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *QRPhResponse) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *QRPhResponse) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetQrphPayload

`func (o *QRPhResponse) GetQrphPayload() string`

GetQrphPayload returns the QrphPayload field if non-nil, zero value otherwise.

### GetQrphPayloadOk

`func (o *QRPhResponse) GetQrphPayloadOk() (*string, bool)`

GetQrphPayloadOk returns a tuple with the QrphPayload field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrphPayload

`func (o *QRPhResponse) SetQrphPayload(v string)`

SetQrphPayload sets QrphPayload field to given value.

### HasQrphPayload

`func (o *QRPhResponse) HasQrphPayload() bool`

HasQrphPayload returns a boolean if a field has been set.

### SetQrphPayloadNil

`func (o *QRPhResponse) SetQrphPayloadNil(b bool)`

 SetQrphPayloadNil sets the value for QrphPayload to be an explicit nil

### UnsetQrphPayload
`func (o *QRPhResponse) UnsetQrphPayload()`

UnsetQrphPayload ensures that no value is present for QrphPayload, not even an explicit nil
### GetQrphImage

`func (o *QRPhResponse) GetQrphImage() string`

GetQrphImage returns the QrphImage field if non-nil, zero value otherwise.

### GetQrphImageOk

`func (o *QRPhResponse) GetQrphImageOk() (*string, bool)`

GetQrphImageOk returns a tuple with the QrphImage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrphImage

`func (o *QRPhResponse) SetQrphImage(v string)`

SetQrphImage sets QrphImage field to given value.

### HasQrphImage

`func (o *QRPhResponse) HasQrphImage() bool`

HasQrphImage returns a boolean if a field has been set.

### SetQrphImageNil

`func (o *QRPhResponse) SetQrphImageNil(b bool)`

 SetQrphImageNil sets the value for QrphImage to be an explicit nil

### UnsetQrphImage
`func (o *QRPhResponse) UnsetQrphImage()`

UnsetQrphImage ensures that no value is present for QrphImage, not even an explicit nil
### GetCheckoutUrl

`func (o *QRPhResponse) GetCheckoutUrl() string`

GetCheckoutUrl returns the CheckoutUrl field if non-nil, zero value otherwise.

### GetCheckoutUrlOk

`func (o *QRPhResponse) GetCheckoutUrlOk() (*string, bool)`

GetCheckoutUrlOk returns a tuple with the CheckoutUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckoutUrl

`func (o *QRPhResponse) SetCheckoutUrl(v string)`

SetCheckoutUrl sets CheckoutUrl field to given value.

### HasCheckoutUrl

`func (o *QRPhResponse) HasCheckoutUrl() bool`

HasCheckoutUrl returns a boolean if a field has been set.

### SetCheckoutUrlNil

`func (o *QRPhResponse) SetCheckoutUrlNil(b bool)`

 SetCheckoutUrlNil sets the value for CheckoutUrl to be an explicit nil

### UnsetCheckoutUrl
`func (o *QRPhResponse) UnsetCheckoutUrl()`

UnsetCheckoutUrl ensures that no value is present for CheckoutUrl, not even an explicit nil
### GetPaymentId

`func (o *QRPhResponse) GetPaymentId() string`

GetPaymentId returns the PaymentId field if non-nil, zero value otherwise.

### GetPaymentIdOk

`func (o *QRPhResponse) GetPaymentIdOk() (*string, bool)`

GetPaymentIdOk returns a tuple with the PaymentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentId

`func (o *QRPhResponse) SetPaymentId(v string)`

SetPaymentId sets PaymentId field to given value.

### HasPaymentId

`func (o *QRPhResponse) HasPaymentId() bool`

HasPaymentId returns a boolean if a field has been set.

### SetPaymentIdNil

`func (o *QRPhResponse) SetPaymentIdNil(b bool)`

 SetPaymentIdNil sets the value for PaymentId to be an explicit nil

### UnsetPaymentId
`func (o *QRPhResponse) UnsetPaymentId()`

UnsetPaymentId ensures that no value is present for PaymentId, not even an explicit nil
### GetPaidAt

`func (o *QRPhResponse) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *QRPhResponse) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *QRPhResponse) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.

### HasPaidAt

`func (o *QRPhResponse) HasPaidAt() bool`

HasPaidAt returns a boolean if a field has been set.

### SetPaidAtNil

`func (o *QRPhResponse) SetPaidAtNil(b bool)`

 SetPaidAtNil sets the value for PaidAt to be an explicit nil

### UnsetPaidAt
`func (o *QRPhResponse) UnsetPaidAt()`

UnsetPaidAt ensures that no value is present for PaidAt, not even an explicit nil
### GetExpiresAt

`func (o *QRPhResponse) GetExpiresAt() string`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *QRPhResponse) GetExpiresAtOk() (*string, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *QRPhResponse) SetExpiresAt(v string)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *QRPhResponse) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### SetExpiresAtNil

`func (o *QRPhResponse) SetExpiresAtNil(b bool)`

 SetExpiresAtNil sets the value for ExpiresAt to be an explicit nil

### UnsetExpiresAt
`func (o *QRPhResponse) UnsetExpiresAt()`

UnsetExpiresAt ensures that no value is present for ExpiresAt, not even an explicit nil
### GetCancelledAt

`func (o *QRPhResponse) GetCancelledAt() string`

GetCancelledAt returns the CancelledAt field if non-nil, zero value otherwise.

### GetCancelledAtOk

`func (o *QRPhResponse) GetCancelledAtOk() (*string, bool)`

GetCancelledAtOk returns a tuple with the CancelledAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelledAt

`func (o *QRPhResponse) SetCancelledAt(v string)`

SetCancelledAt sets CancelledAt field to given value.

### HasCancelledAt

`func (o *QRPhResponse) HasCancelledAt() bool`

HasCancelledAt returns a boolean if a field has been set.

### SetCancelledAtNil

`func (o *QRPhResponse) SetCancelledAtNil(b bool)`

 SetCancelledAtNil sets the value for CancelledAt to be an explicit nil

### UnsetCancelledAt
`func (o *QRPhResponse) UnsetCancelledAt()`

UnsetCancelledAt ensures that no value is present for CancelledAt, not even an explicit nil
### GetCancellationReason

`func (o *QRPhResponse) GetCancellationReason() string`

GetCancellationReason returns the CancellationReason field if non-nil, zero value otherwise.

### GetCancellationReasonOk

`func (o *QRPhResponse) GetCancellationReasonOk() (*string, bool)`

GetCancellationReasonOk returns a tuple with the CancellationReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationReason

`func (o *QRPhResponse) SetCancellationReason(v string)`

SetCancellationReason sets CancellationReason field to given value.

### HasCancellationReason

`func (o *QRPhResponse) HasCancellationReason() bool`

HasCancellationReason returns a boolean if a field has been set.

### SetCancellationReasonNil

`func (o *QRPhResponse) SetCancellationReasonNil(b bool)`

 SetCancellationReasonNil sets the value for CancellationReason to be an explicit nil

### UnsetCancellationReason
`func (o *QRPhResponse) UnsetCancellationReason()`

UnsetCancellationReason ensures that no value is present for CancellationReason, not even an explicit nil
### GetCreatedAt

`func (o *QRPhResponse) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *QRPhResponse) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *QRPhResponse) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *QRPhResponse) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *QRPhResponse) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *QRPhResponse) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetLivemode

`func (o *QRPhResponse) GetLivemode() bool`

GetLivemode returns the Livemode field if non-nil, zero value otherwise.

### GetLivemodeOk

`func (o *QRPhResponse) GetLivemodeOk() (*bool, bool)`

GetLivemodeOk returns a tuple with the Livemode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLivemode

`func (o *QRPhResponse) SetLivemode(v bool)`

SetLivemode sets Livemode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


