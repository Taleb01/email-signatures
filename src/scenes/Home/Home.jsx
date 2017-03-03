import React from 'react';
import AppContainer from 'components/AppContainer/AppContainer';
import Steps from 'components/Steps/Steps';
import Step from 'components/Steps/Step/Step';
import Input from 'components/Input/Input';

export default class Home extends React.Component {
  render() {
    return (
      <AppContainer>
        <Steps>
          <Step
            nextButton="What else?"
            text="Hey! I will create your <strong>email signature</strong> for you, but first, let me know a bit about you..."
          >
            <Input label="Who are you?" options="a" />
            <Input label="What are you?" />
          </Step>

          <Step
            prevButton="Let me pick my name again"
            nextButton="Shut up and give me my signature"
            text="Cool <strong>Luciano</strong>! Nice name ;) I made some research <small>(?)</small> and I found this data about you.<br />  Feel free to update as you want and uncheck those that you don’t want to show."
          >
            <Input label="What's your name?" />
            <Input label="What do you do at Jampp?" />
            <Input label="Paste a photo link as you wanna look" />
          </Step>

          <Step
            prevButton="Let me fill my data again"
            text="This is your <strong>signature</strong>:"
          >
            blablal
          </Step>
        </Steps>
      </AppContainer>
    );
  }
};