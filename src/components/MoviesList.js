import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Row } from "react-bootstrap";
import PaginationComp from "./Pagination";
import NoData from "./NoData";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../Redux/Action/movieAction";
const MoviesList = ({ paginatMovieData, pages }) => {
  const data = useSelector((state) => state.movieRed.movies);
  const langData = useSelector((state) => state.langRed.language);
  const [lang, setLang] = useState("");
  useEffect(() => {
    
    if (langData === undefined) {
      setLang("en_US");
    } else {
      setLang(langData);
    }
  }, [langData]);

  console.log(lang);

  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "ar" });
    dispatch(getAllMovies(lang));
  }, []);
  useEffect(() => {
    if (data === undefined) {
      setMovies([]);
    } else {
      setMovies(data);
    }
  }, [data]);

  return (
    <Row className="mt-3 viwe ">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })
      ) : (
        <h2>
          <NoData />
        </h2>
      )}
      {movies.length >= 1 ? (
        <PaginationComp paginatMovieData={paginatMovieData} pages={pages} />
      ) : null}
    </Row>
  );
};

export default MoviesList;
