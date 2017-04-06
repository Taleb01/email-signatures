import React from 'react';
import Autocomplete from 'react-autocomplete';
import axios from 'axios';
import styles from './OptionsInput.sass';

class OptionsInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      options: [],
    };

    this.originalOptions = [];

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSelect = this.handleInputSelect.bind(this);

    this.matchOptionToTerm = props.matchOptionToTerm.bind(this);
  }

  componentDidMount() {
    let options = [];

    if (this.props.options.length > 0) {
      options = this.props.options;
    } else if (this.props.url !== '') {
      axios.get(this.state.url).then((response) => {
        options = response.data;
      });
    }

    this.originalOptions = options;

    // eslint-disable-next-line
    this.setState({ options });
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
    const renderItem = (item, isHighlighted) => (
      <div
        className={isHighlighted ? styles.highlightedItem : styles.item}
        key={item.username}
        id={item.username}
      >{item.name}</div>
    );

    return (
      <Autocomplete
        wrapperStyle={{
          display: 'block',
        }}
        menuStyle={{
          borderRadius: '3px',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '2px 0',
          fontSize: '90%',
          position: 'fixed',
          overflow: 'auto',
          maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
          bottom: '5%',
          zIndex: 999,
        }}
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
  url: React.PropTypes.string,
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
  })),
};

OptionsInput.defaultProps = {
  url: '',
  options: [],
};

export default OptionsInput;
