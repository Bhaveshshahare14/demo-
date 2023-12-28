import React from "react";
import CoursesDetailsBanner from "../CoursesDetailsBanner";
import ListCourses from "../ListCourses";
import Instructor from "../Instructor";
import Subscribe from "../Subscribe";

function CoursesPages() {
  return (
    <div>
      <CoursesDetailsBanner />
      <ListCourses />
      <Instructor />
      <Subscribe/>
     
    </div>
  );
}
export default CoursesPages;
