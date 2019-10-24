import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import '../MoviesContainer/MoviesContainer.scss'
import { connect } from 'react-redux'

const MoviesContainer = ({ movies }) => {
  console.log(movies)
  const movieCards = movies.map(movie => {
      return (
        <Card 
        key={movie.id}
        poster={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        title={movie.title}
        favorited="false"
        />
        )
      })

  return (
    <div className="scroll-wrapper">
      <div className="movies-container">
        {movieCards}
      </div>
    </div>
  )
}

const mapStateToProps = ({ movies }) => ({
  movies
})

export default connect(mapStateToProps, null)(MoviesContainer)
