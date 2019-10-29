import React from 'react';
import Card from '../Card/Card';
import images from '../../assets/images';
import '../MoviesContainer/MoviesContainer.scss'
import { connect } from 'react-redux'

export const MoviesContainer = ({ movies, toggleFavorites, favorites }) => {

  const movieCards = movies.map(movie => {
    let favStatus = false;
    
    favorites.forEach(favorite =>{
      if(favorite.movie_id === movie.movie_id) {
        favStatus = true
      }
    })

    return (
        <Card 
        key={movie.movie_id}
        movie={movie}
        poster={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        title={movie.title}
        favorited={favStatus}
        toggleFavorites={toggleFavorites}
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

const mapStateToProps = ({ movies, favorites }) => ({
  movies,
  favorites
})

export default connect(mapStateToProps)(MoviesContainer)
