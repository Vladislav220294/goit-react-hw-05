import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchMoviesReviews } from "../../Fetch";
import Loader from "../Loader/Loader";
import css from './MovieReviews.module.css'

export default function MovieReviews() {
    const { movieId } = useParams();

    const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
    
    useEffect(() => {
    async function getReviews() {
      try {
        setIsLoading(true);
        setError(false);
          const data = await fetchMoviesReviews(movieId);
          
        setReviews(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getReviews();
  }, [movieId]);
return (
    <>
      {isLoading && <Loader />}
      {error && <b>error</b>}
      <div >
        {reviews.length ? (
          reviews.map((review) => (
            <div key={review.id} >
              <h3>{review.author}</h3>
              <p className={css.textReviews}>{review.content}</p>
            </div>
          ))
        ) : (
          <p className={css.textReviews}>We don't have any reviews for this movie</p>
        )}
      </div>
    </>
  );
}