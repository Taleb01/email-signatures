import React from 'react';
import Header from 'components/Header/Header';
import styles from './AppContainer.sass';

const AppContainer = ({ children }) =>
  <div className={styles.appBackground}>
    <div className={styles.appContainer}>
      <Header title="Email Signatures" />

      {children}
    </div>
  </div>;

AppContainer.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default AppContainer;
