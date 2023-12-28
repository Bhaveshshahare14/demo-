// VideoDetails.js

import React from "react";

function VideoDetails({ match }) {
  const courseId = match.params.id; // assuming your route includes a parameter for course ID

  // Fetch video details based on courseId from your data

  return (
    <div>
      {/* Display detailed video information here */}
      <h2>Video Details for Video ID: {courseId}</h2>
      {/* Add more details as needed */}
    </div>
  );
}

export default VideoDetails;
