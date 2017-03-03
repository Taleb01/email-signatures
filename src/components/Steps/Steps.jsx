import React from 'react';

export default class Steps extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      step: 1,
      total: this.props.children.length,
    };

    this.handlePrevStep = (() => {
      if (this.state.step != 1) {
        this.setState({
          step: this.state.step - 1,
        });
      }
    });

    this.handleNextStep = (() => {
      if (this.state.step != this.state.total) {
        this.setState({
          step: this.state.step + 1,
        });
      }
    })
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
};