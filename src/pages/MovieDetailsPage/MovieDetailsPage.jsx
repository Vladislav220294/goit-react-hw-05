import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { fetchMoviesById } from "../../Fetch";
import css from './MovieDetailsPage.module.css'
import { NavLink } from "react-router";
import Loader from "../../components/Loader/Loader";


export default function MovieDetailsPage() {
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
    const [movie, setMovie] = useState({});
    
    useEffect(() => {
        async function getMovie() {
            
            try {
                 setIsLoading(true);
        setError(false);
                const data = await fetchMoviesById(movieId);
                
                setMovie(data)
                
            } catch (error) {
              setError(true);  
            } finally {
        setIsLoading(false);
      }
           
        }
        getMovie()
    }, [movieId]); 
    if (!movie) return <p>Movies not available</p>;
    return (
        <div>
            {isLoading && <Loader />}
      {error && <b>there was an error</b>}
            <div className={css.container}>
    <img
      className={css.movieListImg}
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
    />

    <div className={css.movieInfo}>
      <h1 className={css.detailsTitle}>{movie.original_title} ({movie.release_date})</h1>

      <div className={css.itemTitle}>
        <h2>User Score:</h2>
        <p>{Math.round(movie.vote_average * 10)}%</p>
      </div>

      <div className={css.overview}>
        <h3>Overview:</h3>
        <p>{movie.overview}</p>
      </div>

      <div className={css.genre}>
        <h3>Genres:</h3>
        <p>{movie.genres && movie.genres.map((el) => el.name).join(" • ")}</p>
      </div>
    </div>
  </div>

  

  <div className={css.block}>
    <h3>Additional information</h3>
    <ul>
      <li>
        <NavLink to={`/movies/${movie.id}/cast`}  className={css.listLink}>
          Casts
        </NavLink>
      </li>
      <li>
        <NavLink to='reviews'  className={css.listLink}>
          Reviews
        </NavLink>
      </li>
                </ul>
                <Outlet/>
  </div>
        </div>
    )
    
}