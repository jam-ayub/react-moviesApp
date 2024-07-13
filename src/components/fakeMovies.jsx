import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  renderMovieTitles() {
    if (this.state.movies.length === 0) return <p>There is not tag!!</p>;
    return (
      <ul>
        {this.state.movies.map((m) => {
          return <li key={m._id}>{m.title}</li>;
        })}
      </ul>
    );
  }

  render() {
    return (
      // <div>
      //   <h1>{this.state.movies[0].title}</h1>
      //   {this.renderMovieTitles()}
      // </div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => {
            return (
              <tr>
                <td>movie.title</td>
                <td>movie.genre</td>
                <td>movie.numberInStock</td>
                <td>movie.dailyRentalRate</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Movies;
