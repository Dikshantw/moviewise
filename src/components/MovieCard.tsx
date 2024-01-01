import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movies } from "../hooks/useMovies";

interface Prop {
  movies: Movies;
}

const MovieCard = ({ movies }: Prop) => {
  return (
    <Card maxW="sm">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
        width="200px"
      />
      <CardBody>
        <Heading fontSize="2xl">{movies.original_title}</Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
