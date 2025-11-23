# CanonicalCreateQRReq

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReferenceId** | **string** | Client-provided identifier used to correlate the QRPh request. | 
**Type** | **string** | QR type, dynamic for fixed payments or static for amount-less flows. | 
**Amount** | Pointer to **NullableInt32** |  | [optional] 
**SubmerchantId** | Pointer to **NullableString** |  | [optional] 
**Metadata** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewCanonicalCreateQRReq

`func NewCanonicalCreateQRReq(referenceId string, type_ string, ) *CanonicalCreateQRReq`

NewCanonicalCreateQRReq instantiates a new CanonicalCreateQRReq object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCanonicalCreateQRReqWithDefaults

`func NewCanonicalCreateQRReqWithDefaults() *CanonicalCreateQRReq`

NewCanonicalCreateQRReqWithDefaults instantiates a new CanonicalCreateQRReq object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReferenceId

`func (o *CanonicalCreateQRReq) GetReferenceId() string`

GetReferenceId returns the ReferenceId field if non-nil, zero value otherwise.

### GetReferenceIdOk

`func (o *CanonicalCreateQRReq) GetReferenceIdOk() (*string, bool)`

GetReferenceIdOk returns a tuple with the ReferenceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceId

`func (o *CanonicalCreateQRReq) SetReferenceId(v string)`

SetReferenceId sets ReferenceId field to given value.


### GetType

`func (o *CanonicalCreateQRReq) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CanonicalCreateQRReq) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CanonicalCreateQRReq) SetType(v string)`

SetType sets Type field to given value.


### GetAmount

`func (o *CanonicalCreateQRReq) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CanonicalCreateQRReq) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CanonicalCreateQRReq) SetAmount(v int32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *CanonicalCreateQRReq) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### SetAmountNil

`func (o *CanonicalCreateQRReq) SetAmountNil(b bool)`

 SetAmountNil sets the value for Amount to be an explicit nil

### UnsetAmount
`func (o *CanonicalCreateQRReq) UnsetAmount()`

UnsetAmount ensures that no value is present for Amount, not even an explicit nil
### GetSubmerchantId

`func (o *CanonicalCreateQRReq) GetSubmerchantId() string`

GetSubmerchantId returns the SubmerchantId field if non-nil, zero value otherwise.

### GetSubmerchantIdOk

`func (o *CanonicalCreateQRReq) GetSubmerchantIdOk() (*string, bool)`

GetSubmerchantIdOk returns a tuple with the SubmerchantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubmerchantId

`func (o *CanonicalCreateQRReq) SetSubmerchantId(v string)`

SetSubmerchantId sets SubmerchantId field to given value.

### HasSubmerchantId

`func (o *CanonicalCreateQRReq) HasSubmerchantId() bool`

HasSubmerchantId returns a boolean if a field has been set.

### SetSubmerchantIdNil

`func (o *CanonicalCreateQRReq) SetSubmerchantIdNil(b bool)`

 SetSubmerchantIdNil sets the value for SubmerchantId to be an explicit nil

### UnsetSubmerchantId
`func (o *CanonicalCreateQRReq) UnsetSubmerchantId()`

UnsetSubmerchantId ensures that no value is present for SubmerchantId, not even an explicit nil
### GetMetadata

`func (o *CanonicalCreateQRReq) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *CanonicalCreateQRReq) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *CanonicalCreateQRReq) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *CanonicalCreateQRReq) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *CanonicalCreateQRReq) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *CanonicalCreateQRReq) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


