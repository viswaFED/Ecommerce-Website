import Movie from "./Movies";
import classes from './MoviesList.module.css';

const MoviesList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          onDelete= {props.onDelete.bind(null, movie.id)}
        />
      ))}
    </ul>
  );
};

export default MoviesList
