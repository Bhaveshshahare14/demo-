import React from 'react';
import '../css/relatedcourse.scss';
import Carousel from 'better-react-carousel';
import populercoursesjson from '../json/all_courses.json';
import { Link } from 'react-router-dom';


const RelatedCourses = () => {
  const popjsoninfo = populercoursesjson;
  console.log(popjsoninfo);

  const navigateToCourseDetailPage = (courseId) => {
    window.location.href = `/CourseDetailPage/${courseId}`;
  };

  return (
    <div className='container-fluid  related-course'>
      <h1 className='popular-courses-h1'>Related Courses You May Like</h1>

     
          <Carousel cols={4} rows={1} gap={40} loop>
            {popjsoninfo.all_courses.map((course, index) => (
              <Carousel.Item key={index}>
              
                  <div className='card'>
                    <Link to={`/CourseDetailPage/${course.id}`} style={{ textDecoration: 'none' }}>
                    <div class="img-hover-zoom">
                      <img
                        className='card-img-top-20'
                        src={require(`../assest/${course.imageKey || 'default-image.jpg'}`)}
                        alt={`Card ${index + 1}`}
                        onClick={() => navigateToCourseDetailPage(course.id)}
                      />
                      </div>
                    </Link>
                    <div className='card-body'>
                     
                      <h5 className='card-title'>{course.title}</h5>

                      <div className='card-text'>
                        <div className='row-Courses'>
                          <div>{course.lesson}</div>
                          <div>{course.duration}</div>
                          <div>{course.level}</div>
                        </div>
                        <hr  className='hr'/>
                      </div>
                      <div className='row-Courses2'>
                        <div className='row comb'>
                          <div className='col-7 col-sm-7 col-md-7 instructor'>{course.instructor}</div>
                          <div className='col-5 col-sm-5 col-md-5 fees'>
                            <img className="tagimg" src={require(`../assest/${course.fees}`)} alt={`SVG ${index + 1}`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
              </Carousel.Item>
            ))}
          </Carousel>
      
      
    </div>
  );
};

export default RelatedCourses;