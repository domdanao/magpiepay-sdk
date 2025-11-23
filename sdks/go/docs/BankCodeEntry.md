# BankCodeEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | **string** |  | 
**Name** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewBankCodeEntry

`func NewBankCodeEntry(code string, ) *BankCodeEntry`

NewBankCodeEntry instantiates a new BankCodeEntry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBankCodeEntryWithDefaults

`func NewBankCodeEntryWithDefaults() *BankCodeEntry`

NewBankCodeEntryWithDefaults instantiates a new BankCodeEntry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *BankCodeEntry) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *BankCodeEntry) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *BankCodeEntry) SetCode(v string)`

SetCode sets Code field to given value.


### GetName

`func (o *BankCodeEntry) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BankCodeEntry) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BankCodeEntry) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *BankCodeEntry) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *BankCodeEntry) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *BankCodeEntry) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


