import React from 'react';
import styles from './Button.sass';

const Button = ({ theme, onClick, children }) => {
  const style = theme === 'inverted' ?
    styles.btnInverted :
    styles.btn;

  return <button type="button" onClick={onClick} className={style}>{children}</button>;
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
