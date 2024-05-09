import React, { useState } from "react";
import image01 from "../../../assets/images/PastEditionsSupportedBy/Min of Housing.webp";
import image02 from "../../../assets/images/PastEditionsSupportedBy/Min of Rural.webp";
import image03 from "../../../assets/images/PastEditionsSupportedBy/Min of Macro.webp";
import image04 from "../../../assets/images/PastEditionsSupportedBy/MHADA.webp";
import image05 from "../../../assets/images/PastEditionsSupportedBy/Delhi Dev.webp";
import image06 from "../../../assets/images/PastEditionsSupportedBy/sivaghi.webp";
import image07 from "../../../assets/images/PastEditionsSupportedBy/Government of Karnataka.webp";
import image08 from "../../../assets/images/PastEditionsSupportedBy/Environment.webp";
import "../../../assets/style/HomeVideo.css";
import Modal from "react-modal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// ('import ImageCarousel from "./ImageCarousel";');

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "antiquewhite",
    border: "solid 1px brown",
    height: "80%",
    width: "50%",
  },
};

export const PastEditionsImg = () => {
  const [galleryModalIsOpen, setGalleryModalIsOpen] = useState(false);
   const handleModal = () => {
    // setGalleryModalIsOpen(e);
    setGalleryModalIsOpen(!galleryModalIsOpen);
  };
  return (
    <>
      <div className="pastEdImg">
        <h1>Past Editions Supported By</h1>
        <div className="imgDiv" onClick={() => handleModal()}>
          <img className="pastImg" src={image01} alt="Image01" />
          <img className="pastImg" src={image02} alt="Image02" />
          <img className="pastImg" src={image03} alt="Image03" />
          <img className="pastImg" src={image04} alt="Image04" />
          <img className="pastImg" src={image05} alt="Image05" />
          <img className="pastImg" src={image06} alt="Image06" />
          <img className="pastImg" src={image07} alt="Image07" />
          <img className="pastImg" src={image08} alt="Image08" />
        </div>
      </div>

      <Modal isOpen={galleryModalIsOpen} style={customStyles}>
        <div
          style={{
            textAlign: "right",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => handleModal()}
        >
          X
        </div>
        <div>
          <Carousel showThumbs={false}>
            <div>
              <img src={image01} alt="Image 1" />
            </div>
            <div>
              <img src={image02} alt="Image 2" />
            </div>
            <div>
              <img src={image03} alt="Image 3" />
            </div>
            <div>
              <img src={image04} alt="Image 4" />
            </div>
            <div>
              <img src={image05} alt="Image 4" />
            </div>

            <div>
              <img src={image06} alt="Image 4" />
            </div>

            <div>
              <img src={image07} alt="Image 4" />
            </div>

            <div>
              <img src={image08} alt="Image 4" />
            </div>
          </Carousel>
        </div>
      </Modal>
    </>
  );
};
