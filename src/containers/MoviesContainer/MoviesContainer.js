import React from 'react';
import Card from '../Card/Card';
import images from '../../assets/images';
import '../MoviesContainer/MoviesContainer.scss'
import { connect } from 'react-redux'

export const MoviesContainer = ({ movies, clickFavIcon }) => {
  const movieCards = movies.map(movie => {
    return (
        <Card 
        key={movie.movie_id}
        movie={movie}
        poster={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        title={movie.title}
        clickFavIcon={clickFavIcon}
        />
        )
      })

  return (
    <div className="scroll-wrapper">
      <div className="movies-container">
        <img className="left-arrow arrow" src={images.rightArrow} alt="left arrow"/>
        {movieCards}
        <img className="right-arrow arrow" src={images.leftArrow} alt="right arrow"/>
      </div>
    </div>
  )
}

export const mapStateToProps = ({ movies }) => ({
  movies
})

export default connect(mapStateToProps)(MoviesContainer)
