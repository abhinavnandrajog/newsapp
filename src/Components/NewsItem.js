import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title,description,Imageurl,newsUrl} = this.props;
   
    return (
      <div>
        <div className="card">
        <img src={Imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a target="_blank" rel="noreferrer" href={newsUrl} className="btn btn-dark">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
