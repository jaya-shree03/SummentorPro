import React from "react";
import DevLogo from "../../../assets/images/COVER-PIC.png";

export const DevelopHome = () => {
  return (
    <>
      <div class="container" style={{ alignItems: "center", width: "100%" }}>
        <div class="row">
          <div class="col-sm-4" style={{ paddingRight: "100px" }}>
            <img
              style={{ width: "450px", height: "500px" }}
              src={DevLogo}
              alt=""
            />
          </div>
          <div class="col-sm-4" style={{ width: "550px", height: "400px" }}>
            <h2>Development, Redevelopment and Regeneration</h2>
            <p>
              GSBS <b> (Global Smart Build Summit and Awards – 7th Edition)</b>
              aims to navigate the dynamic landscape, offering a comprehensive
              overview that encapsulates current market dynamics, regulatory
              shifts, economic influences, and evolving consumer preferences. We
              hope to bring every stakeholder involved in the construction
              industry to a common platform where they can explore the
              regulatory framework governing sustainable development, shedding
              light on government policies and legal considerations that shape
              the industry and participate in advanced innovation driven
              procurement goals laid down in the form of pre-scheduled B2B
              meetings.
            </p>
            <button style={{ border: "2px solid green", backgroundColor:"white", margin:"20px" ,padding:"0px 40px", fontSize:"20px"}}>Read More</button>
            <button style={{ border: "2px solid green", backgroundColor:"white", margin:"20px" ,padding:"0px 40px", fontSize:"20px"}}>Download Brochure</button>
          </div>
        </div>
      </div>
    </>
  );
};
