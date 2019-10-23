import React from 'react';
import PropTypes from 'prop-types';

const MoviesContainer = ({ movies }) => {
  const cards = movies.map(movie => {
    return (
      <Card 
        poster={movie.poster}
        title={movie.title}
        year={movie.year}
        favorited="false"
      />
    )
  })
}