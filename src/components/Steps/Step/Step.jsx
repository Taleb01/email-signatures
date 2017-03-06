import React from 'react';
import Button from 'components/Button/Button';
import ButtonContainer from 'components/ButtonContainer/ButtonContainer';
import styles from './Step.sass';

const ANIMATION_DURATION = 700;

class Step extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styleModifier: '',
    };

    this.animateTransition = this.animateTransition.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentWillReceiveProps() {
    this.animateTransition('appearing', ANIMATION_DURATION, () => {
      this.setState({
        styleModifier: '',
      });
    });
  }

  animateTransition(style, time, callback) {
    this.setState({
      styleModifier: `${style}-1`,
    });

    setTimeout(() => this.setState({
      styleModifier: `${style}-2`,
    }), time / 2);

    setTimeout(() => callback(), time);
  }
  handlePrev() {
    this.animateTransition('leaving', ANIMATION_DURATION, this.props.onPrevStep);
  }

  handleNext() {
    this.animateTransition('leaving', ANIMATION_DURATION, this.props.onNextStep);

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

    const styleName = this.state.styleModifier ?
      `step${this.state.styleModifier[0].toUpperCase()}${this.state.styleModifier.substring(1, this.state.length).replace('-', '')}` :
      'step';

    return (
      <div className={styles[styleName]}>
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
  children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
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
