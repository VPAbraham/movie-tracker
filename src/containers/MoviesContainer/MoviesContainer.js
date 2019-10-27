import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import images from '../../assets/images';
import '../MoviesContainer/MoviesContainer.scss'
import { connect } from 'react-redux'

export const MoviesContainer = ({ movies }) => {
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
        <img className="left-arrow arrow" src={images.leftArrow} alt="left arrow"/>
        {movieCards}
        <img className="right-arrow arrow" src={images.rightArrow} alt="right arrow"/>
      </div>
    </div>
  )
}

const mapStateToProps = ({ movies }) => ({
  movies
})

export default connect(mapStateToProps, null)(MoviesContainer)
