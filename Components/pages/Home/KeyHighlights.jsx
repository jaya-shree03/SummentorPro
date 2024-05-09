import React from "react";

import img01 from "../../../assets/images/jtyj.jpg";
import img02 from "../../../assets/images/13.png";
import img03 from "../../../assets/images/11.png";
import img04 from "../../../assets/images/hjgui.jpg";

export const KeyHighlights = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        What Happens At Global Smart Build Summit & Awards ?
      </h2>
      <h3 style={{ textAlign: "center" }}>Key Highlights</h3>

      <div class="card mb-3" style="max-width: 540px;"> 
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">
                Unveiling of the Grand Event & Inauguration by Government of
                India
              </p>
            </div>
            <div class="col-md-4">
              <img src={img01} class="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <p>Unveiling of the Grand Event & Inauguration by Government of India</p>
        <img src={img01} alt="" style={}/>
      </div> */}
    </>
  );
};
