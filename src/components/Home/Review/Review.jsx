import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://shielded-brushlands-06342.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h3 className="text-center my-4">
        What Customers <span className="text-warning">Say</span>
      </h3>
      <div className="cars-container">
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
