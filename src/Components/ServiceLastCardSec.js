import React from "react";
import "./ServiceLastCardSec.css";
import "./Cardsection.css";
import cardpic1 from "../Pics/Group 48095656.png";
import cardpic2 from "../Pics/healthy-brain-4026932-3328641 1.png";
import cardpic3 from "../Pics/Group 48095673.png";
import cardpic4 from "../Pics/5th Stage.png";
import linessvg10 from "../Pics/Group (10).svg";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function ServiceLastCardSec() {
  return (
    <div>
      <div className="container-fluid card-section-div1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 card-mainsection-div1">
              <Fade bottom distance="6%" duration={1200}>
                <div className="card-section-div2">
                  <div className="card-picsection-div2">
                    <img src={cardpic1} alt="" />
                  </div>
                  <div>
                    <h1 className="card-section-text1">Painless tax returns</h1>
                    <p className="card-section-text2">
                      It’s a simple online process. Fast, efficient and a whole
                      lot less scary than doing it yourself.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="col-lg-4 col-md-6 col-12 card-mainsection-div1 mt-md-0 mt-5 ">
              <Fade bottom distance="6%" duration={1200}>
                <div className="card-section-div2">
                  <div className="card-picsection-div21">
                    <img src={cardpic2} alt="" />
                  </div>
                  <div>
                    <h1 className="card-section-text1">Peace of mind</h1>
                    <p className="card-section-text2">
                      No more worrying about missing a rebate or making a
                      mistake. Get your return drafted by a real, accredited
                      accountant.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>

            <div className=" col-lg-4 col-md-6 col-12 mt-lg-0 mt-5 card-mainsection-div1">
              <Fade bottom distance="6%" duration={1200}>
                <div className="card-section-div2">
                  <div className="card-picsection-div22">
                    <img src={cardpic3} alt="" />
                  </div>
                  <div>
                    <h1 className="card-section-text1">One price</h1>
                    <p className="card-section-text2">
                      If you are self employed, your accounts, tax return and
                      tax advice will all be for £99.'
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      {/* Section no ############  2 */}

      <div className="container-fluid fee-section-div1">
        <div>
          <img src={linessvg10} className="fee-svg-line-10" alt="" />
        </div>
        <div className="container">
          <div>
            <h1 className="fee-section-text1">
              Prices/<span>Fees</span>
            </h1>
            <p className="fee-section-text2">
              We recognise that clients prefer to have a fixed annual fee and we
              will be pleased to agree a fixed fee for our services before we
              commence work.The nature of the business, bookkeeping systems and
              the accounting requirements may not be the same for any two
              different clients. For this reason it may be difficult to estimate
              our fee without discussing your requirements first.We will provide
              you with a written fee estimate after a free no obligation initial
              consultation meeting. At this meeting we will try and understand
              your business, assess your requirements, discuss the accounting
              needs of the business and explain to you how we can assist you.
            </p>
          </div>
        </div>
      </div>

      {/* section no ######### 3 */}

      {/* section no ######### 2 */}

      <Fade left distance="6%" duration={1200}>
        <div className="container-fluid self-section-div0">
          <div className="container self-section-div1">
            <div className="row">
              <div className="col-xl-8 col-lg-6 col-12 d-flex align-items-center">
                <div>
                  <h1 className="self-section-text1">
                    Let’s get your Self Assessment sorted today
                  </h1>
                  <p className="self-section-text2">
                    Taxes as they should be done
                  </p>



                  <div className='position-relative'>
                    <a class=" p-0" >
                      <div className="banner-btn-div1 ">

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
              </div>

              <div className="col-xl-4 col-lg-6 col-12 position-relative mt-lg-0 mt-4">
                <svg
                  className="self-col2-svg"
                  width="382"
                  height="289"
                  viewBox="0 0 382 289"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_2073_36"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="-97"
                    width="386"
                    height="386"
                  >
                    <circle cx="193" cy="96" r="193" fill="#C4C4C4" />
                  </mask>
                  <g mask="url(#mask0_2073_36)">
                    <path
                      d="M-51.6484 21.2204C-51.6484 21.2204 46.444 4.12603 71.7113 -58.4393C95.8018 -118.167 195.417 -133.393 195.417 -133.393"
                      stroke="#1AB7AC"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M-51.6484 46.2054C-51.6484 46.2054 64.5119 26.7576 94.4173 -46.3968C122.938 -116.367 240.899 -133.393 240.899 -133.393"
                      stroke="#FFC728"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M-51.6484 71.1208C-51.6484 71.1208 82.6489 49.3892 117.192 -34.4927C150.075 -114.499 286.38 -133.393 286.38 -133.393"
                      stroke="#4943C2"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M-51.6484 96.0363C-51.6484 96.0363 100.786 72.0207 139.968 -22.5196C177.211 -112.63 331.792 -133.393 331.792 -133.393"
                      stroke="#1AB7AC"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M-51.6484 121.021C-51.6484 121.021 118.854 94.7212 162.674 -10.5466C204.416 -110.831 377.273 -133.393 377.273 -133.393"
                      stroke="#FFC728"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M-51.6484 145.936C-51.6484 145.936 136.991 117.283 185.449 1.42695C231.553 -108.962 422.754 -133.393 422.754 -133.393"
                      stroke="#4943C2"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M-51.6484 170.851C-51.6484 170.851 155.128 139.915 208.155 13.331C258.689 -107.093 468.235 -133.393 468.235 -133.393"
                      stroke="#1AB7AC"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M-51.6484 195.836C-51.6484 195.836 173.196 162.616 230.93 25.3731C285.826 -105.294 513.647 -133.393 513.647 -133.393"
                      stroke="#FFC728"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M-51.6484 220.75C-51.6484 220.75 191.333 185.247 253.636 37.3467C312.962 -103.426 559.128 -133.393 559.128 -133.393"
                      stroke="#4943C2"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M-51.6484 245.735C-51.6484 245.735 209.47 207.878 276.411 49.3197C340.099 -101.557 604.609 -133.393 604.609 -133.393"
                      stroke="#1AB7AC"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M-51.6484 270.652C-51.6484 270.652 227.538 230.51 299.117 61.2933C367.235 -99.7572 650.089 -133.393 650.089 -133.393"
                      stroke="#FFC728"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M-51.6484 295.564C-51.6484 295.564 245.675 253.142 321.892 73.1968C394.371 -97.8885 695.57 -133.393 695.57 -133.393"
                      stroke="#4943C2"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M-51.6484 320.549C-51.6484 320.549 263.812 275.773 344.668 85.2393C421.508 -96.0198 740.983 -133.393 740.983 -133.393"
                      stroke="#1AB7AC"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M-51.6484 345.467C-51.6484 345.467 281.88 298.405 367.373 97.1435C448.644 -94.2206 786.465 -133.393 786.465 -133.393"
                      stroke="#FFC728"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M-51.6484 370.384C-51.6484 370.384 300.017 321.037 390.148 109.117C475.78 -92.3519 831.945 -133.393 831.945 -133.393"
                      stroke="#4943C2"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M-51.6484 395.369C-51.6484 395.369 318.154 343.736 412.854 121.09C502.917 -90.4832 877.426 -133.393 877.426 -133.393"
                      stroke="#1AB7AC"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M-51.6484 420.282C-51.6484 420.282 336.222 366.3 435.629 133.063C530.053 -88.684 922.84 -133.393 922.84 -133.393"
                      stroke="#1AB7AC"
                      stroke-width="3.05138"
                      stroke-miterlimit="10"
                    />
                  </g>
                </svg>
                <div className="self-col2-div12 d-flex justify-content-lg-end justify-content-center">
                  <img src={cardpic4} className="self-col2-img1" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ServiceLastCardSec;
