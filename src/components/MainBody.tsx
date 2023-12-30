import { Button } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";

const MainBody = () => {
  const { movies, error, page, setPage, fetchMovies } = useMovies();
  const handleNextPage = () => {
    setPage(page + 1);
    fetchMovies();
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
