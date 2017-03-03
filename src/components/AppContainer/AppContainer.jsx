import React from 'react';
import Header from 'components/Header/Header';
import styles from './AppContainer.sass';

export default class AppContainer extends React.Component {
  render() {
    return (
      <div className={styles.appBackground}>
        <div className={styles.appContainer}>
          <Header title="Email Signatures" />

          {this.props.children}
        </div>
      </div>
    );
  }
};