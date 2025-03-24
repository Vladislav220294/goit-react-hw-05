import { Link, useLocation } from "react-router";
import css from "./MovieList.module.css";

export default function Movielist({ movies }) {
  const location = useLocation()
  if (!movies || movies.length === 0) {
    alert('no movies');
    return 
  }
    return (
    <div><ul className={css.list}>
            {movies.map((movie) =>
            (<li key={movie.id}>
                
              
                
              
            <Link to={`/movies/${movie.id}`} state={location}><img 
              className={css.img}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title} /><p>{movie.title}</p></Link>
            </li>)
                
            )}
        </ul></div>
    )
    
}