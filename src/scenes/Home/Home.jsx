import React from 'react';
import AppContainer from 'components/AppContainer/AppContainer';
import Steps from 'components/Steps/Steps';
import Step from 'components/Steps/Step/Step';
import Input from 'components/Input/Input';
import EmailSignature from 'components/EmailSignature/EmailSignature';
import axios from 'axios';

const INITIAL_STEP = 3;

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Lucho',
      photo: '',
      position: '',
      phone: '',
      skype: '',
      facebook: '',
      linkedin: '',
      twitter: '',
    };

    this.handleStepChange = this.handleStepChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleStepChange(from) {
    const stepActions = {
      1: () => {
        axios.get('https://jsonplaceholder.typicode.com/users/1').then(response => this.setState({ photo: response.data.username }));
      },
    };

    if (typeof stepActions[from] !== 'undefined') stepActions[from]();
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const userOptionsInput = {
      url: 'https://jsonplaceholder.typicode.com/users',
      matchOptionToTerm: (option, value) => {
        return (
          option.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
          option.username.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
      },
    };

    return (
      <AppContainer>
        <Steps active={INITIAL_STEP} onChange={this.handleStepChange}>
          <Step
            nextButton="What else?"
            text="Hey! I will create your <strong>email signature</strong> for you, but first,
            let me know a bit about you..."
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
              onChange={this.handleInputChange}
              required
            />
          </Step>

          <Step
            prevButton="Let me pick my name again"
            nextButton="Shut up and give me my signature"
            text="Cool <strong>Luciano</strong>! Nice name ;) I made some research
            <small>(?)</small> and I found this data about you.<br>Feel free to update as you want
            and uncheck those that you don’t want to show."
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
              label="Paste your Facebook account"
              onChange={this.handleInputChange}
            />

            <Input
              value={this.state.linkedin}
              name="linkedin"
              label="Paste your LinkedIn account"
              onChange={this.handleInputChange}
            />

            <Input
              value={this.state.twitter}
              name="twitter"
              label="Paste your Twitter account"
              onChange={this.handleInputChange}
            />
          </Step>

          <Step
            prevButton="Let me fill my data again"
            text="Well, here is the <em>sexiest email signature ever</em>. First, you have
            to select them and copy (⌘+C).<br>Then, you have to
            <a target='_blank' href='https://mail.google.com/mail/u/0/#settings/general'>click here</a>,
            go to Signature and paste it (⌘+V)."
          >
            <div>
              <EmailSignature {...this.state} />
            </div>
          </Step>
        </Steps>
      </AppContainer>
    );
  }
}
