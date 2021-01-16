import { getStrapiURL } from "./strapi";

export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
    
  return imageUrl;
}