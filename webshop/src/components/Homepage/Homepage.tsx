import { useEffect } from "react";
import Slideshow from "../Slideshow/Slideshow";
import FeatureCategories from "../CategoriSlider/FeatureCategories";
import Banner from "../Banner/Banner";

import MasonryProduct from "../MasonryProductGrid/MasonryProduct";
import Quickview from "../../Common/Modal/Quickview";
import { ProductItemProps } from "../../Common/Props/ProductProps";

const Homepage = () => {
  useEffect(() => {
    document.title = "Home page";
  }, []);
  return (
    <main>
      <Slideshow />
      <FeatureCategories />
      <Banner />
      <MasonryProduct />
      <Quickview {...pr[0]} />
    </main>
  );
};

export default Homepage;

const pr: ProductItemProps[] = [
  {
    id: "pr-1",
    image_1: "/product-1-1.jpeg",
    image_2: "/product-1-2.jpeg",
    pr_title: "Seeds of Change Organic Quinoa, Brown",
    rate: 4.5,
    count_rate: 90,
    vendor: "NestFood",
    category: "Nestify",
    cost: 245.8,
    sale: 14,
    badge: {
      sale: true,
      hot: true,
      new: false,
    },
  },
];
