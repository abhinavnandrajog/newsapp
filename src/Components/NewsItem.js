import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title,description,Imageurl,newsUrl,author,date,source} = this.props;
   
    return (
      <div>
        <div className="card">
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
        <img src={Imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className = "card-text"><small class = "text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a target="_blank" rel="noreferrer" href={newsUrl} className="btn btn-dark">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
