export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

export interface MovieDetail {
  id: number;
  title: string;
  release_date: string;
  backdrop_path: string;
  poster_path: string;
  genres: Genre[];
  vote_average: number;
  vote_count: number;
  runtime: number;
  status: string;
  overview: string;
  original_title: string;
  original_language: string;
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
  budget: number;
  revenue: number;
}
