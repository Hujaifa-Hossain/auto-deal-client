import React from "react";

const HomeExtra = () => {
  return (
    <div className="extra-bg px-1 py-5">
      <div className=" d-flex justify-content-center align-items-center text-center">
        <div className="d-flex justify-space-between align-items-center g-4">
          <div class="container overflow-hidden">
            <div class="row gx-5">
              <div class="col-lg-6">
                <div class="p-2 m-1 bg-warning">
                  <p>
                    Our cars are delivered fully-registered with all
                    requirements completed.
                  </p>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="p-2  m-1 bg-danger">
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
  );
};

export default HomeExtra;
