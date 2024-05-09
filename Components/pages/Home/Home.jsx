import React from "react";
//import videoHome from "../../assets/images/Video-with-venue.mp4";
import videoHome from "../../../assets/images/Video-with-venue.mp4";

import "../../../assets/style/HomeVideo.css";

import { PastEditionsImg } from "./PastEditionsImg";
import { DevelopHome } from "./DevelopHome";
import { KeyHighlights } from "./KeyHighlights";
import { EnquireNow } from "./EnquireNow";

export const Home = () => {
  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={videoHome} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Add other content on top of the video if needed */}
      </div>
      <PastEditionsImg />
      <DevelopHome />
      {/* <KeyHighlights /> */}
      <EnquireNow />
    </>
  );
};
