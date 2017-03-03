import React from 'react';
import OptionsInput from './OptionsInput/OptionsInput';
import TextInput from './TextInput/TextInput';
import styles from './Input.sass';

export default class Input extends React.Component {
  render() {
    const input = this.props.options ?
      <OptionsInput /> :
      <TextInput />;

    return (
      <div className={styles.textInput}>
        <label>{this.props.label}</label>
        {input}
      </div>
    );
  }
};