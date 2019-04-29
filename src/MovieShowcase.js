import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    movieData.map(movie => <MovieCard {...movie}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
        {movieData.map(movie => <MovieCard {...movie}/>)}
      </div>
    )
  }
}
