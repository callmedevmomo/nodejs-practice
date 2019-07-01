import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  res.render("movies", { movies: getMovies(), pageTitle: "movies" });
};
export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movies = getMovieById(id);
  if (movies) {
    res.render("detail", { pageTitle: "detail something", movies });
  } else {
    res.render("404", { pageTitle: "Error" });
  }
};
export const filterMovie = (req, res) => {
  const {
    query: { year, rating }
  } = req;
  if (year) {
    res.render("movies", {
      pageTitle: `Searching By year : ${year}`,
      movies: getMovieByMinimumYear(year)
    });
  } else if (rating) {
    res.render("movies", {
      pageTitle: `Searching By rating:${rating}`,
      movies: getMovieByMinimumRating(rating)
    });
  } else {
    res.render("404", { pageTitle: "Error" });
  }
};
