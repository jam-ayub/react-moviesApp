import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
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

  handelDelete = (movie) => {
    const updatedMovies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: updatedMovies });
  };

  handelLike = (movie) => {
    const movies = [...this.state.movies];
    const idx = movies.indexOf(movie);
    movies[idx] = { ...movies[idx] };
    movies[idx].liked = !movies[idx].liked;
    this.setState({ movies });
    console.log("likeddd", movie);
  };

  handelPageChange = (page) => {
    this.setState({currentPage: page});
    console.log(page);
  };

  render() {
    const { length: count } = this.state.movies;
    const {pageSize, currentPage, movies: allMovies} = this.state;

    if (count === 0) return <p>There is not tag!!</p>;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <p>Displaying {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handelLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handelDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handelPageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
