import React from 'react';
import styles from './Button.sass';

export default class Button extends React.Component {
  render() {
    let style = this.props.theme == 'inverted' ? 
      styles.btnInverted :
      styles.btn;

    return (
      <a onClick={this.props.onClick} className={style}>{this.props.children}</a>
    );
  }
};