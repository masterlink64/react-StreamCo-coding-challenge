import React, { Component } from 'react';

class TitleBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="titlebar">
        <h2>Popular {this.props.title}</h2>
      </div>
    );
  }
}

export default TitleBar;
