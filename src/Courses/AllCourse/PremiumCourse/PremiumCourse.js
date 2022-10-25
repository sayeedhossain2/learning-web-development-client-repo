import React from "react";
import { useLoaderData } from "react-router-dom";
import PremiumCourseDetails from "./PremiumCourseDetails";

const PremiumCourse = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      {categories.map((category) => (
        <PremiumCourseDetails
          key={category.id}
          category={category}
        ></PremiumCourseDetails>
      ))}
    </div>
  );
};

export default PremiumCourse;
