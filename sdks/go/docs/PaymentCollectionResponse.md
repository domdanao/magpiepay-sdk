# PaymentCollectionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | [**[]PaymentResponse**](PaymentResponse.md) |  | 
**Limit** | **int32** |  | 
**NextCursor** | **string** |  | 

## Methods

### NewPaymentCollectionResponse

`func NewPaymentCollectionResponse(data []PaymentResponse, limit int32, nextCursor string, ) *PaymentCollectionResponse`

NewPaymentCollectionResponse instantiates a new PaymentCollectionResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentCollectionResponseWithDefaults

`func NewPaymentCollectionResponseWithDefaults() *PaymentCollectionResponse`

NewPaymentCollectionResponseWithDefaults instantiates a new PaymentCollectionResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *PaymentCollectionResponse) GetData() []PaymentResponse`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *PaymentCollectionResponse) GetDataOk() (*[]PaymentResponse, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *PaymentCollectionResponse) SetData(v []PaymentResponse)`

SetData sets Data field to given value.


### GetLimit

`func (o *PaymentCollectionResponse) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *PaymentCollectionResponse) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *PaymentCollectionResponse) SetLimit(v int32)`

SetLimit sets Limit field to given value.


### GetNextCursor

`func (o *PaymentCollectionResponse) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *PaymentCollectionResponse) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *PaymentCollectionResponse) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


