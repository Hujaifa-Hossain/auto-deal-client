import React from "react";

const HomeExtra = () => {
  return (
    <div>
      <div className="card bg-dark text-white">
        <img
          src="https://image.freepik.com/free-vector/car-led-lights-realistic-composition-with-view-night-road-silhouettes-automobile-traffic-lights-illustration_1284-28531.jpg"
          alt="..."
        />
        <div className="card-img-overlay d-flex justify-content-center align-items-center text-center">
          <div className="d-flex justify-content-center align-items-center">
            <div class="container overflow-hidden">
              <div class="row gx-5">
                <div class="col-lg-6">
                  <div class="p-3 bg-warning">
                    <h3 className="text-dark">Are You looking for a car?</h3>
                    <p>
                      Our cars are delivered fully-registered with all
                      requirements completed. We’ll deliver your car wherever
                      you want in required time for you.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="p-3 bg-danger">
                    <h3 className="text-dark">Do You want to sell a car?</h3>
                    <p>
                      What’s your car worth? Receive the absolute best value for
                      your trade-in vehicle. We even handle all paperwork.
                      Schedule your appointment today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExtra;
