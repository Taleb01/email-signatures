import React from 'react';
import Layout from './Layout';

import styles from './EmailSignature.sass';

const EmailSignature = props => (
  <div
    className={styles.signatureContainer}
    dangerouslySetInnerHTML={{ __html: Layout.render(props) }}
  />
);

EmailSignature.propTypes = {
  name: React.PropTypes.string,
  photo: React.PropTypes.string,
  position: React.PropTypes.string,
  phone: React.PropTypes.string,
  skype: React.PropTypes.string,
  facebook: React.PropTypes.string,
  linkedin: React.PropTypes.string,
  twitter: React.PropTypes.string,
  line: React.PropTypes.string,
};

EmailSignature.defaultProps = {
  name: '',
  photo: '',
  position: '',
  phone: '',
  skype: '',
  facebook: '',
  linkedin: '',
  twitter: '',
  line: '',
};

export default EmailSignature;
