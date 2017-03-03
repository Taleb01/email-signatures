import React from 'react';
import styles from './ButtonContainer.sass';

export default class ButtonContainer extends React.Component {
  render() {
    return (
      <div className={styles.btnContainer}>{this.props.children}</div>
    );
  }
};