# PaymentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique identifier for the payment record. | 
**QrphId** | **string** | Associated QRPh request identifier. | 
**Status** | Pointer to **NullableString** |  | [optional] 
**Amount** | Pointer to **NullableInt32** |  | [optional] 
**MagpieMdr** | Pointer to **NullableString** |  | [optional] 
**MagpieFee** | Pointer to **NullableInt32** |  | [optional] 
**MerchantNetAmount** | Pointer to **NullableInt32** |  | [optional] 
**PaymentSource** | Pointer to **NullableString** |  | [optional] 
**PaidAt** | Pointer to **NullableString** |  | [optional] 
**CreatedAt** | **string** | ISO timestamp when the payment record was created. | 
**UpdatedAt** | **string** | ISO timestamp when the payment record was last updated. | 
**Livemode** | **bool** | Whether the payment was processed in live mode. | 

## Methods

### NewPaymentResponse

`func NewPaymentResponse(id string, qrphId string, createdAt string, updatedAt string, livemode bool, ) *PaymentResponse`

NewPaymentResponse instantiates a new PaymentResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentResponseWithDefaults

`func NewPaymentResponseWithDefaults() *PaymentResponse`

NewPaymentResponseWithDefaults instantiates a new PaymentResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PaymentResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PaymentResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PaymentResponse) SetId(v string)`

SetId sets Id field to given value.


### GetQrphId

`func (o *PaymentResponse) GetQrphId() string`

GetQrphId returns the QrphId field if non-nil, zero value otherwise.

### GetQrphIdOk

`func (o *PaymentResponse) GetQrphIdOk() (*string, bool)`

GetQrphIdOk returns a tuple with the QrphId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrphId

`func (o *PaymentResponse) SetQrphId(v string)`

SetQrphId sets QrphId field to given value.


### GetStatus

`func (o *PaymentResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PaymentResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PaymentResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *PaymentResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### SetStatusNil

`func (o *PaymentResponse) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *PaymentResponse) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetAmount

`func (o *PaymentResponse) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PaymentResponse) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PaymentResponse) SetAmount(v int32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PaymentResponse) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### SetAmountNil

`func (o *PaymentResponse) SetAmountNil(b bool)`

 SetAmountNil sets the value for Amount to be an explicit nil

### UnsetAmount
`func (o *PaymentResponse) UnsetAmount()`

UnsetAmount ensures that no value is present for Amount, not even an explicit nil
### GetMagpieMdr

`func (o *PaymentResponse) GetMagpieMdr() string`

GetMagpieMdr returns the MagpieMdr field if non-nil, zero value otherwise.

### GetMagpieMdrOk

`func (o *PaymentResponse) GetMagpieMdrOk() (*string, bool)`

GetMagpieMdrOk returns a tuple with the MagpieMdr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMagpieMdr

`func (o *PaymentResponse) SetMagpieMdr(v string)`

SetMagpieMdr sets MagpieMdr field to given value.

### HasMagpieMdr

`func (o *PaymentResponse) HasMagpieMdr() bool`

HasMagpieMdr returns a boolean if a field has been set.

### SetMagpieMdrNil

`func (o *PaymentResponse) SetMagpieMdrNil(b bool)`

 SetMagpieMdrNil sets the value for MagpieMdr to be an explicit nil

### UnsetMagpieMdr
`func (o *PaymentResponse) UnsetMagpieMdr()`

UnsetMagpieMdr ensures that no value is present for MagpieMdr, not even an explicit nil
### GetMagpieFee

`func (o *PaymentResponse) GetMagpieFee() int32`

GetMagpieFee returns the MagpieFee field if non-nil, zero value otherwise.

### GetMagpieFeeOk

`func (o *PaymentResponse) GetMagpieFeeOk() (*int32, bool)`

GetMagpieFeeOk returns a tuple with the MagpieFee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMagpieFee

`func (o *PaymentResponse) SetMagpieFee(v int32)`

