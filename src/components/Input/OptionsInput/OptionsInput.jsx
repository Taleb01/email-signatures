import React from 'react';
import Autocomplete from 'react-autocomplete';
import axios from 'axios';
import styles from './OptionsInput.sass';

class OptionsInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: props.url,
      value: '',
      options: [],
    };

    this.originalOptions = [];

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSelect = this.handleInputSelect.bind(this);

    this.matchOptionToTerm = props.matchOptionToTerm.bind(this);
  }

  componentDidMount() {
    axios.get(this.state.url).then((response) => {
      this.originalOptions = response.data;

      this.setState({
        options: response.data,
      });
    });
  }

  handleInputChange(event, value) {
    const options = this.originalOptions.filter(option => this.matchOptionToTerm(option, value));

    this.setState({
      value,
      options,
    });

    this.props.onChange(event);
  }

  handleInputSelect(value, item) {
    this.setState({
      value,
      options: [item],
    });

    this.props.onChange({
      target: {
        name: this.props.name,
        value,
      },
    });
  }

  render() {
    const wrapperStyle = {
      display: 'block',
    };

    const renderItem = (item, isHighlighted) => (
      <div
        className={isHighlighted ? styles.highlightedItem : styles.item}
        key={item.username}
        id={item.username}
      >{item.name}</div>
    );

    return (
      <Autocomplete
        wrapperStyle={wrapperStyle}
        inputProps={{ name: this.props.name }}
        items={this.state.options}
        value={this.state.value}
        getItemValue={item => item.name}
        renderItem={renderItem}
        onSelect={this.handleInputSelect}
        onChange={this.handleInputChange}
      />
    );
  }
}

OptionsInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  matchOptionToTerm: React.PropTypes.func.isRequired,
  url: React.PropTypes.string.isRequired,
};

export default OptionsInput;
