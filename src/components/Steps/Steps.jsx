import React from 'react';

class Steps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: props.active,
      total: this.props.children.length,
    };

    this.handlePrevStep = this.handlePrevStep.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
  }

  handlePrevStep() {
    if (this.state.step !== 1) {
      const step = this.state.step - 1;

      this.props.onChange(this.state.step, step);

      this.setState({
        step,
      });
    }
  }

  handleNextStep() {
    if (this.state.step !== this.state.total) {
      const step = this.state.step + 1;

      this.props.onChange(this.state.step, step);

      this.setState({
        step,
      });
    }
  }

  render() {
    const childrenWithProps = React.cloneElement(this.props.children[this.state.step - 1], {
      onNextStep: this.handleNextStep,
      onPrevStep: this.handlePrevStep,
    });

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

Steps.propTypes = {
  onChange: React.PropTypes.func,
  active: React.PropTypes.number,
  children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
};

Steps.defaultProps = {
  onChange: () => {},
  active: 1,
};

export default Steps;
