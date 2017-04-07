import React from 'react';
import styles from '../Input.sass';

const TextInput = ({ name, value, onChange }) => (
  <input
    type="text"
    className={styles.input}
    name={name}
    value={value}
    onChange={onChange}
  />
);

TextInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  value: '',
};

export default TextInput;
