import { useEffect } from "react";
import Slideshow from "../Slideshow/Slideshow";
import FeatureCategories from "../CategoriSlider/FeatureCategories";
import Banner from "../Banner/Banner";

import MasonryProduct from "../MasonryProductGrid/MasonryProduct";
import Quickview from "../../Common/Modal/Quickview";
import { Product } from "../../Types/Product";

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
      <Quickview />
    </main>
  );
};

export default Homepage;
