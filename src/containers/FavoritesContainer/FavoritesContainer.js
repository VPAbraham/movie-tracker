import React from 'react';
import Card from '../Card/Card';
import images from '../../assets/images';
import './FavoritesContainer.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const FavoritesContainer = ({ movies, favorites, clickFavIcon }) => {
  const favoritesCards = favorites.map(favorite => {
   
    return (
      <Card
        key={favorite.movie_id}
        poster={`https://image.tmdb.org/t/p/w342${favorite.poster_path}`}
        title={favorite.title}
        movie={favorite}
        clickFavIcon={clickFavIcon}
      />
    )
  })

  return (
    <div className="favorites-container">
      <h2 className="favorites-header">Favorited Films</h2>
      <div className="scroll-wrapper">
        <div className="movies-container">
          <img className="left-arrow arrow" src={images.leftArrow} alt="left arrow" />
          {favoritesCards}
          <img className="right-arrow arrow" src={images.rightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ movies, favorites }) => ({
  favorites,
  movies
})

export default connect(mapStateToProps)(FavoritesContainer)

FavoritesContainer.propTypes = {
  favorites: PropTypes.array.isRequired,
  clickFavIcon: PropTypes.func.isRequired
}