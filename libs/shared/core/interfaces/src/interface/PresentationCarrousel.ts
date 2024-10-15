export interface PresentationCarrouselI {
  path: string;
  alt: string;
  title: string;
}

export function createPresentationCarrousel(
  path: string,
  alt: string,
  title: string
): PresentationCarrouselI {
  return {
    path: path,
    alt,
    title,
  };
}
