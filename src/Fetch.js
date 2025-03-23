import axios from "axios";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjAzYjM1MDVkOGRmZjczNWI2OTdjZGQ4ZGZiMzFlMCIsIm5iZiI6MTY0MjA3NTc3NC4yOTMsInN1YiI6IjYxZTAxNjdlYTZmZGFhMDA0MWJlOGYyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Mpm0dnEOlwZkHFZqvlOT_NQCaVNrEwt8tsXcWfT5mg";
const BASE_URL = "https://api.themoviedb.org/3/";

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export const fetchTrendingMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}trending/movie/day`, {
            params: {
        
                include_adult: false,
                language: "en-US",
            },
            ...getHeaders(),
        });
        return response.data.results
    } catch (error) {
        console.error('Error', error);
        throw error;
        
        
    }
};
export const fetchMoviesByQuery = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}search/movie`, {
      ...getHeaders(),
      params: { query },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching moovie", error);
    throw error;
  }
};
export const fetchMoviesById = async (movieId) => {
  try {
    
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}`,
      getHeaders()
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching movi by ID", error);
    throw error;
  }
};
export const fetchMoviesCast = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits`,
      getHeaders()
    );

    return response.data.cast;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    throw error;
  }
};
export const fetchMoviesReviews = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews`,
      getHeaders()
    );

    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw error;
  }
};