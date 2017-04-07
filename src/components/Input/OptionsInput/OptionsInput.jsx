import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './OptionsInput.css';

class OptionsInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      options: this.props.options,
    };

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

  componentDidMount() {
    
  }

  render() {
    if (this.props.options.length > 0) {
      return (
        <Select
          name={this.props.name}
          value={this.state.value}
          labelKey="name"
          placeholder=""
          onChange={this.handleInputSelect}
          options={this.state.options}
        />
      );
    } else {
      return (
        <Select.Async
          name={this.props.name}
          value={this.state.value}
          labelKey="name"
          placeholder=""
          onChange={this.handleInputSelect}
          loadOptions={getOptions}
        />
      );
    }
  }
}

OptionsInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  url: React.PropTypes.string,
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
  })),
};

OptionsInput.defaultProps = {
  url: '',
  options: [],
};

export default OptionsInput;
