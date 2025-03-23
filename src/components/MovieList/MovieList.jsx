import { Link } from "react-router";
import css from "./MovieList.module.css";

export default function Movielist({ movies }) {
    if (!movies || movies.length === 0) {
    return <p>No movies</p>;
  }
    return (
    <div><ul className={css.list}>
            {movies.map((movie) =>
            (<li key={movie.id}>
                
              
                
              
            <Link to={`/movies/${movie.id}`} ><img 
              className={css.img}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title} /><p>{movie.title}</p></Link>
            </li>)
                
            )}
        </ul></div>
    )
    
}