import React, { useState } from "react";
import Modal from "react-modal";
import "../../../assets/style/EnquiryModal.css";

export const EnquireNow = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
    // isOpen && (
    // <div className="react-modal-overlay">
    //   <div className="react-modal-wrapper">
    //     <div className="react-modal-content">{children}
    //     <button type="button" onClick={onClose}>Close</button>
    //     </div>
    //   </div>
    //   </div>)
  );
};

{
  /* <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Modal Content</h2>
        <button onClick={closeModal}>Close Modal</button>
      </Modal> */
}
