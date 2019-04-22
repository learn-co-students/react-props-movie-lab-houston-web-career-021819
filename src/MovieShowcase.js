import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  render() {
    return (
      <div id="movie-showcase">
        {movieData.map( movie => <MovieCard {...movie} /> )}
      </div>
    )
  }
}
