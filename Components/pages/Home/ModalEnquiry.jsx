import React from "react";
import "../../../assets/style/EnquiryModal.css";
const ModalEnquiry = () => {
  return (
    <div className="modal">
      <div className="modal_container">
        <div className="modal_close">&times;</div>
        <div className="modal_title">Title</div>
        <div className="modal_content">Content</div>
        <div className="modal_footer">
          <button className="btn">Close</button>
        </div>
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default ModalEnquiry;
