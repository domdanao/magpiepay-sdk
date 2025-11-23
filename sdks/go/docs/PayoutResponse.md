# PayoutResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique payout identifier. | 
**ReferenceId** | **string** | Client-provided reference tying to the payout request. | 
**Channel** | **string** | Payment channel (instapay/pesonet). | 
**Amount** | **int32** | Amount in centavos. | 
**MagpieFee** | Pointer to **NullableInt32** |  | [optional] 
**SourceAccountId** | **string** | Org bank account used as source. | 
**Destination** | [**PayoutDestinationResponse**](PayoutDestinationResponse.md) | Destination bank account data. | 
**Purpose** | Pointer to **NullableString** |  | [optional] 
**Status** | **string** | Current status of the payout. | 
**Provider** | Pointer to **NullableString** |  | [optional] 
**ProviderRef** | Pointer to **map[string]interface{}** | Provider-specific reference data. | [optional] 
**ProviderMessage** | Pointer to **NullableString** |  | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | Merchant-defined metadata. | [optional] 
**CreatedAt** | **string** | ISO timestamp when payout was created. | 
**UpdatedAt** | **string** | ISO timestamp when the payout was last modified. | 
**PostedAt** | Pointer to **NullableString** |  | [optional] 
**CompletedAt** | Pointer to **NullableString** |  | [optional] 
**FailedAt** | Pointer to **NullableString** |  | [optional] 
**FailureCode** | Pointer to **NullableString** |  | [optional] 
**FailureMessage** | Pointer to **NullableString** |  | [optional] 
**Livemode** | **bool** | True when the payout was created in live mode. | 

## Methods

### NewPayoutResponse

`func NewPayoutResponse(id string, referenceId string, channel string, amount int32, sourceAccountId string, destination PayoutDestinationResponse, status string, createdAt string, updatedAt string, livemode bool, ) *PayoutResponse`

NewPayoutResponse instantiates a new PayoutResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPayoutResponseWithDefaults

`func NewPayoutResponseWithDefaults() *PayoutResponse`

NewPayoutResponseWithDefaults instantiates a new PayoutResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PayoutResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PayoutResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PayoutResponse) SetId(v string)`

SetId sets Id field to given value.


### GetReferenceId

`func (o *PayoutResponse) GetReferenceId() string`

GetReferenceId returns the ReferenceId field if non-nil, zero value otherwise.

### GetReferenceIdOk

`func (o *PayoutResponse) GetReferenceIdOk() (*string, bool)`

GetReferenceIdOk returns a tuple with the ReferenceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceId

`func (o *PayoutResponse) SetReferenceId(v string)`

SetReferenceId sets ReferenceId field to given value.


### GetChannel

`func (o *PayoutResponse) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *PayoutResponse) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *PayoutResponse) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetAmount

`func (o *PayoutResponse) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PayoutResponse) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PayoutResponse) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetMagpieFee

`func (o *PayoutResponse) GetMagpieFee() int32`

GetMagpieFee returns the MagpieFee field if non-nil, zero value otherwise.

### GetMagpieFeeOk

`func (o *PayoutResponse) GetMagpieFeeOk() (*int32, bool)`

GetMagpieFeeOk returns a tuple with the MagpieFee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMagpieFee

`func (o *PayoutResponse) SetMagpieFee(v int32)`

SetMagpieFee sets MagpieFee field to given value.

### HasMagpieFee

`func (o *PayoutResponse) HasMagpieFee() bool`

HasMagpieFee returns a boolean if a field has been set.

### SetMagpieFeeNil

`func (o *PayoutResponse) SetMagpieFeeNil(b bool)`

 SetMagpieFeeNil sets the value for MagpieFee to be an explicit nil

### UnsetMagpieFee
`func (o *PayoutResponse) UnsetMagpieFee()`

UnsetMagpieFee ensures that no value is present for MagpieFee, not even an explicit nil
### GetSourceAccountId

`func (o *PayoutResponse) GetSourceAccountId() string`

GetSourceAccountId returns the SourceAccountId field if non-nil, zero value otherwise.

### GetSourceAccountIdOk

`func (o *PayoutResponse) GetSourceAccountIdOk() (*string, bool)`

GetSourceAccountIdOk returns a tuple with the SourceAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceAccountId

`func (o *PayoutResponse) SetSourceAccountId(v string)`

SetSourceAccountId sets SourceAccountId field to given value.


### GetDestination

`func (o *PayoutResponse) GetDestination() PayoutDestinationResponse`

GetDestination returns the Destination field if non-nil, zero value otherwise.

### GetDestinationOk

`func (o *PayoutResponse) GetDestinationOk() (*PayoutDestinationResponse, bool)`

GetDestinationOk returns a tuple with the Destination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestination

`func (o *PayoutResponse) SetDestination(v PayoutDestinationResponse)`

SetDestination sets Destination field to given value.


### GetPurpose

`func (o *PayoutResponse) GetPurpose() string`

GetPurpose returns the Purpose field if non-nil, zero value otherwise.

### GetPurposeOk

`func (o *PayoutResponse) GetPurposeOk() (*string, bool)`

GetPurposeOk returns a tuple with the Purpose field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurpose

`func (o *PayoutResponse) SetPurpose(v string)`

SetPurpose sets Purpose field to given value.

### HasPurpose

`func (o *PayoutResponse) HasPurpose() bool`

HasPurpose returns a boolean if a field has been set.

### SetPurposeNil

`func (o *PayoutResponse) SetPurposeNil(b bool)`

 SetPurposeNil sets the value for Purpose to be an explicit nil

### UnsetPurpose
`func (o *PayoutResponse) UnsetPurpose()`

UnsetPurpose ensures that no value is present for Purpose, not even an explicit nil
### GetStatus

`func (o *PayoutResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PayoutResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PayoutResponse) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetProvider

