import React from "react";
import Rating from "react-rating";

const SingleReview = (props) => {
  const { user, email, review, stars } = props.review;
  return (
    <div>
      <div className="card bg-dark border-light">
        <div className="card-body">
          <p className="card-text m-0">{user}</p>
          <p className="card-text">
            <small>{email}</small>
          </p>
          <p className="card-text">{review}</p>
          <p className="card-text">
            {stars} Star by{" "}
            <small
              className="
          text-muted"
            >
              {user}
            </small>{" "}
          </p>
          <Rating
            className="d-block text-end"
            readonly
            initialRating={stars}
            fullSymbol="fas fa-star text-warning"
            emptySymbol="far fa-star"
          ></Rating>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
