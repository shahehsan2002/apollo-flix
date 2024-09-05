
import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";
import slugify from "slugify"; // Ensure this is installed via npm
import { format } from "date-fns"; // Ensure date-fns is installed

const createMovie = async (payload: TMovie) => {
  // Way1: Business logic to format releaseDate and create slug
  
  const date = format(payload.releaseDate, "yyyy-MM-dd"); // Correct date format

  // Creating slug
  const slug = slugify(`${payload.title}-${date}`, {
    lower: true,
  });

  // Assign the slug to the payload before creating the movie
  const result = await Movie.create({ ...payload, slug });
  return result;
};

const getAllMovies = async () => {
  const result = await Movie.find();
  return result;
};

const getMovieBySlug = async (slug: string) => {
  const result = await Movie.findOne({ slug });
  return result;
};

export const MovieServices = {
  createMovie,
  getAllMovies,
  getMovieBySlug,
};
