import React from 'react';

const TextInput = ({ name, value, onChange }) =>
  <input type="text" name={name} value={value} onChange={onChange} />;

TextInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  value: '',
};

export default TextInput;
