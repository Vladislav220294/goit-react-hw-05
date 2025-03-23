import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchMoviesByQuery } from '../../Fetch'
import MovieList from '../../components/MovieList/MovieList'
import Loader from '../../components/Loader/Loader'
import css from './MoviesPage.module.css'
import { useSearchParams } from "react-router";


export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    // const [input, setInput] = useState('');
     const [query, setQuery] = useState("");

//     const handleChange = (event) => {
//         setInput(event.target.value)
        
//     }
    
// const onSubmit = (newQuery) => {
//     setQuery(newQuery);
    
//     setMovies([]);
    
//   }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (!input.trim()) {
//       alert("Please enter name");
//       return;
//     }
//         onSubmit(input);
//         setInput('')
        
       

    //     }
    const [searchParams, setSearchParams]=useSearchParams()

    useEffect(() => {
    
    async function getMovies() {
        try {
            
        setIsLoading(true);
        setError(false);
          const data = await fetchMoviesByQuery(query);
          
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
        getMovies(); 
        
  }, [query]);

    return (
        <div>
           {/* <form onSubmit={handleSubmit}>
                <input
       value={input}
          onChange={handleChange}             
      type="text"
     
    />
    <button type="submit">Search</button>
            </form>  */}
            <input type="text"/>
            {isLoading && <Loader />}
      {error && <b>error</b>}
      {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    )
}