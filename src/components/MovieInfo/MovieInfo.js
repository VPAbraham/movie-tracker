import React, { Component } from 'react';
import './MovieInfo.scss';
import { connect } from 'react-redux';

export class MovieInfo extends Component {

  render() {
    const { id } = this.props.match.params;
    const { movies } = this.props;
    const movie = movies.find(movie => 
      movie.movie_id === parseInt(id)
      )
    const { title, release_date, overview, poster_path} = movie;
    const posterPath = `https://image.tmdb.org/t/p/w342${poster_path}`  
      console.log(movie)
  return (
    <div className="movie-info">
      <img className="main-poster" src={posterPath} alt='movie poster'/>
      <div className='movie-details'>
        <p className="mov-title">{title}</p>
        <p className="mov-release">Release Date: {release_date}</p>
        <p className="mov-overview">Overview: {overview}</p>
      </div>  
    </div>
    )
  }
}

const mapStateToProps = ({ movies }) => ({
  movies
})

export default connect(mapStateToProps, null)(MovieInfo)