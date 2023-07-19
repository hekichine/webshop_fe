import { Product } from "./Types/Product";

export const sampleProducts: Product[] = [
  {
    name: "Nike Slim shirt",
    slug: "nike-slim-shirt",
    category: "Shirts",
    image: "/images/product-1-1.jpeg",
    price: 245,
    countInStock: 10,
    brand: "Nike",
    rating: 4.5,
    numReview: 10,
    description: "Nike on sale",
    badge: {
      hot: true,
      new: true,
    },
    sale: 10,
    id: 1,
    vendor: "Nike",
    images: [
      {
        img: "/images/product-1-1.jpeg",
      },
      {
        img: "/images/product-1-2.jpeg",
      },
    ],
  },
  {
    name: "Nike Slim shirt",
    slug: "nike-slim-shirt",
    category: "Shirts",
    image: "/images/product-1-1.jpeg",
    price: 245,
    countInStock: 10,
    brand: "Nike",
    rating: 4.5,
    numReview: 10,
    description: "Nike on sale",
    badge: {
      hot: false,
      new: false,
    },
    sale: 10,
    id: 1,
    vendor: "Nike",
    images: [
      {
        img: "/images/product-1-1.jpeg",
      },
      {
        img: "/images/product-1-2.jpeg",
      },
    ],
  },
  {
    name: "Nike Slim shirt",
    slug: "nike-slim-shirt",
    category: "Shirts",
    image: "/images/product-1-1.jpeg",
    price: 245,
    countInStock: 10,
    brand: "Nike",
    rating: 4.5,
    numReview: 10,
    description: "Nike on sale",
    badge: {
      hot: false,
      new: true,
    },
    sale: 0,
    id: 1,
    vendor: "Nike",
    images: [
      {
        img: "/images/product-1-1.jpeg",
      },
      {
        img: "/images/product-1-2.jpeg",
      },
    ],
  },
];
