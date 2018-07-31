import React, { Component } from 'react';
import TitleBar from './TitleBar';
import { Link } from 'react-router-dom';

class MediaList extends Component {
  componentDidMount() {
    let randomError = Math.floor(Math.random() * 100);
    if (randomError < 30) {
      this.setState({ error: true });
    } else {
      setTimeout(() => this.setState({ isLoading: false }), 1500);
    }
  }
  state = {
    isLoading: true,
    error: false
  };
  render() {
    if (this.state.error) {
      return <h1>Something went wrong...</h1>;
    } else if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="content">
          <TitleBar title={this.props.title} />
          <h1>{this.props.title}</h1>
          {this.props.data.map(v => {
            return (
              <div className="tile">
                <img src={v.images['Poster Art'].url} />
                <p>{v.title}</p>
              </div>
            );
          })}

          <Link to="/">
            <button className="goBack">Go Home</button>
          </Link>
        </div>
      );
    }
  }
}

export default MediaList;
