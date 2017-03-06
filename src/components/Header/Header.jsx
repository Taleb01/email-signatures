import React from 'react';
import styles from './Header.sass';

const Header = ({ title }) =>
  <header className={styles.header}>
    <a href="/">
      {title} @ <span className="logo">jampp</span>
    </a>
  </header>;

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Header;
