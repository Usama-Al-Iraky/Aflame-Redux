const path = "https://api.themoviedb.org/3";
const getFan = "/movie/popular?";
const searchFan = "/search/movie?";
const apiKey = "api_key=6d1ed9dccc9e5d6862b9e9fe2a4d2a64";
const searchPara = "&query=";
const langPara = "&language=";
const page = "&page=";

export const AllMovies = "AllMovies";
export const mainUrl = path + getFan + apiKey + langPara + 'en_US' + page + "1"