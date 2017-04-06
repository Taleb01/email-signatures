import React from 'react';
import styles from './Steps.sass';

const ANIMATION_DURATION = 700;

class Steps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: props.active,
      total: this.props.children.length,
    };

    this.animateTransition = this.animateTransition.bind(this);
    this.handleNextStep = this.handleStepChange.bind(this, 1);
    this.handlePrevStep = this.handleStepChange.bind(this, -1);

    this.props.onChange(0, 1);
  }

  animateTransition(style, time, callback = () => {}) {
    this.setState({
      styleModifier: `${style}-1`,
    });

    setTimeout(() => this.setState({ styleModifier: `${style}-2` }), time / 2);

    setTimeout(() => {
      this.setState({
        styleModifier: '',
      });

      callback();
    }, time);
  }

  handleStepChange(modifier) {
    const from = this.state.step;
    const to = this.state.step + modifier;

    if (to >= 1 && to <= this.state.total) {
      this.props.onChange(from, to);

      this.animateTransition('leaving', ANIMATION_DURATION, () => {
        this.setState({ step: to });

        this.animateTransition('appearing', ANIMATION_DURATION);
      });
    }
  }

  render() {
    const styleName = this.state.styleModifier ?
      `steps${this.state.styleModifier[0].toUpperCase()}${this.state.styleModifier.substring(1, this.state.length).replace('-', '')}` :
      'steps';

    const childrenWithProps = React.cloneElement(this.props.children[this.state.step - 1], {
      onValidate: this.props.onValidate,
      onPrevStep: this.handlePrevStep,
      onNextStep: this.handleNextStep,
    });

    return (
      <div className={styles[styleName]}>
        {childrenWithProps}
      </div>
    );
  }
}

Steps.propTypes = {
  onValidate: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  active: React.PropTypes.number,
  children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
};

Steps.defaultProps = {
  onChange: () => {},
  active: 1,
};

export default Steps;
