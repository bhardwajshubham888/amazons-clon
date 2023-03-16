import React, { useState } from "react";
import image from "./logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../StateProvider/StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      {/* logo on the left */}
      <Link to="/">
        <img className="headerLogo" src={image} />
      </Link>
      {/*Searchbox */}
      <div className="searchBar">
        <input type="text" className="searchInput" />

        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="searchIcon"
        ></FontAwesomeIcon>
      </div>
      {/*3 links*/}

      <div className="headNavBar">
        {/*  1st Link */}

        <Link to="/login" className="headerLink">
          <div className="headerOption">
            <span className="headerOption1">Hello, </span>
            <span className="headerOption2">Sign In</span>
          </div>
        </Link>
        {/*  2nd Link */}
        <Link to="/" className="headerLink">
          <div className="headerOption">
            <span className="headerOption1">Returns</span>
            <span className="headerOption2">& Orders</span>
          </div>
        </Link>
        {/* 3rd Link */}
        <Link to="/" className="headerLink">
          <div className="headerOption">
            <span className="headerOption1">Your </span>
            <span className="headerOption2">Prime</span>
          </div>
        </Link>
        {/* 4th Link */}
        <Link to="/checkout" className="headerLink">
          <div className="headerBasket">
            {/* Shopping basket icon */}
            <FontAwesomeIcon
              icon={faCartPlus}
              className="cartIcon"
            ></FontAwesomeIcon>
            {/*Number of items in the basket */}
            <span className="headerOption2 headerBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/*Basket icon with number */}
    </div>
  );
}
export default Header;
