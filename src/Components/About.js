import React from "react";
import "./About.css";
import aboutimg from "../Pics/image 683.png";
import Cardsection from "./Cardsection";
import playbtnsvg from "../Pics/Group 26119.svg";
import Fade from "react-reveal/Fade";
// <Fade left distance="6%" duration={1200}>
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="container-fluid about-banner-div1">
        <div className="container">
          <Fade bottom distance="6%" duration={1200}>
            <div>
              <h1 className="about-banner-text1">Tax & accountancy</h1>
              <h1 className="about-banner-text2">
                Welcome To <br />
                <span>Crawley</span> Accountants
              </h1>
              <p className="about-banner-text3">
                Let us handle the accounting so that you can focus on your
                business <br />
                Offering you expert business advice and support, delivered by
                friendly team.
              </p>

              <div className="position-relative">
                <a class="  p-0">
                  <div className="about-banner-btn-div1">
                    <Link to="/contact">
                      <div className="banner-btn-1 for-responsive-banner-btn-div1">
                        {" "}
                        Contact Us
                        {/* play store svg */}
                      </div>
                    </Link>
                  </div>
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* section no 2 ######### */}

      <div className="container-fluid">
        <div className="container">
          <div className="about-pic-div1">
            <img src={aboutimg} className="img-fluid" alt="" />

            <div className="about-pic-btn-div1">
              <Link to="/services">
                <img src={playbtnsvg} className="img-fluid" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* section no ##### 3  */}

      <div className="container-fluid account-sec3-div1">
        <div className="container">
          <div>
            <Fade top distance="3%">
              <h1 className="account-sec3-text1">
                Accountants specialising in small businesses and self-employed
                individuals.
              </h1>
            </Fade>
            <Fade top distance="3%">
              <p className="account-sec3-text2">
                Crawley Accountants is a firm of Financial Accountants committed
                to providing first-class accounts and taxation service at
                competitive prices to small businesses and individuals.
              </p>
            </Fade>
            <Fade top distance="3%">
              <p className="account-sec3-text2">
                We understand the value of your precious time and money;
                therefore, we are here to assist you in solving all the big and
                small tax-related issues which you face daily or frequently with
                regards to your accounts and business.
              </p>
            </Fade>
            <Fade top distance="3%">
              <p className="account-sec3-text2">
                We believe in adopting a proactive approach for our clients. We
                take care of their financial matters and accounts by providing
                them with accurate plans and guidelines to increase their
                turnovers, tax efficiency and preventing them from being fined
                due to lack of knowledge and expertise.
              </p>
            </Fade>
          </div>
        </div>
      </div>

      <Cardsection></Cardsection>
    </div>
  );
}

export default About;
