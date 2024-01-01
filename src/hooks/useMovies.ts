import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export interface Movies {
  id: number;
  original_title: string;
  poster_path: string;
  vote_average: number;
}

interface List {
  page: number;
  results: Movies[];
}
const apiKey = import.meta.env.VITE_KEY;

const useMovies = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState<number>(1);

  const fetchMovies = useCallback(() => {
    axios
      .get<List>(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message));
  }, [page]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return { movies, error, page, setPage, fetchMovies };
};

export default useMovies;
