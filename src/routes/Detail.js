import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    console.log(json);

    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading Details...</h1>
      ) : (
        <div>
          <h1>Title : {movie.title_long} </h1>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h4>
            {movie.genres
              ? movie.genres.map((g) => <li key={g}>{g}</li>)
              : null}
          </h4>
          <h4>{movie.runtime} minute </h4>
          <a href={movie.url}>URL : {movie.url}</a>
        </div>
      )}
    </div>
  );
}

export default Detail;
