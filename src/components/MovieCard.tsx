import { Badge, Card, CardBody, Flex, Heading, Image } from "@chakra-ui/react";
import { Movies } from "../hooks/useMovies";

interface Prop {
  movies: Movies;
}

const MovieCard = ({ movies }: Prop) => {
  return (
    <Card width="200px" borderRadius="10px" overflow="hidden">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
        width="200px"
      />
      <CardBody>
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Heading fontSize="lg">{movies.original_title}</Heading>
          <Badge fontSize="14px">{movies.vote_average}</Badge>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
