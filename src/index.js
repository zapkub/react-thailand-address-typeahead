// @flow
import React from 'react';
import { fieldsEnum } from './finder';
import AddressTypeahead from './AddressTypeahead.component';

type AddressFormInputPropType = {
    values: {
        a: string;
        d: string;
        p: string;
        z: string;
    };
    districtLabel: string;
    amphoeLabel: string;
    provinceLabel: string;
    zipcodeLabel: string;
    onAddressSelected: (addresObject) => void;
    renderResult: (data) => React.Component;
}
class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressObj: undefined,
    };
    this.setAddressObj = this.setAddressObj.bind(this);
  }

  setAddressObj(addressObj) {
    this.setState({ addressObj });
  }
  props: AddressFormInputPropType;
  render() {
    const { addressObj } = this.state;
    return (<div>
      {
        Object.keys(fieldsEnum).map((key) => {
          let name;
          switch (fieldsEnum[key]) {
            case 'd': name = this.props.districtLabel || 'ตำบล'; break;
            case 'a': name = this.props.amphoeLabel || 'อำเภอ'; break;
            case 'p': name = this.props.provinceLabel || 'จังหวัด'; break;
            case 'z': name = this.props.zipcodeLabel || 'รหัสไปรษณีย์'; break;
            default: name = ''; break;
          }
          return (
            <div key={key} className="typeahead-address-container">
              <label className="typeahead-address-label" htmlFor="district">{name}</label>
              <AddressTypeahead
                renderResult={this.props.renderResult}
                onOptionSelected={(result) => {
                  this.setAddressObj(result);
                  this.props.onAddressSelected(result);
                }}
                value={addressObj ? addressObj[fieldsEnum[key]] : ''}
                fieldType={fieldsEnum[key]}
              />
            </div>
          );
        })
    }
    </div>);
  }
}

export default AddressForm;
