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
                  <div class="p-1 bg-warning">
                    
                    <p>
                      Our cars are delivered fully-registered with all
                      requirements completed.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="p-1 bg-danger">
                   
                    <p>
                      What’s your car worth? Receive the absolute best value for
                      your trade-in vehicle.
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
