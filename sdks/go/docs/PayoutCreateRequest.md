# PayoutCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReferenceId** | **string** | Client-provided reference for the payout. | 
**Channel** | **string** | Channel to use for the payout. | 
**Amount** | **int32** | Amount in centavos. | 
**SourceAccountId** | **string** | Org bank account ID to debit. | 
**Destination** | [**PayoutDestination**](PayoutDestination.md) | Destination account details. | 
**Purpose** | Pointer to **NullableString** |  | [optional] 
**Metadata** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewPayoutCreateRequest

`func NewPayoutCreateRequest(referenceId string, channel string, amount int32, sourceAccountId string, destination PayoutDestination, ) *PayoutCreateRequest`

NewPayoutCreateRequest instantiates a new PayoutCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPayoutCreateRequestWithDefaults

`func NewPayoutCreateRequestWithDefaults() *PayoutCreateRequest`

NewPayoutCreateRequestWithDefaults instantiates a new PayoutCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReferenceId

`func (o *PayoutCreateRequest) GetReferenceId() string`

GetReferenceId returns the ReferenceId field if non-nil, zero value otherwise.

### GetReferenceIdOk

`func (o *PayoutCreateRequest) GetReferenceIdOk() (*string, bool)`

GetReferenceIdOk returns a tuple with the ReferenceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceId

`func (o *PayoutCreateRequest) SetReferenceId(v string)`

SetReferenceId sets ReferenceId field to given value.


### GetChannel

`func (o *PayoutCreateRequest) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *PayoutCreateRequest) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *PayoutCreateRequest) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetAmount

`func (o *PayoutCreateRequest) GetAmount() int32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PayoutCreateRequest) GetAmountOk() (*int32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PayoutCreateRequest) SetAmount(v int32)`

SetAmount sets Amount field to given value.


### GetSourceAccountId

`func (o *PayoutCreateRequest) GetSourceAccountId() string`

GetSourceAccountId returns the SourceAccountId field if non-nil, zero value otherwise.

### GetSourceAccountIdOk

`func (o *PayoutCreateRequest) GetSourceAccountIdOk() (*string, bool)`

GetSourceAccountIdOk returns a tuple with the SourceAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceAccountId

`func (o *PayoutCreateRequest) SetSourceAccountId(v string)`

SetSourceAccountId sets SourceAccountId field to given value.


### GetDestination

`func (o *PayoutCreateRequest) GetDestination() PayoutDestination`

GetDestination returns the Destination field if non-nil, zero value otherwise.

### GetDestinationOk

`func (o *PayoutCreateRequest) GetDestinationOk() (*PayoutDestination, bool)`

GetDestinationOk returns a tuple with the Destination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestination

`func (o *PayoutCreateRequest) SetDestination(v PayoutDestination)`

SetDestination sets Destination field to given value.


### GetPurpose

`func (o *PayoutCreateRequest) GetPurpose() string`

GetPurpose returns the Purpose field if non-nil, zero value otherwise.

### GetPurposeOk

`func (o *PayoutCreateRequest) GetPurposeOk() (*string, bool)`

GetPurposeOk returns a tuple with the Purpose field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurpose

`func (o *PayoutCreateRequest) SetPurpose(v string)`

SetPurpose sets Purpose field to given value.

### HasPurpose

`func (o *PayoutCreateRequest) HasPurpose() bool`

HasPurpose returns a boolean if a field has been set.

### SetPurposeNil

`func (o *PayoutCreateRequest) SetPurposeNil(b bool)`

 SetPurposeNil sets the value for Purpose to be an explicit nil

### UnsetPurpose
`func (o *PayoutCreateRequest) UnsetPurpose()`

UnsetPurpose ensures that no value is present for Purpose, not even an explicit nil
### GetMetadata

`func (o *PayoutCreateRequest) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *PayoutCreateRequest) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *PayoutCreateRequest) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *PayoutCreateRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *PayoutCreateRequest) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *PayoutCreateRequest) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


