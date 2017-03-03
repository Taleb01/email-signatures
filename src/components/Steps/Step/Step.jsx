import React from 'react';
import Button from 'components/Button/Button';
import ButtonContainer from 'components/ButtonContainer/ButtonContainer';
import styles from './Step.sass';

const ANIMATION_DURATION = 700;

export default class Step extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modifier: ''
    };

    this.animateTransition = (style, time, callback) => {
      this.setState({
        modifier: style + '-1',
      });

      setTimeout(() => this.setState({
        modifier: style + '-2'
      }), time / 2);

      setTimeout(() => callback(), time);
    }

    this.handlePrev = () => {
      this.animateTransition('leaving', ANIMATION_DURATION, this.props.onPrevStep);
    }

    this.handleNext = () => {
      this.animateTransition('leaving', ANIMATION_DURATION, this.props.onNextStep);
    }
  }

  componentWillReceiveProps() {
    this.animateTransition('appearing', ANIMATION_DURATION, () => {
      this.setState({
        modifier: ''
      })
    });
  }

  render() {
    const paragraph = this.props.text ?
      <p dangerouslySetInnerHTML={{__html: this.props.text}}></p> : 
      '';

    const prevButton = this.props.prevButton ? 
      <Button theme="inverted" onClick={this.handlePrev}>{this.props.prevButton}</Button> :
      '';

    const nextButton = this.props.nextButton ?
      <Button onClick={this.handleNext}>{this.props.nextButton}</Button> : 
      '';

    const styleName = this.state.modifier ? 
      'step' + this.state.modifier[0].toUpperCase() + this.state.modifier.substring(1, this.state.length).replace('-', '') :
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
};