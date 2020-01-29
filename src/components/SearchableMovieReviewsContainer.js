import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component{
  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.submitHandler}>
          <input 
            type="text" 
            value={this.state.searchTerm} 
            onChange={event => this.updateSearchTerm(event)}
          />
          <input type="submit" value="Search for reviews"/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

  componentDidMount(){
    this.fetchReviews()
  }

  fetchReviews(){
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(reviewArray => this.setState( {reviews: reviewArray.results} ) )
  }

  updateSearchTerm = event => {
    let newSearchTerm = event.target.value
    this.setState({
      searchTerm: newSearchTerm
    })
  }

  submitHandler = event => {
    debugger
    event.preventDefault()
    this.fetchReviews()
  }
}

export default SearchableMovieReviewsContainer
