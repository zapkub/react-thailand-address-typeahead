// @flow
import { compose, withState, withProps, lifecycle, defaultProps } from 'recompose';
import React, { Component } from 'react';

import Typeahead from './Typeahead.component';
import { resolveResultbyField } from './finder';


type AddressInputType = {
  // local state
  searchStr: string;
  option: string[];

  // external props
  fieldType: string;
  value: string;
  onOptionSelected: (option: any) => void;
  renderResult: (data: any) => React.Component;
}
const AddressTypeaheadComponent = (props: AddressInputType) => {
  const { searchStr, setSearchStr, fieldType, options } = props;
  if (!fieldType) {
    console.warn('No field type provide');
    return <div />;
  }
  return (
    <Typeahead
      displayOption={props.renderResult}
      filterOption={fieldType}
      options={options}
      maxVisible={5}
      value={searchStr}
      onChange={e => setSearchStr(e.target.value)}
      onOptionSelected={option => props.onOptionSelected(option)}
    />
  );
};

const AddressTypeahead: Component<AddressInputType> = compose(
  withState('searchStr', 'setSearchStr', ({ value = '' }) => value),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.props.setSearchStr(nextProps.value);
      }
    },
  }),
  withProps(({ searchStr, fieldType }) => ({
    options: resolveResultbyField(fieldType, searchStr),
  })),
  defaultProps(({
    renderResult: data => (
      <span>{`${data.d} » ${data.a} » ${data.p} » `}{data.z || <li>{'ไม่มีรหัสไปรษณีย์'}</li>}</span>
    ),
    value: '',
  })),
)(AddressTypeaheadComponent);

export default AddressTypeahead;
