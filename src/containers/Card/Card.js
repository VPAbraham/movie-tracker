import React from 'react';
import '../Card/Card.scss'
import images from '../../assets/images';

const Card = ({ movie, poster, title, favorited, toggleFavorites }) => {
  let faveClass = favorited ? "faved" : "notFaved";

  return (
    <div className="card">
      <img className="favorite-icon" src={images.favIcon} alt="" />
      <label className="favorite-label">FAVORITE</label>
      <img className="card-img" src={poster} alt="movie poster" />
      <h3 className ="movie-title">{title}</h3>
      <h5 className={faveClass} onClick={(e) => toggleFavorites(e, movie)}>Insert fave icon here</h5>
    </div>
  )
}

export default Card;