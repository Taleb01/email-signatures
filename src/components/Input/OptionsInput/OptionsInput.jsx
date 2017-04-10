import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './OptionsInput.css';

class OptionsInput extends React.Component {
  constructor(props) {
    super(props);

    let value = '';

    if (props.value !== '') {
      value = props.options.find(option => option.name === props.value);
    }

    this.state = { value };

    this.handleInputSelect = this.handleInputSelect.bind(this);
  }

  handleInputSelect(value) {
    this.setState({ value });

    this.props.onChange({
      target: {
        name: this.props.name,
        value: value ? value.name : '',
      },
    });
  }

  render() {
    return (
      <Select
        name={this.props.name}
        value={this.state.value}
        labelKey="name"
        placeholder=""
        onChange={this.handleInputSelect}
        options={this.props.options}
      />
    );
  }
}

OptionsInput.propTypes = {
  value: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
  })).isRequired,
};

export default OptionsInput;
