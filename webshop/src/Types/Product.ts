export type Product = {
  id: number;
  name: string;
  slug: string;
  image: string;
  category: string;
  brand: string;
  price: number;
  countInStock: number;
  rating: number;
  numReview: number;
  description: string;
  badge: {
    hot: boolean;
    new: boolean;
  };
  sale: number;
  vendor: string;
  images: {
    img: string;
  }[];
};
