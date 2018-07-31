import React, { Component } from 'react';
import TitleBar from './TitleBar';
import MediaList from './MediaList';
import './Content.css';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { getData } from '../helperFunctions.js';

const Home = () => {
  return (
    <div>
      <Link to="/series">
        <button>Series</button>
      </Link>

      <Link to="/movies">
        <button>Movies</button>
      </Link>
    </div>
  );
};
class Content extends Component {
  state = {};
  componentDidMount() {
    this.setState({
      movies: getData('movie'),
      series: getData('series')
    });
  }
  render() {
    return (
      <div id="content">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* // need to pass in data as prop to our component */}
          <Route
            path="/movies"
            component={() => (
              <MediaList title="Movies" data={this.state.movies} />
            )}
          />
          <Route
            path="/series"
            component={() => (
              <MediaList title="Series" data={this.state.series} />
            )}
          />
          <Redirect to="/" />
        </Switch>
        {/* <div>{content}</div> */}
      </div>
    );
  }
}

export default Content;
