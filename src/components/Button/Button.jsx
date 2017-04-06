import React from 'react';
import styles from './Button.sass';

const Button = ({ theme, onClick, children }) => {
  let btnStyle = styles.btn;

  if (theme === 'inverted') btnStyle += ` ${styles.btnInverted}`;
  if (theme === 'disabled') btnStyle += ` ${styles.btnDisabled}`;

  return <button type="button" onClick={onClick} className={btnStyle}>{children}</button>;
};

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  theme: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

Button.defaultProps = {
  theme: '',
  onClick: () => {},
};

export default Button;
