import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: []
  }

  searchformSubmitted = (e) => {
    e.preventDefault();
    fetch(URL + `&query=${this.state.searchTerm}`)
    .then(res => res.json())
    .then(data => 
      this.setState({
        reviews: data.results
      })
    )
  }

  searchTerm = (e) => {
    console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
    <div className="searchable-movie-reviews">
      <form onSubmit={this.searchformSubmitted}>
        <input type="text" onChange={this.searchTerm} value={this.state.searchTerm}></input>
        <button type="submit" name="submit">Submit</button>
      </form>
      <div>
        <h2>Searched Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    </div>
    )
  }
}

export default SearchableMovieReviewsContainer