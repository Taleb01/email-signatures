import React from 'react';
import styles from './EmailSignature.sass';

const EmailSignature = ({
  name,
  photo,
  position,
  phone,
  skype,
  facebook,
  linkedin,
  twitter,
  line,
}) =>
  <div>
    {photo && (
      <div className={styles.picture}>
        <img alt={name} className={styles.person} src={photo} />
        <a href="http://jampp.com">
          <img alt="Jampp" className={styles.logoImage} src="https://s3.amazonaws.com/creatives.jampp.com/assets/1/120x40_Lc7bGjDqEH1cvpErp0iFmw.png" />
        </a>
      </div>
    )}

    <div className={styles.data}>
      <h1>{name}</h1>
      <h2>{position}</h2>

      {phone !== '' && (
        <p><strong>{phone}</strong></p>
      )}

      {skype !== '' && (
        <p>Skype: <a href={`skype:${skype}`}>{skype}</a></p>
      )}

      <div className={styles.social}>
        {facebook !== '' && (
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <img className={styles.socialImage} alt="Facebook" src="https://s3.amazonaws.com/creatives.jampp.com/assets/1/36x36_zapNgIVbbozH1jdSkJJ-wQ.png" />
          </a>
        )}

        {linkedin !== '' && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img className={styles.socialImage} alt="LinkedIn" src="https://s3.amazonaws.com/creatives.jampp.com/assets/1/36x36_IX1BSlphrY4WbZd1XH4jzw.png" />
          </a>
        )}

        {twitter !== '' && (
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <img className={styles.socialImage} alt="Twitter" src="https://s3.amazonaws.com/creatives.jampp.com/assets/1/36x36_tZ2xOHsvMRhGjY2tG6aYkg.png" />
          </a>
        )}

        {photo === '' && (
          <a href="http://jampp.com">
            <img className={styles.logoImage} alt="Jampp" src="https://s3.amazonaws.com/creatives.jampp.com/assets/1/120x40_Lc7bGjDqEH1cvpErp0iFmw.png" />
          </a>
        )}
      </div>

      {line !== '' && (
        <p className={styles.small} dangerouslySetInnerHTML={{ __html: line }} />
      )}
    </div>

    <img alt="px" src="https://pixel-geo.prfct.co/sseg?add=1524681&source=js_tag&a_id=11615" width="1" height="1" border="0" />
  </div>;

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
