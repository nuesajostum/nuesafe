import React from "react";
import "./news.css";
import { Link } from "react-router-dom";
import News from "../../Assets/Member Icon.png";
import facebook from "../../Assets/WELCOME.png";
import Nuesa from "../../Assets/NSAI.png";
import women1 from "../../Assets/Women 1.jpg";

const news = () => {
  return (
    <div className="container-fluid main-news section">
      <div className="main-news-row">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6">
          <img className="thumb mb-3" src={Nuesa} alt="" />
          <h3>
            <Link to="/News1" className="link-news">Nuesa Skill Acquisition Program</Link>
          </h3>
        </div>
        <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
              <div className="image image-sm mb-1">
                <img className="thumb" src={facebook} alt="" />
              </div>
              <h3 className="mb-4">
                <Link to="" className="link-news">Nuesa Skill Acquisition Program</Link>
              </h3>
              <div className="image image-sm mb-1">
                <img className="thumb" src={News} alt="" />
              </div>
              <h3 className="mb-4">
                <Link to="" className="link-news">Nuesa Skill Acquisition Program</Link>
              </h3>
            </div>

            <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6">
              <div className="image image-sm mb-1">
                <img className="thumb" src={News} alt="" />
              </div>
              <h3 className="mb-4">
                <Link to="" className="link-news">Nuesa Skill Acquisition Program</Link>
              </h3>
              <div className="image image-sm mb-1">
                <img className="thumb" src={News} alt="" />
              </div>
              <h3 className="mb-4">
                <Link to="" className="link-news">Nuesa Skill Acquisition Program</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid section">
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                
            </div>

            <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="section trending mt-4">
                <div className="section-title">
                    <span>Trending</span>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                        <img className="thumb" src={women1} alt="" />
                    </div>
                    <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                    <Link to="" className="link-news">
                        schorlaship
                    </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                        <img className="thumb" src={Nuesa} alt="" />
                    </div>
                    <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                    <Link to="" className="link-news">
                        schorlaship
                    </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                        <img className="thumb" src={Nuesa} alt="" />
                    </div>
                    <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                    <Link to="" className="link-news">
                        schorlaship
                    </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                        <img className="thumb" src={Nuesa} alt="" />
                    </div>
                    <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                    <Link to="" className="link-news">
                        schorlaship
                    </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                        <img className="thumb" src={Nuesa} alt="" />
                    </div>
                    <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                    <Link to="" className="link-news">
                        schorlaship
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default news;
