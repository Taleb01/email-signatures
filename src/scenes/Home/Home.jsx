import React from 'react';
import AppContainer from 'components/AppContainer/AppContainer';
import Steps from 'components/Steps/Steps';
import Step from 'components/Steps/Step/Step';
import Input from 'components/Input/Input';
import EmailSignature from 'components/EmailSignature/EmailSignature';

import jamppersList from 'data/jamppers.json';
import positionsList from 'data/positions.json';
import lineOptionsList from 'data/lines.json';

import styles from './Home.sass';


export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleFormValidate = this.handleFormValidate.bind(this);
    this.handleStepChange = this.handleStepChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      name: '',
      photo: '',
      position: '',
      phone: '',
      skype: '',
      facebook: '',
      linkedin: '',
      twitter: '',
      line: '',
      validInputs: [],
    };
  }

  handleFormValidate(inputs) {
    if (inputs.length > 0) {
      return inputs
        .filter(input => input.props.required &&
          this.state.validInputs.indexOf(input.props.name) === -1)
        .length === 0;
    }

    return true;
  }

  handleStepChange(from, to) {
    const buildPhotoUrl = name => `http://jampp.com/assets/images/team-members/${name}-1.jpg`;

    const stepActions = {
      2: () => {
        const chosenJampper = jamppersList.find(jampper => jampper.name === this.state.name);

        if (chosenJampper) {
          this.setState({
            photo: buildPhotoUrl(chosenJampper.image),
          });

          this.handleInputValidate('photo', true);
        }
      },
      3: () => {
        if (this.state.line !== '') {
          const chosenLine = lineOptionsList.find(line => line.name === this.state.line);

          if (chosenLine) {
            this.setState({
              line: chosenLine.value,
            });

            this.handleInputValidate('line', true);
          }
        }
      },
    };

    if (typeof stepActions[to] !== 'undefined') stepActions[to]();
  }

  handleInputValidate(name, isValid) {
    const validInputs = this.state.validInputs;
    const indexValidInput = validInputs.indexOf(name);

    if (isValid && indexValidInput === -1) {
      validInputs.push(name);
    } else if (!isValid) {
      validInputs.splice(indexValidInput, 1);
    }

    this.setState({ validInputs });
  }

  handleInputChange(event, isRequired) {
    if (isRequired) {
      this.handleInputValidate(event.target.name, event.target.value !== '');
    }

    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const userOptionsInput = {
      options: jamppersList,
      matchOptionToTerm: (option, value) => option.name.toLowerCase().indexOf(value.toLowerCase())
      !== -1,
    };

    const positionOptionsInput = {
      options: positionsList,
      matchOptionToTerm: (option, value) => option.name.toLowerCase().indexOf(value.toLowerCase())
      !== -1,
    };

    const lineOptionsInput = {
      options: lineOptionsList,
      matchOptionToTerm: (option, value) => option.name.toLowerCase().indexOf(value.toLowerCase())
      !== -1,
    };

    return (
      <AppContainer>
        <Steps
          onChange={this.handleStepChange}
          onValidate={this.handleFormValidate}
        >
          <Step
            nextButton="What else?"
            text="Hey! I will create your <strong>email signature</strong> for you, but first,
            let me know a little more about you..."
          >
            <Input
              value={this.state.name}
              name="name"
              label="Who are you?"
              options={userOptionsInput}
              onChange={this.handleInputChange}
              required
            />

            <Input
              value={this.state.position}
              name="position"
              label="What are you?"
              options={positionOptionsInput}
              onChange={this.handleInputChange}
              required
            />
          </Step>

          <Step
            prevButton="Let me pick my name again"
            nextButton="Shut up and give me my signature"
            text={`Cool <strong>${this.state.name}</strong>! Nice name ;) I did a little research
            <small>(?)</small> and found this info, feel free to edit anything you like.<br>
            Note that you can uncheck the fields you don’t want to include on your signature.`}
          >
            <Input
              value={this.state.name}
              name="name"
              label="What's your name?"
              onChange={this.handleInputChange}
              required
            />

            <Input
              value={this.state.position}
              name="position"
              label="What do you do at Jampp?"
              onChange={this.handleInputChange}
              required
            />

            <Input
              value={this.state.photo}
              name="photo"
              label="Paste a photo link as you wanna look"
              onChange={this.handleInputChange}
              required
            />

            <Input
              value={this.state.phone}
              name="phone"
              label="What's your phone number?"
              onChange={this.handleInputChange}
            />

            <Input
              value={this.state.skype}
              name="skype"
              label="What's your Skype account?"
              onChange={this.handleInputChange}
            />

            <Input
              value={this.state.facebook}
              name="facebook"
              label="Paste your Facebook link"
              disabledValue="https://www.facebook.com/jamppHQ/"
              onChange={this.handleInputChange}
              required
            />

            <Input
              value={this.state.linkedin}
              name="linkedin"
              label="Paste your LinkedIn link"
              disabledValue="https://www.linkedin.com/company/jampp"
              onChange={this.handleInputChange}
              required
            />

            <Input
              value={this.state.twitter}
              name="twitter"
              label="Paste your Twitter link"
              disabledValue="https://twitter.com/jampp"
              onChange={this.handleInputChange}
              required
            />

            <Input
              value={this.state.line}
              name="line"
              label="Add a line promoting our awesome company"
              options={lineOptionsInput}
              onChange={this.handleInputChange}
              required
            />
          </Step>

          <Step
            prevButton="Let me fill my data again"
            text="Well, here is the <em>sexiest email signature ever</em><br>
            Let me walk you through the next steps... it’s really simple:<br>
            <b>1</b>. Select the text and copy it (⌘+C)<br>
            <b>2</b>. <a target='_blank' href='https://mail.google.com/mail/u/0/#settings/general'><u>Click here</u></a><br>
            <b>3</b>. Go to signature and paste (⌘+V)<br>
            <em>Voilá!</em>"
          >
            <div className={styles.emailSignatureContainer}>
              <EmailSignature {...this.state} />
            </div>
          </Step>
        </Steps>
      </AppContainer>
    );
  }
}
