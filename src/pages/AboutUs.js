import React from "react";

import "../App.css";

function AboutUs() {
  return (
    <div>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h2 className="header center black-text">Fallah</h2>
          <div className="row center">
            <h5 className="header col s12 light">
              Our mission is to make every kind of plants knowing by everyone.
            </h5>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="card col s12 m4 cardF">
              <img
                src="https://t6.rbxcdn.com/69d42918b87981cd61bd0ecae48d91a4"
                width="150"
              />
              <div>
                {" "}
                <p className=" ">
                  Our Fallah make it easy for everyone. It will prevent you from
                  wasting your money!.
                </p>{" "}
              </div>
            </div>

            <div class="card col s12 m4 cardF">
              <img
                class=" "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlg3-cJnljUnlKsaGHV4JQoyWcekV-hQpLvEmGlvSCIrdqkDCC"
                width="100"
              />

              <div>
                {" "}
                <p className=" ">
                  With Fallah guidance and over 391,000 different types of plants
                  we help you to make smarter decisions.
                </p>{" "}
              </div>
            </div>

            <div class="card col s12 m4 cardF">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROAQCDjOSMXRvwYdWzUhajUJv_8tjPIXooICRz7NbTZCvSIinH"
                  width="150"
                />
                <div>
                  {" "}
                  <p className=" ">
                    With Fallah you can see the nearest place plantation to you.
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
