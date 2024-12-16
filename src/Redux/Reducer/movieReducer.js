import { AllMovie } from "../Type/movieType";
const initialData = { movies: [], pageCount: 0 };
export const movieReducer = (state = initialData, action) => {
  switch (action.type) {
    case AllMovie:
      return { movies: action.data, pageCount: action.pages};
    default:
      return { state };
  };
};
