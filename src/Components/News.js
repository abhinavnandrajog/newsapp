import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize:'5',
    category:'general'
  }
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

  }
    constructor(){
        super(); 
        this.state = {
            articles:[], 
            loading:false,
            page:1,
        }
    }

    async componentDidMount(){
   
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dfb25f54edf54ba1b1174735f6d78907&page1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({articles:parseData.articles,
        totalResults:parseData.totalResults,
      loading:false,
      })

    }
   handleNextClick = async() => {
    if(this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)){

    }else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dfb25f54edf54ba1b1174735f6d78907&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles:parseData.articles,
      page:this.state.page + 1,
      loading:false,
    })
    }
  }

    handlePrevClick = async() => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dfb25f54edf54ba1b1174735f6d78907&page=${this.state.page -1}&pageSize=${this.props.pageSize}`; 
      this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles:parseData.articles,
      page:this.state.page - 1,
      loading:false,
    })
    }
  render() {
    return (
      <div>
        <div className="container my-3" >
            <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
            {this.state.loading && <Spinner />}
                <div className="row my-4">
                {!this.state.loading && this.state.articles.map((element)=>{
                  return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} Imageurl={!element.urlToImage?"http://www.newsapi.ai/landing/img/logo.png":element.urlToImage} newsUrl={element.url} author={element.author?element.author:"unknown"} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}
           
             </div>
             <div className="container d-flex justify-content-between">
                  <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                  <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next  &rarr;</button>
             </div>
        </div>
      </div>
    )
  }
}

export default News
