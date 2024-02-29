import React from "react";
import "./home.css";
import Cardslider from "./cardSlider";
import myImg from "../../Assets/Amos Img.png";
import skill from "../../Assets/NSAI.png";
import btnImg from "../../Assets/news.png";
import cs from "../../Assets/cs.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      {/************************** Home ********************************/}
      <div className="homeContent">
        <span className="hello">Hello,</span>
        <span className="homeText" data-aos="zoom-in-up">
          Welcome to <span className="homeName">NUESA JOSTUM Chapter's</span>{" "}
          <br />
          Official Website.
        </span>
        <p className="homePara">
          Nigerian Universities Engineering Students' Association
        </p>
        <Link to="/News">
          <button className="btn">
            <img src={btnImg} alt="News & Updates" /> News & Updates
          </button>
        </Link>
      </div>

      {/************************** About Nuesa ********************************/}

      <div className="service">
        <div className="title" data-aos="fade-down">
          <h2>About NUESA</h2>
        </div>

        <div className="box" data-aos="zoom-in-up">
          <div className="card">
            <FontAwesomeIcon icon={faCircleInfo} className="i" />
            <h5>About Nuesa</h5>
            <div className="pra">
              <p>
                Nigerian Universities Engineering Students’ Association (NUESA)
                is the students wing of Nigerian Society of Engineers (NSE).
              </p>
              <p style={{ textAlign: "center" }}>
                <i style={{ color: "orange" }}>Motto : </i> Towards Indigenous
                Technological Advancement...
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faEyeLowVision} className="i" />
            <h5>Mission & Core Values</h5>
            <div className="praSpecial">
              <p>
                To create a platform where Engineering students can learn from
                practicing Engineers from diverse fields...
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
            <h5>Aim</h5>
            <div className="pra">
              <p>
                To encourage socialization, learning and exposure amongst
                engineering students in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/************************** News ********************************/}

      <div className="HomeNews">
        <div className="Newscontainer">
          <div className="Newstitle" data-aos="fade-down">
            <h2>News & Updates</h2>
          </div>

          <section className="News-content" data-aos="zoom-in-up">
            <div className="News-row">
              <img src={skill} alt="News" />
              <div className="main-row">
                <h5>
                  <Link to="/News1" className="link-news-home">
                    NUESA Skill Acquisition Initiative
                  </Link>
                </h5>
                <div className="row-icon">
                  <i class="bi bi-newspaper"></i>
                </div>
              </div>
              <h4>
                The Office of the President, NUESA, presents NUESA skill
                acquisition program. Its purpose is to introduce engineering
                students to different fields of technology such as design,
                programm..
              </h4>
            </div>

            <div className="News-row">
              <img src={cs} alt="News" />
              <div className="main-row">
                <h5>
                  <Link to="" className="link-news-home">
                    NUESA Joint Orientation Program
                  </Link>
                </h5>

                <div className="row-icon">
                  <i class="bi bi-newspaper"></i>
                </div>
              </div>
              <h4>
                The Office of the President, NUESA, presents this sessions Joint
                Orientation Program. Its purpose is to introduce engineering
                students to different fields of technology such as design,
                programm..
              </h4>
            </div>

            <div className="News-row">
              <img src={cs} alt="News" />
              <div className="main-row">
                <h5>
                  <Link to="" className="link-news-home">
                    NUESA Engineering Week 2024
                  </Link>
                </h5>

                <div className="row-icon">
                  <i class="bi bi-newspaper"></i>
                </div>
              </div>
              <h4>
                The Office of the President, NUESA, presents this sessions NUESA
                Engineering Week. Its purpose is to introduce engineering
                students to different fields of technology such as design,
                programm..
              </h4>
            </div>
          </section>
        </div>
      </div>
      {/************************** About me ********************************/}
      <section className="aboutme">
        <div className="main">
          <img src={myImg} className="img-fluid" alt="" />

          <div className="aboutme-text" data-aos="zoom-in-up">
            <h2>
              BRIEF CITATION OF TARGEMA, TEFA AMOS, THE PRESIDENT NIGERIAN
              UNIVERSITIES ENGINEERING STUDENTS’ ASSOCIATION (NUESA) JOSTUM
              CHAPTER
            </h2>
            <p>
              <span>
                Targema, Terfa Amos popularly known as RENITE, is a native of
                Mbagena-Kpav, in Katsina-Ala LGA of Benue State. He was raised
                in New Nyanya, Nasarawa State. He had his Nursery education in
                Success Foundation School Lugbe, Abuja and then proceeded to
                Vesssels of Honor Academy in Nasarawa State where he obtained
                his First School Leaving Certificate (FSLC) then he proceeded to
                JSS Area 11, Garki Abuja, where he excelled in science and
                technical subjects, earning him admission to Model Secondary
                School Maitaima and lastly, Government Secondary School Kuduru,
                Bwari, Abuja where he acquired his SSCE results in flying
                colours. In 2019, he got admitted into the prestigious Joseph
                Sarwuan Tarka University, Makurdi, Benue State to study
                Electrical/Electronic Engineering and he’s currently in his
                fourth year of study. <br /><br />
                He is a member of the Nigerian Universities Engineering
                Students’ Association (NUESA) and a member of Institute of
                Electrical and Electronics Engineers (IEEE) and he has taken
                various leadership roles right from his Nursery school days.{" "}
                <br /><br />
                Terfa’s dedication, selfless service and passion for youth
                empowerment and student welfare led him to be elected as the
                Executive President of the Nigerian Universities Engineering
                Students’ Association (NUESA) JOSTUM Chapter for the 2023/2024
                Academic Session. With his wealth of experience and unwavering
                enthusiasm, Targema, Terfa Amos is poised to lead NUESA JOSUTUM
                Chapter to greater heights. His favorite quote reflects his work
                ethic: "Work hard in silence; let your success be your noise.".
              </span>
            </p>
          </div>
        </div>
      </section>

      {/************************** Card Slider ********************************/}

      <Cardslider />

      {/************************** Gallery ********************************/}
      <div className="galleryBody">
        <div className="gallerytitle" data-aos="fade-down">
          <h2>Gallery</h2>
        </div>
        <section className="gallery-container" data-aos="zoom-in-up">
          <div className="gallery-row">
            <img src={skill} alt="News" />
          </div>

          <div className="gallery-row">
            <img src={skill} alt="News" />
          </div>

          <div className="gallery-row">
            <img src={skill} alt="News" />
          </div>

          <div className="gallery-row">
            <img src={skill} alt="News" />
          </div>

          <div className="gallery-row">
            <img src={skill} alt="News" />
          </div>

          <div className="gallery-row">
            <img src={skill} alt="News" />
          </div>

          <div className="gallery-row">
            <img src={skill} alt="News" />
          </div>

          <div className="gallery-row">
            <img src={skill} alt="News" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
