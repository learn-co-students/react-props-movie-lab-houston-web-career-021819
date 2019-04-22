import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    //const movies = [] 
     return movieData.map(movie=> <MovieCard {...movie}/>) 
   //console.log(movies)         
   //return movies
   }

  render() {
    //console.log(movies)
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}   

   
