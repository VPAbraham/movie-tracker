import React from 'react';
import Card from '../Card/Card';
import images from '../../assets/images';
import { saveFavorites } from '../../actions';
import './FavoritesContainer.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

<<<<<<< HEAD
export const FavoritesContainer = ({ movies, favorites, toggleFavorites }) => {
=======
export const FavoritesContainer = ({ favorites, toggleFavorites }) => {
>>>>>>> 517f9fa97372d095464a9f2851c2415a2431853e
  const favoritesCards = favorites.map(favorite => {
   
    return (
      <Card
        key={favorite.movie_id}
        poster={`https://image.tmdb.org/t/p/w342${favorite.poster_path}`}
        title={favorite.title}
        movie={favorite}
        favorited="true"
        toggleFavorites={toggleFavorites}
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

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    saveFavorites
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer)