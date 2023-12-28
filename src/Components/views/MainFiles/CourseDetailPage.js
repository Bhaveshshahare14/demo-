import React from 'react'


import CourseBannerImage from '../CourseBannerImage';
import CoursesDetails from '../CoursesDetails';
import Subscribe from '../Subscribe';
import Accordion1 from '../Accordion1';
import RelatedCourse from '../RelatedCourse';
const CourseDetailPage = () => {
  return (
    <div>
      <CourseBannerImage/>     
       <CoursesDetails/>
      <Accordion1/>
      <RelatedCourse/>
      <Subscribe/>
    </div>
  )
}

export default CourseDetailPage
