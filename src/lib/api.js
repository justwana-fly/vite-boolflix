import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

// Cerca tutti i film col nome passato
const searchMovies = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: API_KEY,
                query: query,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
};

// Dammi un film per il suo ID
const getMovieDetailsById = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
            params: {
                api_key: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        return null;
    }
};

// Dammi 6 film random
const getRandomMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/discover/movie`, {
            params: {
                api_key: API_KEY,
                sort_by: "popularity.desc",
                include_adult: false,
                limit: 12,
                // with_original_language: "it",
            },
        });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching random movies:", error);
        return [];
    }
};

export { searchMovies, getMovieDetailsById, getRandomMovies };
