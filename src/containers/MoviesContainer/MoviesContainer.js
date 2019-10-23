import React from 'react';
import Card from '../Card/Card'
import PropTypes from 'prop-types';
import '../MoviesContainer/MoviesContainer.css'

const MoviesContainer = ({ movies }) => {
    const cards = movies.map(movie => {
      console.log(movie)
      return (
        <Card 
        key={movie.id}
        poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        title={movie.title}
        favorited="false"
        />
        )
      })

  return (
    <div className="scroll-wrapper">
      <div className="movies-container">
        {/* <h1>Current Movies</h1> */}
        {cards}
      </div>
    </div>
  )
}

export default MoviesContainer;