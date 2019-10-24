import React from 'react';
import PropTypes from 'prop-types';
import '../Card/Card.scss'

const Card = ({ poster, title, favorited }) => {
  let faveClass = favorited ? "faved" : "notFaved";

  return (
    <div className="card">
      <img className="card-img" src={poster} alt="movie poster" />
      <h3>{title}</h3>
      <h5 className={faveClass}>Insert fave icon here</h5>
    </div>
  )
}

export default Card;