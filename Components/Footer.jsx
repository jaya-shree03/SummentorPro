import React from "react";
import logo from "../assets/images/MainLogo.png";
import "../../src/assets/style/Footer.css";
export const Footer = () => {
  return (
    <>
      <footer className="text-light" style={{ backgroundColor: "GrayText" }}>
        <div className="container footer1">
          <div className="row">
            <div className="col-sm">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "180px", height: "180px" }}
              />
              <p>
                India the 2nd most populous country in the world, is currently
                trending in the higher investment markets, climbing upwards
                towards becoming one of the biggest economies in the world. The
                current policies are massively uplifting the infrastructure &
                real estate market in the region.
              </p>
            </div>
            <div className="col-sm">
              <h2>Navigation Links</h2>
              <div className="Footer-link">
                <a src="">Home</a> <h3>|</h3>
                <a src="">Past Editions</a>
                <h3>|</h3>
                <a src="">Awards</a>
                <h3>|</h3>
                <br />
                <a src="">Nomination</a>
                <h3>|</h3>
                <a src="">Blog</a>
                <h3>|</h3>
                <a src="">Content</a>
              </div>
              <h2>Useful Links</h2>
              <a src="">Privacy Policy</a>
              <h3>|</h3>
              <a src="">Terms and Conditions</a>
              <h3>|</h3>
              <p>Content for column 2.</p>
            </div>
            <div className="col-sm">
              <h2>Contact for Marketing & Branding</h2>
              <h3>NITIKA SHAHI</h3>
              <br />
              <h3>080 4157 4773</h3>
              <h5>-------------------------</h5>
              <br />
              <h3>nitika@summentorpro.com</h3>
              <br />
              <h5>-------------------------</h5>
              <br />
              <h2>Contact for Sales & Exhibiting</h2>
              <br />
              <h3>SUHAIB AHMED</h3>
              <br />
              <h3>+91 74065 51114</h3>
              <br />
              <h5>-------------------------</h5>
              <br />
              <h3>suhaib@summentorpro.com</h3>
            </div>
          </div>
          <div className="row footer2">
            © 2022-2024 Global Smart Build Summit and Awards – 7th Edition . All
            rights reserved. Powered by Bradford, United Kingdom
          </div>
        </div>
      </footer>
    </>
  );
};
