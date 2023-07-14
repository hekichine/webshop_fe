import { useEffect } from "react";
import Slideshow from "../Slideshow/Slideshow";
import FeatureCategories from "../CategoriSlider/FeatureCategories";
import Banner from "../Banner/Banner";

const Homepage = () => {
  useEffect(() => {
    document.title = "Home page";
  }, []);
  return (
    <main>
      <Slideshow />
      <FeatureCategories />
      <Banner />
    </main>
  );
};

export default Homepage;
