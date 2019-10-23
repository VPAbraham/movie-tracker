import React from 'react';
import Card from '../Card/Card'
import PropTypes from 'prop-types';

const MoviesContainer = ({ movies }) => {
    const cards = movies.map(movie => {
      console.log(movie)
      return (
        <Card 
        key={movie.id}
        poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        title={movie.title}
        year={movie.year}
        favorited="false"
        />
        )
      })

  return (
    <div>
      {cards}
    </div>
  )
}

export default MoviesContainer;