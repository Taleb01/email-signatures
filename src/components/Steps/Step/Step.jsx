import React from 'react';
import Button from 'components/Button/Button';
import ButtonContainer from 'components/ButtonContainer/ButtonContainer';

class Step extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styleModifier: '',
      isValid: false,
    };

    this.handleValidate = this.handleValidate.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentWillReceiveProps() {
    this.handleValidate();
  }

  handleValidate() {
    const requiredInputs = this.props.children
      .filter(input => input.props.required || (input.props.disabledValue !== '' && input.props.value === ''))
      .map(input => input.props.name);

    this.setState({ isValid: this.props.onValidate(requiredInputs) });
  }

  handlePrev() {
    this.props.onPrevStep();
  }

  handleNext() {
    this.props.onNextStep();
  }

  render() {
    const paragraph = this.props.text ?
      <p dangerouslySetInnerHTML={{ __html: this.props.text }} /> :
      null;

    const prevButton = this.props.prevButton ?
      <Button theme="inverted" onClick={this.handlePrev}>{this.props.prevButton}</Button> :
      null;

    const nextButton = this.props.nextButton ?
      <Button theme={this.state.isValid === false ? 'disabled' : ''} onClick={this.handleNext}>{this.props.nextButton}</Button> :
      null;

    return (
      <div>
        {paragraph}

        {this.props.children}

        <ButtonContainer>
          {prevButton}
          {nextButton}
        </ButtonContainer>
      </div>
    );
  }
}

Step.propTypes = {
  nextButton: React.PropTypes.string,
  prevButton: React.PropTypes.string,
  text: React.PropTypes.string,
  onValidate: React.PropTypes.func,
  onPrevStep: React.PropTypes.func,
  onNextStep: React.PropTypes.func,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
};

Step.defaultProps = {
  nextButton: '',
  prevButton: '',
  text: '',
  onPrevStep: () => {},
  onNextStep: () => {},
  onValidate: () => {},
};

export default Step;