`func (o *PayoutResponse) GetProvider() string`

GetProvider returns the Provider field if non-nil, zero value otherwise.

### GetProviderOk

`func (o *PayoutResponse) GetProviderOk() (*string, bool)`

GetProviderOk returns a tuple with the Provider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvider

`func (o *PayoutResponse) SetProvider(v string)`

SetProvider sets Provider field to given value.

### HasProvider

`func (o *PayoutResponse) HasProvider() bool`

HasProvider returns a boolean if a field has been set.

### SetProviderNil

`func (o *PayoutResponse) SetProviderNil(b bool)`

 SetProviderNil sets the value for Provider to be an explicit nil

### UnsetProvider
`func (o *PayoutResponse) UnsetProvider()`

UnsetProvider ensures that no value is present for Provider, not even an explicit nil
### GetProviderRef

`func (o *PayoutResponse) GetProviderRef() map[string]interface{}`

GetProviderRef returns the ProviderRef field if non-nil, zero value otherwise.

### GetProviderRefOk

`func (o *PayoutResponse) GetProviderRefOk() (*map[string]interface{}, bool)`

GetProviderRefOk returns a tuple with the ProviderRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProviderRef

`func (o *PayoutResponse) SetProviderRef(v map[string]interface{})`

SetProviderRef sets ProviderRef field to given value.

### HasProviderRef

`func (o *PayoutResponse) HasProviderRef() bool`

HasProviderRef returns a boolean if a field has been set.

### GetProviderMessage

`func (o *PayoutResponse) GetProviderMessage() string`

GetProviderMessage returns the ProviderMessage field if non-nil, zero value otherwise.

### GetProviderMessageOk

`func (o *PayoutResponse) GetProviderMessageOk() (*string, bool)`

GetProviderMessageOk returns a tuple with the ProviderMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProviderMessage

`func (o *PayoutResponse) SetProviderMessage(v string)`

SetProviderMessage sets ProviderMessage field to given value.

### HasProviderMessage

`func (o *PayoutResponse) HasProviderMessage() bool`

HasProviderMessage returns a boolean if a field has been set.

### SetProviderMessageNil

`func (o *PayoutResponse) SetProviderMessageNil(b bool)`

 SetProviderMessageNil sets the value for ProviderMessage to be an explicit nil

### UnsetProviderMessage
`func (o *PayoutResponse) UnsetProviderMessage()`

UnsetProviderMessage ensures that no value is present for ProviderMessage, not even an explicit nil
### GetMetadata

`func (o *PayoutResponse) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *PayoutResponse) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *PayoutResponse) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *PayoutResponse) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetCreatedAt

`func (o *PayoutResponse) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PayoutResponse) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PayoutResponse) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *PayoutResponse) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *PayoutResponse) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *PayoutResponse) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetPostedAt

`func (o *PayoutResponse) GetPostedAt() string`

GetPostedAt returns the PostedAt field if non-nil, zero value otherwise.

### GetPostedAtOk

`func (o *PayoutResponse) GetPostedAtOk() (*string, bool)`

GetPostedAtOk returns a tuple with the PostedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostedAt

