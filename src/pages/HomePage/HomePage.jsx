import { useEffect, useState } from "react"
import MovieList from '../../components/MovieList/MovieList.jsx'
import { fetchTrendingMovies } from "../../Fetch.js";
import Loader from "../../components/Loader/Loader.jsx";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
        useEffect(() => {
            async function getMovies() {
                try {
                    setIsLoading(true);
        setError(false);
                    const data = await fetchTrendingMovies()
                    // console.log(data)
                    setMovies(data)
                } catch (error) {
                     setError(true);
                }
               finally {
        setIsLoading(false);
      }
            } 
            getMovies() 
        },[])
        return (
            <div>
                <h1 >Trending Today</h1>
      {isLoading && <Loader />}
                {error && <b>error</b>
      }
                {movies.length>0 && <MovieList movies={movies } />}
            </div>
        )
}