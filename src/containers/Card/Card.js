import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ poster, title, year, favorited }) => {
  let faveClass = favorited ? "faved" : "notFaved";

  return (
    <div className="card">
      <img src={poster} alt="movie poster" />
      <h3>{title}</h3>
      <h4>{year}</h4>
      <h5 className={faveClass}>Insert fave icon here</h5>
    </div>
  )
}

export default Card;