import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://auto-deal-server.onrender.com/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h5 className="text-center my-4">
        What Customers <span className="text-warning">Say</span>
      </h5>
      <div className="cars-container">
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
