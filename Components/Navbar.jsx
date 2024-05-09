import React, { useState } from "react";
// import Modal from "react-modal";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { EnquireNow } from "./pages/Home/EnquireNow";
import ModalEnquiry from "./pages/Home/ModalEnquiry";
//import Modal from "./pages/Home/EnquireNow";

export const Navbar = () => {
  //new try
  // const [openModal, setOpenModal] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showComponent, setShowComponent] = useState(false); // State to control whether to show the component or not

  const handleClick = () => {
    setShowComponent(true); // Set showComponent state to true when button is clicked
  };
  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <nav>
        <Link to="/" className="title">
          <img
            src="../../src/assets/images/Logo-website-header-1536x488.png"
            style={{ width: "500px", height: "150px" }}
          />
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/past">Past Editions</NavLink>
          </li>
          <li>
            <NavLink to="/award">Award</NavLink>
          </li>
          <li>
            <NavLink to="/nomination">Nomination</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            {/* <NavLink to="/enquire" className="enq-btn">Enquire Now</NavLink> */}
            {/* <button className="enq-btn" onClick={<EnquireNow />}> */}
            {/* <button className="enq-btn" onClick={()=>setOpenModal(!openModal)}>
              Enquire Now
            </button> */}
            <button className="enq-btn" onClick={handleClick}>
              Enquire Now
            </button>
            {/* {showComponent && <EnquireNow />} */}
            {showComponent && <ModalEnquiry />}
            {/* {isOpen && <ModalEnquiry />} */}
          </li>
        </ul>
      </nav>

      {/* <Modal isOpen={openModal} onClose={()=>setOpenModal(false)}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero recusandae libero culpa temporibus deserunt voluptatem fugit harum corrupti cupiditate sunt eum at eligendi, facilis pariatur ex ad illum odit sint!</p>
      </Modal> */}

      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div
          style={{
            textAlign: "right",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={closeModal}
        >
          X
        </div>
        <h2>Reach Us</h2>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email " />
        <input type="text" placeholder="Phone No" />
        <input type="text" placeholder="Company Name" />
        <textarea placeholder="Message" />

        <button onClick={closeModal}>Submit</button>
      </Modal> */}
    </>
  );
};
