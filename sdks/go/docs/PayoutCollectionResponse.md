# PayoutCollectionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | [**[]PayoutResponse**](PayoutResponse.md) |  | 
**Limit** | **int32** |  | 
**NextCursor** | **string** |  | 

## Methods

### NewPayoutCollectionResponse

`func NewPayoutCollectionResponse(data []PayoutResponse, limit int32, nextCursor string, ) *PayoutCollectionResponse`

NewPayoutCollectionResponse instantiates a new PayoutCollectionResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPayoutCollectionResponseWithDefaults

`func NewPayoutCollectionResponseWithDefaults() *PayoutCollectionResponse`

NewPayoutCollectionResponseWithDefaults instantiates a new PayoutCollectionResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *PayoutCollectionResponse) GetData() []PayoutResponse`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *PayoutCollectionResponse) GetDataOk() (*[]PayoutResponse, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *PayoutCollectionResponse) SetData(v []PayoutResponse)`

SetData sets Data field to given value.


### GetLimit

`func (o *PayoutCollectionResponse) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *PayoutCollectionResponse) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *PayoutCollectionResponse) SetLimit(v int32)`

SetLimit sets Limit field to given value.


### GetNextCursor

`func (o *PayoutCollectionResponse) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *PayoutCollectionResponse) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *PayoutCollectionResponse) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


