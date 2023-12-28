// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import "../css/notification.scss"; // Import the notification styles

// const Notification = ({ onClose }) => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     // Fetch course data from an API or any data source
//     // Replace the placeholder API URL with your actual API endpoint
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => setCourses(data))
//       .catch((error) => console.error("Error fetching courses:", error));
//   }, []);

//   return (
//     <div className="container dv-notification">
//       <div className="notification-modal">
//         <div className="notification-content">
//           <h1>Messages</h1>
//           <hr></hr>
//           {courses.map((course) => (
//             <div key={course.id}>
//               <p>
//                 You have been assigned the course {course.name}. To view the
//                 course, follow the link below-
//                 <br></br>
//                 <br></br>
//               </p>
//               <hr></hr>
//               <p>
//                 Hurry Up! Grab the Offer.....
//                 Only {course.hoursLeft} hours Left.......
//               </p>
//             </div>
//           ))}
//         </div>

//         <div className="show-more">
//           <a href="#" className="show-more-link">
//             Show More
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// Notification.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };

// export default Notification;


import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../css/notification.scss"; // Import the notification styles

const Notification = ({ onClose }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleClose = () => {
    // Perform any cleanup or additional actions if needed
    onClose();
  };

  return (
    <div className="container dv-notification">
      <div className="notification-modal">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <div className="notification-content">
            <h1>Messages</h1>
            <hr></hr>
            {courses.map((course) => (
              <div key={course.id}>
                <p>
                  You have been assigned the course {course.name}. To view the
                  course, follow the link below-
                  <br></br>
                  <br></br>
                </p>
                <hr></hr>
                <p>
                  Hurry Up! Grab the Offer.....
                  Only {course.hoursLeft} hours Left.......
                </p>
              </div>
            ))}
          </div>
        )}
        <div className="show-more">
          <a href="#" className="show-more-link" onClick={handleClose}>
            Show More
          </a>
        </div>
      </div>
    </div>
  );
};

Notification.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Notification;