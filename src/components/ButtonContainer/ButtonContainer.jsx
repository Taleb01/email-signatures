import React from 'react';
import styles from './ButtonContainer.sass';

const ButtonContainer = ({ children }) =>
  <div className={styles.btnContainer}>{children}</div>;

ButtonContainer.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default ButtonContainer;
