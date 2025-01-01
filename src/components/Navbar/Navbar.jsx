import React, { useState } from "react";
import Banner from "../Banner/Banner";
import "./Navbar.css";
import Visitbtn from "../Visitbtn/Visitbtn";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Banner />
      <section className="navbar">
        <h1>VILLA</h1>
        <div className="navlinks">
          <ul className="nav_items">
            <li>Home</li>
            <li>Properties</li>
            <li>Property Details</li>
            <li>Contact Us</li>
          </ul>

          <Visitbtn />
        </div>

        <button className="bars" onClick={() => setShow(!show)}>
          <i className="fa-solid fa-bars fa-2xl"></i>
        </button>

        <div className={show ? "nav_menu active" : "nav_menu"}>
          <ul>
            <li>Home</li>
            <li>Properties</li>
            <li>Property Details</li>
            <li>Contact Us</li>
          </ul>
          <Visitbtn />
        </div>
      </section>
    </>
  );
};

export default Navbar;
