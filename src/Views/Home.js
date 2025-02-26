import React from "react";
import { Navbar } from "./Navbar";

export function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div>
        <main className="container">
          <article className="border border-5">
            <h3 className="text-center">WELCOME TO PARADISE PARKERS</h3>
            <p className="text-info text-center"></p>
            <p className="text-info text-center"></p>
            <div className="row">
              <div className="col bg-black">
                <h2>VIP Rewards Plus</h2>
                <ul className="padding list-group">
                  <li className="list-group-item">
                    Exclusive discounts and promotions
                  </li>
                  <li className="list-group-item">
                    Access to premium parking spaces
                  </li>
                  <li className="list-group-item">
                    Special offers and rewards
                  </li>
                </ul>
              </div>
              <div className="col bg-dark">
                <h2>Aviation Services</h2>
                <ul className="padding list-group">
                  <li className="list-group-item">
                    Secure hangars for your aircraft
                  </li>
                  <li className="list-group-item">
                    Convenient fueling services
                  </li>
                  <li className="list-group-item">
                    Expert maintenance and repair services
                  </li>
                </ul>
              </div>
              <div className="col bg-black">
                <h2>Customer Care</h2>
                <ul className="padding list-group">
                  <li className="list-group-item">24/7 customer support</li>
                  <li className="list-group-item">Concierge services</li>
                  <li className="list-group-item">Personalized attention</li>
                </ul>
              </div>
            </div>
            <br /> <h2>Why Choose Us?</h2>
            <br />
            <ul className="list-group">
              <li className="list-group-items">
                <span1>Security:</span1>
                <u>
                  {"{"}" "{"}"}
                  Our state-of-the-art security measures ensure the safety of
                  your vehicle.
                </u>
              </li>
              <li className="list-group-items">
                <span1>Premium Facilities:</span1>
                <u>
                  Indoor, outdoor, and climate-controlled environments ensure
                  optimal protection.
                </u>
              </li>
              <li className="list-group-items">
                <span1>Customer Care:</span1>
                <u>
                  Our dedicated team is here to help you with any questions or
                  concerns.
                </u>
              </li>
              <li className="list-group-items">
                <span1>Aviation Services:</span1>
                <u>
                  Fueling, maintenance, and secure hangars for your aircraft.
                </u>
              </li>
            </ul>
          </article>
          <br />

          <div className="card">
            <img
              className="card-img-top"
              width="50px"
              height={211}
              src="assets\images\header1_cr4.png"
            />
            <div className="card-body">
              <h3 className="card-title" />
            </div>
            <div className="row bg-dark text-endheading-3">
              <div
                className="card col text-end bg-black brain text-white padding-5"
                id="mixin-example"
              >
                <h2>The Best Space Place</h2>
                <p>
                  "Where Your Vehicle's Stay is a Joyride"
                  <br />
                  "More than Parking, It’s VIP Care"
                  <br />
                  "Your Vehicle's Home Away from Home"
                  <br />
                </p>
                <p>
                  Introducing "Stow and Go Short-Term Parking". Experience
                  efficiency and top-notch service at any one of our parking
                  facilities. At Paradise Parkers, our easy access lots and
                  swift in-and-out gate access guarantees your short-term
                  parking is stress-free. Ready to park smart and travel easy?
                  Choose Paradise Parkers for unmatched vehicle care and
                  convenience.
                </p>
              </div>
              <div className="col container brains brain2 heading">
                <div className="card container">
                  <div className="card-body bg-black">
                    <h1 className="text-end pullUp text-end text-info">
                      INDOOR
                    </h1>
                    <img
                      alt="ParkingGarage"
                      className="card-img-top"
                      src="4.jpg"
                    />
                    <a href="cat.html"></a>
                  </div>
                  <a href="cat.html"></a>
                </div>
                <a href="cat.html"></a>
              </div>
              <a href="cat.html"></a>
              <div className="col bg-black brains brain2">
                <a href="cat.html"></a>
                <div className="card container text-shadow">
                  <a href="cat.html"></a>
                  <div className="card-body bg-black">
                    <a href="cat.html">
                      <h1 className="text-end text-info text-end border-border">
                        OUTDOOR
                      </h1>
                      <img
                        alt="ParkingGarage"
                        className="card-img-top"
                        src="11.jpg"
                      />
                    </a>
                    <a href="cat.html">
                      <button className="button" id="mixin-button">
                        ClICK HERE
                      </button>
                    </a>
                  </div>
                  <a href="cat.html"></a>
                </div>
                <a href="cat.html"></a>
              </div>
              <a href="cat.html"></a>
              <div className="row bg-black brains brain2">
                <a href="cat.html"></a>
                <div className="card container padding-3">
                  <a href="cat.html"></a>
                  <div className="card-body bg-secondary text-info container">
                    <a href="cat.html">
                      <h1 className="text-info text-end">SECURITY</h1>
                      <img
                        alt="ParkingGarage"
                        className="card-img-top container"
                        height="200px"
                        width="100%"
                        src="3.png"
                      />
                    </a>
                    <a href="cat.html"></a>
                  </div>
                  <a href="cat.html"></a>
                </div>
                <a href="cat.html"></a>
              </div>
              <a href="cat.html">
                <h3 className="card-title text-info">
                  Meet Our Newest Team Member
                </h3>
                Join us in welcoming Keroppi,
                <br /> our new parking guru!
                <br /> He is ready to take parking to the next level. <br />
              </a>
            </div>
            <a href="cat.html">
              <button
                className="button btn-close bg-info border border-dark"
                data-bs-dismiss="alert"
              />
            </a>
          </div>
          <a href="cat.html"></a>
        </main>
        <a href="cat.html"></a>
      </div>
    </>
  );
}
