const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}`,
  },
  fetchRomance: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
  fetchHorror: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchComedy: {
    title: "Comedy",
    url: `/movie/550?api_key=${API_KEY}&with_genres=35`,
  },
  fetchAction: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
};
