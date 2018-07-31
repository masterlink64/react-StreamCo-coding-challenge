import React, { Component } from 'react';
import TitleBar from './TitleBar';
import Series from './Series';
import Movies from './Movies';
import { data } from '../data.js';
import './Content.css';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <button
      // onClick={() =>
      //   this.setState({ nav: 'series', title: 'Popular Series' })
      // }
      >
        <Link to="/series">Series</Link>
      </button>
      <button
      // onClick={() =>
      //   this.setState({ nav: 'movies', title: 'Popular Movies' })
      // }
      >
        <Link to="/movies">Movies</Link>
      </button>
    </div>
  );
};
class Content extends Component {
  state = {
    nav: 'home',
    title: 'Popular Titles'
  };

  render() {
    const movies = data.entries
      .filter(
        entry => entry.programType === 'movie' && entry.releaseYear >= 2010
      )
      .sort(function(a, b) {
        var titleA = a.title.toUpperCase();
        var titleB = b.title.toUpperCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    const series = data.entries
      .filter(
        entry => entry.programType === 'series' && entry.releaseYear >= 2010
      )
      .sort(function(a, b) {
        var titleA = a.title.toUpperCase();
        var titleB = b.title.toUpperCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });

    // let content;
    // if (this.state.nav === 'home') {
    //   content = (
    //     <div>
    //       <button
    //         onClick={() =>
    //           this.setState({ nav: 'series', title: 'Popular Series' })
    //         }
    //       >
    //         Series
    //       </button>
    //       <button
    //         onClick={() =>
    //           this.setState({ nav: 'movies', title: 'Popular Movies' })
    //         }
    //       >
    //         Movies
    //       </button>
    //     </div>
    //   );
    // } else if (this.state.nav === 'series') {
    //   content = (
    //     <Series
    //       data={data.entries
    //         .filter(
    //           entry =>
    //             entry.programType === 'series' && entry.releaseYear >= 2010
    //         )
    //         .sort(function(a, b) {
    //           var titleA = a.title.toUpperCase();
    //           var titleB = b.title.toUpperCase();
    //           if (titleA < titleB) {
    //             return -1;
    //           }
    //           if (titleA > titleB) {
    //             return 1;
    //           }
    //           return 0;
    //         })}
    //       goBack={() => this.setState({ nav: 'home', title: 'Popular Titles' })}
    //     />
    //   );
    // } else if (this.state.nav === 'movies') {
    //   content = (
    //     <Movies

    //       goBack={() =>
    //         this.setState({
    //           nav: 'home',
    //           title: 'Popular Titles'
    //         })
    //       }
    //     />
    //   );
    // }
    return (
      <div id="content">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* // need to pass in data as prop to our component */}
          <Route path="/movies" component={() => <Movies data={movies} />} />
          <Route path="/series" component={() => <Series data={series} />} />
          <Redirect to="/" />
        </Switch>
        {/* <div>{content}</div> */}
      </div>
    );
  }
}

export default Content;
