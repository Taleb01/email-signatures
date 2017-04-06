/* eslint-disable */

const Layout = {
  renderPhoto: photo => {
    if (photo) {
      return `
        <td style="border: none; width: 104px; max-width: 104px">
          <table border="1" style="font-family: Arial, Serif; width: 100%; max-width: 100px; float:left; padding:0px 5px; border-width: 0px;">
            <tr style="border: none;">
              <td style="border: none; text-align: center;">           
                <img style="width: 90px; height: 90px; border-radius: 50%;" src="${photo}" />
              </td>
            </tr>
            <tr style="border: none;">
              <td style="height: 5px; width: 100%; border: none;"></td>
            </tr>
            <tr style="border: none; text-align: center;">
              <td style="border: none;">           
                <img style="width: 60px; height: 20px; margin-top: 5px" src="https://s3.amazonaws.com/creatives.jampp.com/assets/1/120x40_Lc7bGjDqEH1cvpErp0iFmw.png" />
              </td>
            </tr>
          </table>
        </td>
      `;
    }

    return '';
  },
  renderPhone: phone => {
    if (phone) {
      return `
        <tr style=" border: none;">
          <td style="margin: 0px; font-family: Roboto, Arial, Serif; font-size: 10pt; font-weight: bold;  border: none; ">
            <span style="color: #373965;">${phone}</span>
          </td>
        </tr>
        <tr>
          <td style="border: none; width: 100%; height: 5px"></td>
        </tr>
      `;
    }

    return '';
  },
  renderSkype: skype => {
    if (skype) {
      return `
        <tr style=" border: none;">
          <td style="margin: 0px; font-family: Roboto, Arial, Serif; font-size: 10pt;  border: none; ">
            <span style="color: #373965;">Skype: </span> <span style="font-weight: bold; color: #373965;"><a href="skype:${skype}">${skype}</a></span>
          </td>
        </tr>
        <tr>
          <td style="border: none; width: 100%; height: 5px"></td>
        </tr>
      `;
    }

    return '';
  },
  renderSocialIcons: (facebook, linkedin, twitter, photo) => {
    if (facebook || linkedin || twitter || photo === '') {
      return `
        <tr style="border: none;">
          <td style="margin: 0px; border: none; padding-top: 6px;">
            ${Layout.renderSocialIcon(facebook, 'https://s3.amazonaws.com/creatives.jampp.com/assets/1/36x36_zapNgIVbbozH1jdSkJJ-wQ.png')}
            ${Layout.renderSocialIcon(linkedin, 'https://s3.amazonaws.com/creatives.jampp.com/assets/1/36x36_IX1BSlphrY4WbZd1XH4jzw.png')}
            ${Layout.renderSocialIcon(twitter, 'https://s3.amazonaws.com/creatives.jampp.com/assets/1/36x36_tZ2xOHsvMRhGjY2tG6aYkg.png')}

            ${Layout.renderLogo(photo)}
          </td>
        </tr>
        <tr>
          <td style="border: none; width: 100%; height: 5px">
          </td>
        </tr>
      `;
    }

    return '';
  },
  renderSocialIcon: (link, icon) => {
    if (link) {
      return `
        <a target="_blank" href=${link}><img style="max-width: 20px; float: left; margin-right: 10px;" src="${icon}" /></a>
      `;
    }

    return '';
  },
  renderLogo: photo => {
    if (photo === '') {
      return `
        <a target="_blank" href="http://www.jampp.com"><img style="max-width: 60px;" src="https://s3.amazonaws.com/creatives.jampp.com/assets/1/120x40_Lc7bGjDqEH1cvpErp0iFmw.png" /></a>
      `;
    }

    return '';
  },
  renderLine: line => {
    if (line) {
      return `
        <tr style="border: none;">
          <td style="height: 5px; width: 100%; border: none;"></td>
        </tr>
        <tr style="border: none;">
          <td style="margin: 0px; font-size: 9pt;  border: none; font-family: Roboto, Arial, Serif;">
            <span style="color: #373965;">${line}</span>
          </td>
        </tr>
      `;
    }

    return '';
  },
  getBorderLeftWith: photo => photo !== '' ? '1px': '0px',
  render: ({
    name,
    photo,
    position,
    phone,
    skype,
    facebook,
    linkedin,
    twitter,
    line,
  }) => `
    <link href="http://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />

    <table border="0" style="width: 100%; max-width: 100%; height: 136px;">
      <tr style="border: none; width: 100%; max-width: 100%">
        ${Layout.renderPhoto(photo)}
        <td style="border: none; width: 100%; max-width: 300px">
          <table border="1" style="font-family: Roboto, Arial, Serif; width: 100%; max-width: 300px; height: 136px; float:left; border-width: 0px; border-color: #373965; border-left-width: ${Layout.getBorderLeftWith(photo)};">
            <tr style="border: none;">
              <td style="border: none;">
                <table style="border-color: #373965; border-width: 0px; padding-left: 10px;" border="1" width="100%" cellspacing="0" cellpadding="2">
                  <tbody>
                    <tr style="border: none;">
                      <td style="margin: 0px; font-family: Roboto, Arial, Serif; font-size: 11pt; font-weight: bold;  border: none; ">
                        <span style="color: #373965;">${name}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="border: none; width: 100%; height: 5px"></td>
                    </tr>
                    <tr style=" border: none;">
                      <td style="margin: 0px; font-family: Roboto, Arial, Serif; font-size: 10pt;  font-weight: 100; border: none;">
                        <span style="color: #373965;">${position}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="border: none; width: 100%; height: 4px">
                        <img alt="px" src="https://pixel-geo.prfct.co/sseg?add=1524681&source=js_tag&a_id=11615" width="1" height="1" border="0" />
                      </td>
                    </tr>
                    ${Layout.renderPhone(phone)}
                    ${Layout.renderSkype(skype)}
                    ${Layout.renderSocialIcons(facebook, linkedin, twitter, photo)}
                    ${Layout.renderLine(line)}
                  </tbody>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `,
};

export default Layout;
