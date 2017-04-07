import React from 'react';
import OptionsInput from './OptionsInput/OptionsInput';
import TextInput from './TextInput/TextInput';
import styles from './Input.sass';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: true,
    };

    this.handleOptionalLabelChange = this.handleOptionalLabelChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.onChange(event, this.props.required);
  }

  handleOptionalLabelChange() {
    if (this.state.enabled) {
      this.backupText = this.props.value;
    }

    this.handleInputChange({
      target: {
        name: this.props.name,
        value: this.state.enabled ? this.props.disabledValue : this.backupText,
      },
    });

    this.setState({
      enabled: !this.state.enabled,
    });
  }

  render() {
    const input = (this.props.options.url !== '' || this.props.options.options.length > 0) ?
      (
        <OptionsInput
          value={this.props.value}
          name={this.props.name}
          onChange={this.handleInputChange}
          matchOptionToTerm={this.props.options.matchOptionToTerm}
          url={this.props.options.url}
          options={this.props.options.options}
        />
      ) : (
        <TextInput
          value={this.props.value}
          name={this.props.name}
          onChange={this.handleInputChange}
        />
      );

    const inputContainerStyle = this.state.enabled ?
      styles.inputContainer :
      styles.inputContainerDisabled;

    const optionalLabelStyle = this.state.enabled ?
      styles.optionalLabelActive :
      styles.optionalLabel;

    const requiredLabel = this.props.required ? (<sup><strong>*</strong></sup>) : null;

    const optionalLabel = this.props.disabledValue ?
      (
        <button
          className={optionalLabelStyle}
          onClick={this.handleOptionalLabelChange}
        ><span /></button>
      ) : null;

    return (
      <div className={inputContainerStyle}>
        <label className="label" htmlFor="user">{this.props.label} {requiredLabel}</label>
        <div className={styles.inputWrapper}>
          {input}
          {optionalLabel}
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  name: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired,
  disabledValue: React.PropTypes.string,
  options: React.PropTypes.shape({
    matchOptionToTerm: React.PropTypes.func,
    url: React.PropTypes.string,
    options: React.PropTypes.array,
  }),
};

Input.defaultProps = {
  required: false,
  value: '',
  disabledValue: '',
  options: {
    matchOptionToTerm: () => {},
    url: '',
    options: [],
  },
};

export default Input;
