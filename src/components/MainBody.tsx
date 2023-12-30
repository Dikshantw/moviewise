import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface Movies {
  id: number;
  original_title: string;
}

interface List {
  page: number;
  results: Movies[];
}
const apiKey = import.meta.env.VITE_KEY;
const MainBody = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    axios
      .get<List>(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message));
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.original_title}</li>
        ))}
      </ul>
      <Button onClick={handleNextPage}>{page}</Button>
    </>
  );
};

export default MainBody;
