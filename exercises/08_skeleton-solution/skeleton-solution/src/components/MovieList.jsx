import { SimpleGrid } from "@chakra-ui/react";
import Movie from "./Movie";
import MovieSkeleton from "./MovieSkeleton";

export default function MovieList({ movies, ratings, reviewFn, loading }) {
    return (
        <SimpleGrid
            columns={[1, 2, 3]}
            gap={6}
            minChildWidth="250px"
        >
            {loading 
                ? Array.from({ length: 12 }).map((_, i) => (
                    <MovieSkeleton key={i} />
                ))
                : movies.map((m) => {
                    const { total, count } = ratings.reduce((prev, cur) => {
                        if (cur.movieId !== m.id)
                            return prev;

                        return {
                            total: prev.total + cur.rating,
                            count: prev.count + 1
                        };
                    }, { total: 0, count: 0 });
                    const avg = count > 0 ? total / count : 0;

                    return (
                        <Movie
                            key={m.id}
                            movie={m}
                            rating={avg}
                            amount={count}
                            reviewFn={reviewFn}
                        />
                    )
                })
            }
        </SimpleGrid>
    );
}