import React from 'react';
import styles from './EmailSignature.sass';

const EmailSignature = ({ name, position, phone, skype, facebook, linkedin, twitter }) =>
  <div>
    <div className={styles.photo}>
      <img alt={name} className={styles.person} src="http://jampp.com/assets/images/team-members/Teo-1.jpg" />
      <img alt="Jampp" className={styles.logo} src="https://s3.amazonaws.com/creatives.jampp.com/assets/1/120x40_Lc7bGjDqEH1cvpErp0iFmw.png" />
    </div>

    <div className={styles.data}>
      <h1>{name}</h1>
      <h2>{position}</h2>

      {phone !== '' ? (
        <p><strong>{phone}</strong></p>
      ) : null }

      {skype !== '' ? (
        <p>Skype: <a href="@teodeexactas">{skype}</a></p>
      ) : null }

      <p><a href="http://jampp.com">www.jampp.com</a></p>

      <div className={styles.social}>
        {facebook !== '' ? (
          <a href={facebook}>
            <img alt="Facebook" src="https://s3.amazonaws.com/creatives.jampp.com/assets/1/36x36_zapNgIVbbozH1jdSkJJ-wQ.png" />
          </a>
        ) : null }

        {linkedin !== '' ? (
          <a href={linkedin}>
            <img alt="LinkedIn" src="https://s3.amazonaws.com/creatives.jampp.com/assets/1/36x36_IX1BSlphrY4WbZd1XH4jzw.png" />
          </a>
        ) : null }

        {twitter !== '' ? (
          <a href={twitter}>
            <img alt="Twitter" src="https://s3.amazonaws.com/creatives.jampp.com/assets/1/36x36_tZ2xOHsvMRhGjY2tG6aYkg.png" />
          </a>
        ) : null }
      </div>
    </div>
  </div>;

EmailSignature.propTypes = {
  name: React.PropTypes.string,
  position: React.PropTypes.string,
  phone: React.PropTypes.string,
  skype: React.PropTypes.string,
  facebook: React.PropTypes.string,
  linkedin: React.PropTypes.string,
  twitter: React.PropTypes.string,
};

EmailSignature.defaultProps = {
  name: '',
  position: '',
  phone: '',
  skype: '',
  facebook: '',
  linkedin: '',
  twitter: '',
};

export default EmailSignature;
