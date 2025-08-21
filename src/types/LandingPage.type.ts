// Types for testimonial images
export interface UserTestimonial {
  id: number;
  image: string;
  alt?: string;
}

// Types for game development cards
export interface GameDevCard {
  id: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  charecterTrue: boolean;
  characterImage?: string;
  alt: string;
}

// Types for home swiper images
export interface HomeSwiperImage {
  id: string;
  path: string;
}

// Export arrays of these types to match the constants
export type TestimonialImageArray = UserTestimonial[];
export type GameDevCardsArray = GameDevCard[];
export type HomeSwiperImagesArray = HomeSwiperImage[];
