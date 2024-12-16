import { AllMovies } from "../Type/movieTypes";
const initialData = { movies: [], pageCounter: 0 };

const movieReducer = (state = initialData, action) => {
  if (action.type === AllMovies) {
    return { movies: action.data, pageCounter: action.pages };
  }
  return { state };
};

export default movieReducer;
