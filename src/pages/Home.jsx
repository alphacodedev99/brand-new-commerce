import React, { useEffect, useState } from "react";
import {
  CategorySection,
  DailyCategory,
  TopCategory,
  InfoSection,
  Recommend,
  ExtraServices,
} from "../components";

// fetch product here
import { fetchCategory } from "../utils/fetchPerCategory";
// images
import { firstSectionBg, secondSectionBg } from "../assets";

function Home() {
  const [firstSection, setFirstSection] = useState([]);
  const [secondSection, setSecondSection] = useState([]);
  useEffect(() => {
    fetchCategory("laptops").then((data) => setFirstSection(data.products));
    fetchCategory("smartphones").then((data) =>
      setSecondSection(data.products)
    );
  }, []);

  return (
    <div>
      <TopCategory />
      <DailyCategory />
      <CategorySection
        item={firstSection}
        bgImg={firstSectionBg}
        title={"Home and outdoor"}
      />
      <CategorySection
        item={secondSection}
        bgImg={secondSectionBg}
        title={"Consumer electronics and gadgets"}
      />
      <InfoSection />
      <Recommend />
      <ExtraServices />
    </div>
  );
}

export default Home;
