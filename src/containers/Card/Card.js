import React from 'react';
import '../Card/Card.scss'
import images from '../../assets/images';
import { Link } from 'react-router-dom';

const Card = ({ movie, poster, title, favorited, toggleFavorites }) => {
  let favImage = images.favInactive;
  if(favorited === true) {
    favImage = images.favActive
  } else {
    favImage = images.favInactive
  }

  let route

   if (movie) {
    route = `/movies/${movie.movie_id}`
  }

  return (

    <div className="card">
      <img className="favorite-icon" src={favImage} alt="" onClick={(e) => toggleFavorites(e, movie)} />
      <label className="favorite-label">FAVORITE</label>
      <img className="card-img" src={poster} alt="movie poster" />
      <h3 className ="movie-title">{title}</h3>
      <Link to={{
        pathname: route,
        state: {
          movie: movie
        }
      }}
      >
        <div className='card-footer'>
          <img className="info-icon" src={images.movieInfo} alt="info icon"/>
          <p className="movie-desc">Movie Description</p>
        </div>
      </Link>  
    </div>
  )
}

export default Card;