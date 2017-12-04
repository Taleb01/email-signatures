/* eslint-disable */

const Layout = {
  renderPhoto: photo => {
    if (photo) {
      return `
        <td width="90" style="text-align: center; padding-right: 10px">
          <table border="0" cellspacing="0" cellpadding="0" width="100%">
            <tr>
              <td>
                <img width="90" height="90" alt="" style="width: 90px; height: 90px; border-radius: 50%; object-fit: cover;" src="${photo}" />
              </td>
            </tr>
            ${Layout.renderSpace(5)}
            <tr>
              <td>
                <a target="_blank" href="http://www.jampp.com" style="text-align: center">
                  <img width="60" height="20" alt="" src="https://s3.amazonaws.com/creatives.jampp.com/assets/1/120x40_Lc7bGjDqEH1cvpErp0iFmw.png" />
                </a>
              </td>
            </tr>
          </table>
        </td>
      `;
    }

    return '';
  },
  renderSpace: amount => `
    <tr>
      <td style="width: 100%; font-size: 0; line-height: 0; height: ${amount}px">&nbsp;</td>
    </tr>
  `,
  renderPhone: phone => {
    if (phone) {
      return `
        <tr>
          <td style="font-family: Roboto, Arial, sans-serif;font-size: 10pt; font-weight: bold; color:#373965">${phone}</td>
        </tr>
        ${Layout.renderSpace(5)}
      `;
    }

    return '';
  },
  renderSkype: skype => {
    if (skype) {
      return `
        <tr style="border: none">
          <td style="font-family: Roboto, Arial, sans-serif;font-size: 10pt; color:#373965">Skype: <a style="font-weight: bold" href="skype:${skype}">${skype}</a></td>
        </tr>
        ${Layout.renderSpace(5)}
      `;
    }

    return '';
  },
  renderSocialIcons: (facebook, linkedin, twitter, photo) => {
    if (facebook || linkedin || twitter || photo === '') {
      return `
        <tr>
          <td valign="bottom" style="padding-top:5px;">
            ${Layout.renderSocialIcon(facebook, 'https://s3.amazonaws.com/creatives.jampp.com/assets/1/36x36_zapNgIVbbozH1jdSkJJ-wQ.png')}
            ${Layout.renderSocialIcon(linkedin, 'https://s3.amazonaws.com/creatives.jampp.com/assets/1/36x36_IX1BSlphrY4WbZd1XH4jzw.png')}
            ${Layout.renderSocialIcon(twitter, 'https://s3.amazonaws.com/creatives.jampp.com/assets/1/36x36_tZ2xOHsvMRhGjY2tG6aYkg.png')}

            ${Layout.renderLogo(photo)}
          </td>
        </tr>
        ${Layout.renderSpace(5)}
      `;
    }

    return '';
  },
  renderSocialIcon: (link, icon) => {
    if (link) {
      return `
        <a style="padding-right:8px;" target="_blank" href="${link}"><img src="${icon}" width="20" height="20" alt="" /></a>
      `;
    }

    return '';
  },
  renderLogo: photo => {
    if (photo === '') {
      return `
        <a target="_blank" href="http://www.jampp.com"><img src="https://s3.amazonaws.com/creatives.jampp.com/assets/1/120x40_Lc7bGjDqEH1cvpErp0iFmw.png" width="60" height="20" alt="" /></a>
      `;
    }

    return '';
  },
  renderPixel: () => `
    <img alt="px" src="https://pixel-geo.prfct.co/sseg?add=1524681&source=js_tag&a_id=11615" width="1" height="1" border="0" />
  `,
  renderLine: line => {
    if (line) {
      return `
        ${Layout.renderSpace(5)}
        <tr style="border: none">
          <td style="margin: 0px; font-size: 9pt; border: none; font-family: Roboto, Arial, Serif">
            <span style="color: #373965">${line}</span>
          </td>
        </tr>
      `;
    }

    return '';
  },
  getBorderLeftWith: photo => photo !== '' ? 1 : 0,
  getTextContainerPaddingLeft: photo => photo !== '' ? 10 : 0,
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
    <html>
      <style type="text/css">@import url(https://fonts.googleapis.com/css?family=Roboto);</style>

      <table width="466" border="0" cellspacing="0" cellpadding="0" style="font-family: Roboto, Arial, sans-serif;">
        <tbody> 
          <tr>
            ${Layout.renderPhoto(photo)}
          
            <td width="326" style="border-left: ${Layout.getBorderLeftWith(photo)}px solid #373965; padding-left: ${Layout.getTextContainerPaddingLeft(photo)}px">
              <table border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="font-family: Roboto, Arial, sans-serif;font-size: 11pt; font-weight: bold; color:#373965">${name}</td>
                </tr>
                ${Layout.renderSpace(5)}
                <tr>
                  <td style="font-family: Roboto, Arial, sans-serif; font-size: 10pt; font-weight: 300; color:#373965">${position}</td>
                </tr>
                ${Layout.renderSpace(5)}
                ${Layout.renderPhone(phone)}
                ${Layout.renderSkype(skype)}
                ${Layout.renderSocialIcons(facebook, linkedin, twitter, photo)}
                ${Layout.renderLine(line)}
              </table>
            </td>
          </tr>
        </tbody>  
      </table>

      <table border="0" style="width: 100%; max-width: 100%; height: 136px">
        <tr style="border: none">
          <td style="border: none; width: 100%; height: 4px; line-height: 5px">
            ${Layout.renderPixel()}
          </td>
        </tr>
      </table>
    </html>
  `,
};

export default Layout;