`func (o *PayoutResponse) SetPostedAt(v string)`

SetPostedAt sets PostedAt field to given value.

### HasPostedAt

`func (o *PayoutResponse) HasPostedAt() bool`

HasPostedAt returns a boolean if a field has been set.

### SetPostedAtNil

`func (o *PayoutResponse) SetPostedAtNil(b bool)`

 SetPostedAtNil sets the value for PostedAt to be an explicit nil

### UnsetPostedAt
`func (o *PayoutResponse) UnsetPostedAt()`

UnsetPostedAt ensures that no value is present for PostedAt, not even an explicit nil
### GetCompletedAt

`func (o *PayoutResponse) GetCompletedAt() string`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *PayoutResponse) GetCompletedAtOk() (*string, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *PayoutResponse) SetCompletedAt(v string)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *PayoutResponse) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.

### SetCompletedAtNil

`func (o *PayoutResponse) SetCompletedAtNil(b bool)`

 SetCompletedAtNil sets the value for CompletedAt to be an explicit nil

### UnsetCompletedAt
`func (o *PayoutResponse) UnsetCompletedAt()`

UnsetCompletedAt ensures that no value is present for CompletedAt, not even an explicit nil
### GetFailedAt

`func (o *PayoutResponse) GetFailedAt() string`

GetFailedAt returns the FailedAt field if non-nil, zero value otherwise.

### GetFailedAtOk

`func (o *PayoutResponse) GetFailedAtOk() (*string, bool)`

GetFailedAtOk returns a tuple with the FailedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedAt

`func (o *PayoutResponse) SetFailedAt(v string)`

SetFailedAt sets FailedAt field to given value.

### HasFailedAt

`func (o *PayoutResponse) HasFailedAt() bool`

HasFailedAt returns a boolean if a field has been set.

### SetFailedAtNil

`func (o *PayoutResponse) SetFailedAtNil(b bool)`

 SetFailedAtNil sets the value for FailedAt to be an explicit nil

### UnsetFailedAt
`func (o *PayoutResponse) UnsetFailedAt()`

UnsetFailedAt ensures that no value is present for FailedAt, not even an explicit nil
### GetFailureCode

`func (o *PayoutResponse) GetFailureCode() string`

GetFailureCode returns the FailureCode field if non-nil, zero value otherwise.

### GetFailureCodeOk

`func (o *PayoutResponse) GetFailureCodeOk() (*string, bool)`

GetFailureCodeOk returns a tuple with the FailureCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailureCode

`func (o *PayoutResponse) SetFailureCode(v string)`

SetFailureCode sets FailureCode field to given value.

### HasFailureCode

`func (o *PayoutResponse) HasFailureCode() bool`

HasFailureCode returns a boolean if a field has been set.

### SetFailureCodeNil

`func (o *PayoutResponse) SetFailureCodeNil(b bool)`

 SetFailureCodeNil sets the value for FailureCode to be an explicit nil

### UnsetFailureCode
`func (o *PayoutResponse) UnsetFailureCode()`

UnsetFailureCode ensures that no value is present for FailureCode, not even an explicit nil
### GetFailureMessage

`func (o *PayoutResponse) GetFailureMessage() string`

GetFailureMessage returns the FailureMessage field if non-nil, zero value otherwise.

### GetFailureMessageOk

`func (o *PayoutResponse) GetFailureMessageOk() (*string, bool)`

GetFailureMessageOk returns a tuple with the FailureMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailureMessage

`func (o *PayoutResponse) SetFailureMessage(v string)`

SetFailureMessage sets FailureMessage field to given value.

### HasFailureMessage

`func (o *PayoutResponse) HasFailureMessage() bool`

HasFailureMessage returns a boolean if a field has been set.

### SetFailureMessageNil

`func (o *PayoutResponse) SetFailureMessageNil(b bool)`

 SetFailureMessageNil sets the value for FailureMessage to be an explicit nil

### UnsetFailureMessage
`func (o *PayoutResponse) UnsetFailureMessage()`

UnsetFailureMessage ensures that no value is present for FailureMessage, not even an explicit nil
### GetLivemode

`func (o *PayoutResponse) GetLivemode() bool`

GetLivemode returns the Livemode field if non-nil, zero value otherwise.

### GetLivemodeOk

`func (o *PayoutResponse) GetLivemodeOk() (*bool, bool)`

GetLivemodeOk returns a tuple with the Livemode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLivemode

`func (o *PayoutResponse) SetLivemode(v bool)`

SetLivemode sets Livemode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


