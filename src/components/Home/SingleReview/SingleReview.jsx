import React from "react";
import Rating from "react-rating";

const SingleReview = (props) => {
  const { _id, user, email, review, stars } = props.review;
  return (
    <div>
      <div class="card bg-dark border-light">
        <div class="card-body">
          <p class="card-text m-0">{user}</p>
          <p class="card-text">
            <small>{email}</small>
          </p>
          <p class="card-text">{review}</p>
          <p class="card-text">
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
