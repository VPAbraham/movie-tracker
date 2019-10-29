import React from 'react';
import '../Card/Card.scss'

const Card = ({ poster, title, favorited }) => {
  let faveClass = favorited ? "faved" : "notFaved";

  return (
    <div className="card">
      <img className="card-img" src={poster} alt="movie poster" />
      <h3 class ="movie-title">{title}</h3>
      {/* <h5 className={faveClass}>Insert fave icon here</h5> */}
    </div>
  )
}

export default Card;