import React from 'react'
import Review from './Review'


const MovieReviews = (props) => {
  return(
    <div className="review-list">
      {props.reviews.map(rev => <Review key={rev.display_title} review={rev} />)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews