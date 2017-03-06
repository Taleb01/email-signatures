import React from 'react';
import OptionsInput from './OptionsInput/OptionsInput';
import TextInput from './TextInput/TextInput';
import styles from './Input.sass';

const Input = ({ label, name, value, onChange, options }) => {
  const input = options.url ?
    (
      <OptionsInput
        value={value}
        name={name}
        onChange={onChange}
        matchOptionToTerm={options.matchOptionToTerm}
        url={options.url}
      />
    ) : (
      <TextInput
        value={value}
        name={name}
        onChange={onChange}
      />
    );

  return (
    <div className={styles.textInput}>
      <label htmlFor="user">{label}</label>
      {input}
    </div>
  );
};

Input.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired,
  options: React.PropTypes.shape({
    matchOptionToTerm: React.PropTypes.func,
    url: React.PropTypes.string,
  }),
};

Input.defaultProps = {
  value: '',
  options: {
    matchOptionToTerm: () => {},
    url: '',
  },
};

export default Input;
