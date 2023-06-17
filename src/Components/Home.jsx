import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark">
        <img src="https://www.kotak.com/content/dam/Kotak/herosliderbanner/how-credit-cards-enhance-your-shopping-experience.jpg" className="card-img" alt="Background"
        height="390px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
          <h5 className="card-title display-3 fw-border mb-0"><b>NEW SEASON ARRIVALS</b></h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
