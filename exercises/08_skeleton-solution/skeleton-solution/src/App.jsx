import { useEffect, useState } from "react";
import { Container, Heading } from "@chakra-ui/react";
import MovieList from "./components/MovieList";
import ReviewForm from "./components/ReviewForm";

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

             <MovieList
                movies={movies}
                ratings={ratings}
                reviewFn={setReviewing}
                loading={loading}
            />

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
        </Container>
    );
}