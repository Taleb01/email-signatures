/* eslint-disable */

const Layout = {
  renderPhoto: photo => {
    if (photo) {
      return `
        <td class="photo-container" style="border: none; width: 104px; max-width: 104px">
          <table border="1" style="font-family: Arial, Serif; width: 100%; max-width: 100px; float:left; padding:0px 5px; border-width: 0px">
            <tr style="border: none">
              <td style="border: none; text-align: center">
                <img style="width: 90px; height: 90px; border-radius: 50%" src="${photo}" />
              </td>
            </tr>
            ${Layout.renderSpace(5)}
            <tr style="border: none; text-align: center">
              <td style="border: none">
                <a target="_blank" href="http://www.jampp.com">
                  <img style="width: 60px; height: 20px; margin-top: 5px" src="https://s3.amazonaws.com/creatives.jampp.com/assets/1/120x40_Lc7bGjDqEH1cvpErp0iFmw.png" />
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
    <tr style="border: none">
      <td style="border: none; width: 100%; font-size: 0; line-height: 0; height: ${amount}px">&nbsp;</td>
    </tr>
  `,
  renderPhone: phone => {
    if (phone) {
      return `
        <tr style="border: none">
          <td style="margin: 0px; font-family: Roboto, Arial, Serif; font-size: 10pt; font-weight: bold; border: none">
            <span style="color: #373965">${phone}</span>
          </td>
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
          <td style="margin: 0px; font-family: Roboto, Arial, Serif; font-size: 10pt; border: none">
            <span style="color: #373965">Skype: </span> <span style="font-weight: bold; color: #373965"><a href="skype:${skype}">${skype}</a></span>
          </td>
        </tr>
        ${Layout.renderSpace(5)}
      `;
    }

    return '';
  },
  renderSocialIcons: (facebook, linkedin, twitter, photo) => {
    if (facebook || linkedin || twitter || photo === '') {
      return `
        <tr style="border: none">
          <td style="margin: 0px; border: none; padding-top: 6px">
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
        <a target="_blank" href=${link}><img style="max-width: 20px; float: left; margin-right: 10px" src="${icon}" /></a>
      `;
    }

    return '';
  },
  renderLogo: photo => {
    if (photo === '') {
      return `
        <a target="_blank" href="http://www.jampp.com"><img style="max-width: 60px" src="https://s3.amazonaws.com/creatives.jampp.com/assets/1/120x40_Lc7bGjDqEH1cvpErp0iFmw.png" /></a>
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
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="x-apple-disable-message-reformatting">

        <!--[if mso]>
          <style>
            * {
              font-family: sans-serif !important;
            }
          </style>
        <![endif]-->

        <!--[if !mso]><!-->
          <link href="http://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet" type="text/css" />
        <!--<![endif]-->

        <style>
          @media screen and (max-width: 640px) {
            *[class=photo-container] {
              display: none !important;
              max-height: 0 !important;
              max-width: 0 !important;
            }

            *[class=text-container] {
              border-left-width: 0 !important;
            }
          }
        </style>
      </head>

      <body width="100%">
        <table border="0" style="width: 100%; max-width: 100%; height: 136px">
          <tr style="border: none; width: 100%; max-width: 100%">
            ${Layout.renderPhoto(photo)}
            <td style="border: none; width: 100%; max-width: 300px">
              <table class="text-container" border="1" style="font-family: Roboto, Arial, Serif; width: 100%; max-width: 300px; height: 136px; float:left; border-width: 0px; border-color: #373965; border-left-width: ${Layout.getBorderLeftWith(photo)}px">
                <tr style="border: none">
                  <td style="border: none">
                    <table style="border-color: #373965; border-width: 0px; padding-left: 10px" border="1" width="100%" cellspacing="0" cellpadding="2">
                      <tbody>
                        <tr style="border: none">
                          <td style="margin: 0px; font-family: Roboto, Arial, Serif; font-size: 11pt; font-weight: bold; border: none">
                            <span style="color: #373965">${name}</span>
                          </td>
                        </tr>
                        ${Layout.renderSpace(5)}
                        <tr style="border: none">
                          <td style="margin: 0px; font-family: Roboto, Arial, Serif; font-size: 10pt; font-weight: 300; border: none">
                            <span style="color: #373965">${position}</span>
                          </td>
                        </tr>
                        ${Layout.renderSpace(5)}
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
        <table border="0" style="width: 100%; max-width: 100%; height: 136px">
          <tr style="border: none">
            <td style="border: none; width: 100%; height: 4px; line-height: 5px">
              ${Layout.renderPixel()}
            </td>
          </tr>
        </table>
      </body>
  `,
};

export default Layout;
