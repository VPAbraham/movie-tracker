import React from 'react';
import '../Card/Card.scss'
import images from '../../assets/images';

const Card = ({ movie, poster, title, favorited, toggleFavorites }, props) => {
  let favImage = images.favInactive;
  if(favorited === true) {
    favImage = images.favActive
  } else {
    favImage = images.favInactive
  }

  return (
    <div className="card">
      <img className="favorite-icon" src={favImage} alt="" onClick={(e) => toggleFavorites(e, movie)} />
      <label className="favorite-label">FAVORITE</label>
      <img className="card-img" src={poster} alt="movie poster" />
      <h3 className ="movie-title">{title}</h3>
      <div className='card-footer'>
        <img className="info-icon" src={images.movieInfo} />
        <p className="movie-desc">Movie Description</p>
      </div>
    </div>
  )
}

export default Card;