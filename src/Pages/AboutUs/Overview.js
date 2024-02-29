import React from "react";
import "./aboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import skill from "../../Assets/NSAI.png";

const AboutUs = () => {
  return (
    <div>
      <div className="container-fluid overview-container d-flex ">
        <div className="row overview-box-area justify-content-around">
          <div className="col-lg-6 overview-left-box d-flex flex-column">
                <div className="overview">
                  <h2>What is NUESA ?</h2>
                  <h5>Overview</h5>
                  <p>
                    Nigerian Universities Engineering Students’ Association
                    (NUESA) is the students wing of Nigerian Society of
                    Engineers (NSE). This is the National, Active, Progressive
                    and Democratic Association formed for the sole purpose of
                    promoting the welfare and interest of her members. NUESA is
                    aimed at creating a platform where engineering students can
                    learn from practicing Engineers from diverse fields of
                    Engineering, so as to help in shaping the course of
                    technological development in Nigeria by encouraging and
                    carrying out industrial projects, offering useful and
                    constructive suggestions to the government and the bodies
                    responsible for the making of the nation's technological
                    policies. NUESA is the student wing of Nigeria Society of
                    Engineers, the governing body that interface between
                    students and key stakeholders across Engineering
                    Organizations, industries and the Government with the
                    clarion call of promoting academic excellence and building
                    career competence across the federation.
                  </p>
                </div>
          </div>

          <div className="col-lg-6 overview-right-box">
        <section className="over-img-container" data-aos="zoom-in-up">

          <div className="over-img-row">
            <img src={skill} alt="News" />
          </div>

          <div className="over-img-row">
            <img src={skill} alt="News" />
          </div>

          <div className="over-img-row">
            <img src={skill} alt="News" />
          </div>

          <div className="over-img-row">
            <img src={skill} alt="News" />
          </div>
        </section>
          </div>
        </div>
      </div>

      <div className="service">
        <div className="title">
          <h2>About NUESA</h2>
        </div>

        <div className="box">
          <div className="card">
            <FontAwesomeIcon icon={faCircleInfo} className="i" />
            <h5>About Nuesa</h5>
            <div className="pra">
              <p>
                Nigerian Universities Engineering Students’ Association (NUESA)
                is the students wing of Nigerian Society of Engineers (NSE).
              </p>
              <p style={{ textAlign: "center" }}>
                 <i style={{ color: "orange" }}>Motto : </i> Towards Indigenous Technological Advancement...
                  
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faEyeLowVision} className="i" />
            <h5>Mission & Core Values</h5>
            <div className="pra">
              <p>
                To create a platform where Engineering students can learn from
                practicing Engineers from diverse fields of Engineering.
              </p>
              <p style={{ textAlign: "center" }}>
                <Link to="/mission-and-core-values" className="button">
                  Read More
                </Link>
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faBullseye} className="i" />
            <h5>Aims</h5>
            <div className="pra">
              <p>
                To encourage socialization, learning and exposure amongst
                engineering students in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid overview-container d-flex ">
        <div className="row overview-box-area justify-content-around">
          <div className="col-lg-6 overview-left-box d-flex flex-column">
                <div className="overview">
                  <h2>What is NUESA ?</h2>
                  <h5>Overview</h5>
                  <p>
                    Nigerian Universities Engineering Students’ Association
                    (NUESA) is the students wing of Nigerian Society of
                    Engineers (NSE). This is the National, Active, Progressive
                    and Democratic Association formed for the sole purpose of
                    promoting the welfare and interest of her members. NUESA is
                    aimed at creating a platform where engineering students can
                    learn from practicing Engineers from diverse fields of
                    Engineering, so as to help in shaping the course of
                    technological development in Nigeria by encouraging and
                    carrying out industrial projects, offering useful and
                    constructive suggestions to the government and the bodies
                    responsible for the making of the nation's technological
                    policies. NUESA is the student wing of Nigeria Society of
                    Engineers, the governing body that interface between
                    students and key stakeholders across Engineering
                    Organizations, industries and the Government with the
                    clarion call of promoting academic excellence and building
                    career competence across the federation.
                  </p>
                </div>
          </div>

          <div className="col-lg-6 overview-right-box">
        <section className="over-img-container" data-aos="zoom-in-up">

          <div className="over-img-row">
            <img src={skill} alt="News" />
          </div>

          <div className="over-img-row">
            <img src={skill} alt="News" />
          </div>

          <div className="over-img-row">
            <img src={skill} alt="News" />
          </div>

          <div className="over-img-row">
            <img src={skill} alt="News" />
          </div>
        </section>
          </div>
        </div>
        
    </div>
    </div>

    
  );
};

export default AboutUs;
