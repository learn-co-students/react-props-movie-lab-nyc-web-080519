import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}


/*   MovieShowcase is the component that will house all of the 'raw' data associated with the movies we want to display. This data is located in src/data.js and is already being imported.   */