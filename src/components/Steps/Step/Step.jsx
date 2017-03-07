import React from 'react';
import Button from 'components/Button/Button';
import ButtonContainer from 'components/ButtonContainer/ButtonContainer';

class Step extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styleModifier: '',
    };

    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrev() {
    this.props.onPrevStep();
  }

  handleNext() {
    this.props.onNextStep();

    if (this.props.onSubmit) {
      this.props.onSubmit({
        name: 'lucho',
      });
    }
  }

  render() {
    const paragraph = this.props.text ?
      <p dangerouslySetInnerHTML={{ __html: this.props.text }} /> :
      null;

    const prevButton = this.props.prevButton ?
      <Button theme="inverted" onClick={this.handlePrev}>{this.props.prevButton}</Button> :
      null;

    const nextButton = this.props.nextButton ?
      <Button onClick={this.handleNext}>{this.props.nextButton}</Button> :
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
  onSubmit: React.PropTypes.func,
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
  onSubmit: () => {},
  onPrevStep: () => {},
  onNextStep: () => {},
};

export default Step;
