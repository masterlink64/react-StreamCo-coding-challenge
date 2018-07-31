import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Series extends Component {
  state = {};
  render() {
    let content = this.props.data.slice(0, 21);
    return (
      <div className="content">
        <h1>Series</h1>
        {content.map(serie => {
          return (
            <div className="tile">
              <img src={serie.images['Poster Art'].url} />
              <p>{serie.title}</p>
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

export default Series;
