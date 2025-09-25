import { useEffect, useState } from "react";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import MovieList from "./components/MovieList";
import ReviewForm from "./components/ReviewForm";
import MovieSkeleton from "./components/MovieSkeleton";

export default function App() {
    const [movies, setMovies] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reviewing, setReviewing] = useState(null);

    const fetchData = async () => {
        setLoading(true);

        const [moviesRes, ratingsRes] = await Promise.all([
            fetch("http://localhost:3000/movies"),
            fetch("http://localhost:3000/ratings"),
        ]);
        const [movies, ratings] = await Promise.all([
            moviesRes.json(),
            ratingsRes.json(),
        ]);

        setMovies(movies);
        setRatings(ratings);
        setLoading(false);
    };
    useEffect(() => {
        fetchData()
    }, []);

    return (
        <Container maxW="container.xl" py={6}>
            <Heading fontSize={'2xl'} mb={6}>Winc Movie Rater</Heading>

            {loading ? (
                <SimpleGrid columns={[1, 2, 3]} gap={6} minChildWidth="250px">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <MovieSkeleton key={i} />
                    ))}
                </SimpleGrid>
            ) : (
                <MovieList
                    movies={movies}
                    ratings={ratings}
                    reviewFn={setReviewing}
                />
            )}

            {reviewing && (
                <ReviewForm
                    movie={reviewing}
                    cancel={() => {
                        setReviewing(null);
                    }}
                    finish={() => {
                        setReviewing(null);
                        fetchData();
                    }}
                />
            )}
        </Container>
    );
}