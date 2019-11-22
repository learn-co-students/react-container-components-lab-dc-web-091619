import React from 'react'

const Review = (props) => {
  const {headline, byline, link, summary_short} = props.review
  console.log(props.review)
  return(
    <div className="review">
      <header>
        <a className="review-link" href={link.url}>
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  )
}

export default Review