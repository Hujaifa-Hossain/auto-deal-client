import React from "react";

const HomeBanner = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://motors.stylemixthemes.com/wp-content/uploads/2021/03/01-24-825x483.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Tesla Roadster 2021</h5>
              <p>
              2021 NEW Tesla Roadster KILLER KING
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://motors.stylemixthemes.com/wp-content/uploads/2021/03/01-20-825x483.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>LEXUS RX-350 2021</h5>
              <p>
              Lexus RX-350 White Leather Harman Kardon
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://motors.stylemixthemes.com/wp-content/uploads/2021/03/01-7-825x483.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>BMW 4-series 2021</h5>
              <p>
              2021 NEW BMW M440i FOR THE REAl RACE
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
