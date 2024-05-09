import React from "react";
import { EnquireNow } from "./Home/EnquireNow";
import { Modal } from "bootstrap";
import ModalEnquiry from "./Home/ModalEnquiry";
import img01 from "../../assets/images/PastEditions/Ashutosh.jpg";
import img02 from "../../assets/images/PastEditions/GrandEvent.jpg";
import img03 from "../../assets/images/PastEditions/kalyan.jpg";
import img04 from "../../assets/images/PastEditions/kaushal.png";
import img05 from "../../assets/images/PastEditions/Manish.jpg";
import img06 from "../../assets/images/PastEditions/sanjay.jpg";
import "../../assets/style/PastEdit.css"

export const PastEditions = () => {
  // const data = [
  //   {
  //     name: `Mr.Sanjay Pathak`,
  //     text: `Farmer Commissioner of DDA`,
  //     image: `${img01}`,
  //   },
  //   {
  //     name: `Mr.Sanjay Pathak`,
  //     text: `Farmer Commissioner of DDA`,
  //     image: `${img02}`,
  //   },
  //   {
  //     name: `Shri`,
  //     text: `Farmer Commissioner of DDA`,
  //     image: `${img03}`,
  //   },
  //   {
  //     name: `Mr.Sanjay Pathak`,
  //     text: `Farmer Commissioner of DDA`,
  //     image: `${img04}`,
  //   },
  //   {
  //     name: `Mr.Ashutosh`,
  //     text: `Farmer Commissioner of DDA`,
  //     image: `${img05}`,
  //   },
  //   {
  //     name: `Mr.Sanjay Pathak`,
  //     text: `Farmer Commissioner of DDA`,
  //     image: `${img06}`,
  //   },
  // ];
  return (
    <div className="card-container">
      <div className="card">
        <img src={img01} />
        <div className="card-content">
          <h3>Card 1</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            obcaecati at eaque ad maxime dolor quasi saepe excepturi commodi
            aspernatur.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={img02} />
        <div className="card-content">
          <h3>Card 2</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            obcaecati at eaque ad maxime dolor quasi saepe excepturi commodi
            aspernatur.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={img03} />
        <div className="card-content">
          <h3>Card 3</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            obcaecati at eaque ad maxime dolor quasi saepe excepturi commodi
            aspernatur.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={img04} />
        <div className="card-content">
          <h3>Card 4</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            obcaecati at eaque ad maxime dolor quasi saepe excepturi commodi
            aspernatur.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={img05} />
        <div className="card-content">
          <h3>Card 5</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            obcaecati at eaque ad maxime dolor quasi saepe excepturi commodi
            aspernatur.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={img06} />
        <div className="card-content">
          <h3>Card 6</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            obcaecati at eaque ad maxime dolor quasi saepe excepturi commodi
            aspernatur.
          </p>
        </div>
      </div>
    </div>
  );
};
