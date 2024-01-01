import { Button, SimpleGrid } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

const MainBody = () => {
  const { movies, error, page, setPage, fetchMovies } = useMovies();
  const handleNextPage = () => {
    setPage(page + 1);
    fetchMovies();
  };
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={4} spacing={4}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movies={movie}></MovieCard>
        ))}
      </SimpleGrid>
      <Button onClick={handleNextPage}>{page}</Button>
    </>
  );
};

export default MainBody;
