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
    const [input, setInput] = useState('');
        const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    

    const handleSubmit = (event) => {
        
        
    event.preventDefault();
        if (input.trim()==='') {
      alert("Please enter name");
      return;
    }
        
        


        const nextParams = new URLSearchParams(searchParams);
        if (input !== '') {
            nextParams.set('query', input);
        }
        else {nextParams.delete('query')}
        setSearchParams(nextParams);
        setInput('');
    }

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
           
            <form onSubmit={handleSubmit}>
                <input
       value={input}
          onChange={(event)=>setInput(event.target.value)}             
      type="text"
      
    />
    <button type="submit">Search</button>
  </form>
            {isLoading && <Loader />}
      {error && <b>error</b>}
      {movies.length > 0 && <MovieList movies={movies} /> }
        </div>
    )
}