import React from 'react';

const MovieReviews = props => {
  return (
    <div className="review-list">
      {
        props.reviews.map(review =>{
          const {display_title, summary_short, link: {suggested_link_text, url}, multimedia: {src}} = review

          return(
            <div className="review" key={display_title}>
              <h1>{display_title}</h1>
              <a href={url}>{suggested_link_text}</a>
              <br/>
              <img src={src} alt={display_title}/>
              <p>{summary_short}</p>
            </div>
          )
        })
      }
    </div>
  )
}


export default MovieReviews