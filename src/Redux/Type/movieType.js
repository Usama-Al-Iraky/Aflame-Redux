


export const AllMovie = "AllMovie";
export const mainUrl = (lang) => {
  console.log(lang)
  return`https://api.themoviedb.org/3/movie/popular?api_key=6d1ed9dccc9e5d6862b9e9fe2a4d2a64&language=${lang}&page=1`
} 
export const searchUrl = (searchWord, lang) => {
  console.log(lang)
  return`https://api.themoviedb.org/3/search/movie?api_key=6d1ed9dccc9e5d6862b9e9fe2a4d2a64&query=${searchWord}&language=${lang}`
} 
export const pagnenatUrl = (lang, pageNum) => {
  console.log(lang)
  return`https://api.themoviedb.org/3/movie/popular?api_key=6d1ed9dccc9e5d6862b9e9fe2a4d2a64&language=${lang}&page=${pageNum}`
} 