SetMagpieFee sets MagpieFee field to given value.

### HasMagpieFee

`func (o *PaymentResponse) HasMagpieFee() bool`

HasMagpieFee returns a boolean if a field has been set.

### SetMagpieFeeNil

`func (o *PaymentResponse) SetMagpieFeeNil(b bool)`

 SetMagpieFeeNil sets the value for MagpieFee to be an explicit nil

### UnsetMagpieFee
`func (o *PaymentResponse) UnsetMagpieFee()`

UnsetMagpieFee ensures that no value is present for MagpieFee, not even an explicit nil
### GetMerchantNetAmount

`func (o *PaymentResponse) GetMerchantNetAmount() int32`

GetMerchantNetAmount returns the MerchantNetAmount field if non-nil, zero value otherwise.

### GetMerchantNetAmountOk

`func (o *PaymentResponse) GetMerchantNetAmountOk() (*int32, bool)`

GetMerchantNetAmountOk returns a tuple with the MerchantNetAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMerchantNetAmount

`func (o *PaymentResponse) SetMerchantNetAmount(v int32)`

SetMerchantNetAmount sets MerchantNetAmount field to given value.

### HasMerchantNetAmount

`func (o *PaymentResponse) HasMerchantNetAmount() bool`

HasMerchantNetAmount returns a boolean if a field has been set.

### SetMerchantNetAmountNil

`func (o *PaymentResponse) SetMerchantNetAmountNil(b bool)`

 SetMerchantNetAmountNil sets the value for MerchantNetAmount to be an explicit nil

### UnsetMerchantNetAmount
`func (o *PaymentResponse) UnsetMerchantNetAmount()`

UnsetMerchantNetAmount ensures that no value is present for MerchantNetAmount, not even an explicit nil
### GetPaymentSource

`func (o *PaymentResponse) GetPaymentSource() string`

GetPaymentSource returns the PaymentSource field if non-nil, zero value otherwise.

### GetPaymentSourceOk

`func (o *PaymentResponse) GetPaymentSourceOk() (*string, bool)`

GetPaymentSourceOk returns a tuple with the PaymentSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentSource

`func (o *PaymentResponse) SetPaymentSource(v string)`

SetPaymentSource sets PaymentSource field to given value.

### HasPaymentSource

`func (o *PaymentResponse) HasPaymentSource() bool`

HasPaymentSource returns a boolean if a field has been set.

### SetPaymentSourceNil

`func (o *PaymentResponse) SetPaymentSourceNil(b bool)`

 SetPaymentSourceNil sets the value for PaymentSource to be an explicit nil

### UnsetPaymentSource
`func (o *PaymentResponse) UnsetPaymentSource()`

UnsetPaymentSource ensures that no value is present for PaymentSource, not even an explicit nil
### GetPaidAt

`func (o *PaymentResponse) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *PaymentResponse) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *PaymentResponse) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.

### HasPaidAt

`func (o *PaymentResponse) HasPaidAt() bool`

HasPaidAt returns a boolean if a field has been set.

### SetPaidAtNil

`func (o *PaymentResponse) SetPaidAtNil(b bool)`

 SetPaidAtNil sets the value for PaidAt to be an explicit nil

### UnsetPaidAt
`func (o *PaymentResponse) UnsetPaidAt()`

UnsetPaidAt ensures that no value is present for PaidAt, not even an explicit nil
### GetCreatedAt

`func (o *PaymentResponse) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PaymentResponse) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PaymentResponse) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *PaymentResponse) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *PaymentResponse) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *PaymentResponse) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetLivemode

`func (o *PaymentResponse) GetLivemode() bool`

GetLivemode returns the Livemode field if non-nil, zero value otherwise.

### GetLivemodeOk

`func (o *PaymentResponse) GetLivemodeOk() (*bool, bool)`

GetLivemodeOk returns a tuple with the Livemode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLivemode

`func (o *PaymentResponse) SetLivemode(v bool)`

SetLivemode sets Livemode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


