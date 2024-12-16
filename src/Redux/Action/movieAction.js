import axios from "axios";
import { AllMovie } from "../Type/movieType";
import { mainUrl, searchUrl, pagnenatUrl } from "../Type/movieType";


export const getAllMovies = (lang) => {
  return async (returnDisp) => {
    const moviesData = await axios.get(mainUrl(lang));
    console.log(lang)
    returnDisp({ type: AllMovie, data: moviesData.data.results, pages: moviesData.data.total_pages});
  };
};

export const searchFunction = (searchWord, lang)=>{
    return async (returnDisp) => {
        const moviesData = await axios.get(searchUrl(searchWord, lang));
        console.log(lang)
        returnDisp({ type: AllMovie, data: moviesData.data.results, pages: moviesData.data.total_pages });
      };
}
export const pagenatFunction = (lang, pageNum)=>{
    return async (returnDisp) => {
        const moviesData = await axios.get(pagnenatUrl(lang, pageNum));
        console.log(lang)
        returnDisp({ type: AllMovie, data: moviesData.data.results, pages: moviesData.data.total_pages });
      };
}


