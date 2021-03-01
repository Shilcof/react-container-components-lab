import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    componentDidMount() {
        fetch(URL)
            .then(res=>res.json())
            .then(json=>this.setState({reviews: json.results}))
    }

    handleChange(e) {
        this.setState({searchTerm: e.target.value})
    }

    handleChange(e) {
        e.preventDefault()
        fetch(`${URL}&query=${this.static.searchTerm}`)
            .then(res=>res.json())
            .then(json=>this.setState({reviews: json.results}))
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
                    <input type="submit"></input>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer