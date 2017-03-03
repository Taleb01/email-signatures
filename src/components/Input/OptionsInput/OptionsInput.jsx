import React from 'react';
import Autocomplete from 'react-autocomplete';
import { getUsers, matchStateToTerm, styles, fakeRequest } from './libs/util';

export default class OptionsInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      options: getUsers(),
    }
  }

  render() {
    let wrapperStyle = {
      display: 'block'
    };

    return (
      <Autocomplete
        inputProps={{name: "user"}}
        ref="autocomplete"
        value={this.state.value}
        items={this.state.options}
        getItemValue={(item) => item.name}
        wrapperStyle={wrapperStyle}
        onSelect={(value, item) => {
          this.setState({ value, options: [ item ] })
        }}
        onChange={(event, value) => {
          this.setState({ value })
          fakeRequest(value, (items) => {
            this.setState({ options: items })
          })
        }}
        renderItem={(item, isHighlighted) => (
          <div
            style={isHighlighted ? styles.highlightedItem : styles.item}
            key={item.abbr}
            id={item.abbr}
          >{item.name}</div>
        )}
      />
    );
  }
}