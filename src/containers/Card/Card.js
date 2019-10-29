import React from 'react';
import '../Card/Card.scss'
import images from '../../assets/images';

const Card = ({ movie, poster, title, favorited, toggleFavorites }) => {

  return (
    <div className="card">
      <img className="favorite-icon" src={images.favIcon} alt="" onClick={(e) => toggleFavorites(e, movie)} />
      <label className="favorite-label">FAVORITE</label>
      <img className="card-img" src={poster} alt="movie poster" />
      <h3 className ="movie-title">{title}</h3>
    </div>
  )
}

export default Card;