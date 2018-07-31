import React, { Component } from 'react';
import TitleBar from './TitleBar';
import { Link } from 'react-router-dom';

class Movies extends Component {
  state = {};
  render() {
    let content = this.props.data.slice(0, 21);
    return (
      <div className="content">
        <TitleBar title={this.state.title} />
        <h1>Movies</h1>
        {content.map(movie => {
          return (
            <div className="tile">
              <img src={movie.images['Poster Art'].url} />
              <p>{movie.title}</p>
            </div>
          );
        })}
        <button className="goBack">
          <Link to="/">Go Home</Link>
        </button>
      </div>
    );
  }
}

export default Movies;
