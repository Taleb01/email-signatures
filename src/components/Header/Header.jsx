import React from 'react';
import styles from './Header.sass';

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <a href="#">
          {this.props.title} @ <span className="logo">jampp</span>
        </a>
      </header>
    );
  }
};