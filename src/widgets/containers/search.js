import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux'

class SearchContainer extends Component {
  state = {
    value: '',
    propmt: false,
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.input.value, 'submit')

    this.props.dispatch({
      type: 'SEARCH_VIDEO',
      payload: {
        query: this.input.value
      }
    })
  }
  setInputRef = element => {
    this.input = element;
  }
  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-'),
      propmt: !!(event.target.value.length),
    })
  }
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
        propmt={this.state.propmt}
      />
    )
  }
}

export default connect()(SearchContainer);
