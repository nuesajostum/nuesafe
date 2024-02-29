import React from "react";
import "./news.css";
import { Link } from "react-router-dom";
import Nuesa from "../../Assets/NSAI.png";
import women1 from "../../Assets/Women 1.jpg";

const News1 = () => {
  return (
    <div className="container-fluid main-news section">
      <div className="main-news-row">
      <div className="row">
        <div className="col-md-8 col-lg-8 ">
          <h1>NUESA Skills Acquisition Initiative</h1>
          <small>12th January, 2023</small>
          <p className="mt-4 summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <img src={Nuesa} alt="" className="mt-3 thumb" />
          <div className="story mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 ">
            <div className="section trending mt-4">
              <div className="section-title">
                <span>Trending</span>
              </div>
              <div className="row">
                <div className="col-md-4 col-lg-4 ">
                  <img className="thumb" src={women1} alt="" />
                </div>
                <div className="col-md-8 col-lg-8 ">
                  <Link to="" className="link-news">Women Free Tech Training Incubation, Grant and Entrepreneurship</Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-lg-4 ">
                  <img className="thumb" src={Nuesa} alt="" />
                </div>
                <div className="col-md-8 col-lg-8 ">
                  <Link to="" className="link-news">schorlaship</Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-lg-4 ">
                  <img className="thumb" src={Nuesa} alt="" />
                </div>
                <div className="col-md-8 col-lg-8 ">
                  <Link to="" className="link-news">schorlaship</Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-lg-4 ">
                  <img className="thumb" src={Nuesa} alt="" />
                </div>
                <div className="col-md-8 col-lg-8 ">
                  <Link to="" className="link-news">schorlaship</Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-lg-4 ">
                  <img className="thumb" src={Nuesa} alt="" />
                </div>
                <div className="col-md-8 col-lg-8 ">
                  <Link to="" className="link-news">schorlaship</Link>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default News1;
