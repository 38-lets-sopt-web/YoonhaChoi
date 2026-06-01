const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export type TmdbImageSize = "w185" | "w342" | "w500" | "w780" | "original";

export function getTmdbImageUrl(
  imagePath: string,
  size: TmdbImageSize = "w500"
) {
  return `${TMDB_IMAGE_BASE_URL}/${size}${imagePath}`;
}
