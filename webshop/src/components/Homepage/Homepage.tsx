import { useEffect } from "react";
import Slideshow from "../Slideshow/Slideshow";
import FeatureCategories from "../CategoriSlider/FeatureCategories";
import Banner from "../Banner/Banner";

import MasonryProduct from "../MasonryProductGrid/MasonryProduct";

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
    </main>
  );
};

export default Homepage;
