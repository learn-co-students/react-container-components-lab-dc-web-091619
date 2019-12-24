// Code MovieReviews Here
import React from 'react';


const Review = ({
                  headline,
                  byline,
                  display_title,
                  link,
                  summary_short
                }) => {
  return(
    <div className='review' key={headline}>

      <header>
        <a className='review-link'
           href={link.url}> {headline}
        </a>
        <br/>
        <span className='author'>{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  )
}

const MovieReviews = ({reviews}) => <div className='review-list'>
  {reviews.map(Review)}</div>

export default MovieReviews
