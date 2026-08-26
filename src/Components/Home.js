import React from "react";
import "./Home.css";
import bannerimg1 from "../Pics/Group 1000002925.png";
import accimg1 from "../Pics/Icon-10001 1.png";
import taximg1 from "../Pics/Icon-50001 4.png";
import profileimg1 from "../Pics/Rectangle 41050.png";
import profileimg2 from "../Pics/Rectangle 41051.png";
import profileimg3 from "../Pics/Rectangle 41052.png";
import mobilepic from "../Pics/Group 1000002915.png";
import Cardsection from "./Cardsection";
import worksecsvg7 from "../Pics/Group (7).svg";
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom'

// <Fade left distance="6%" duration={1200}>

function Home() {
  return (
    <div>
      <div className="container-fluid home-banner-div1">
        <div className="container">
          <div className="row">
            {/* <Fade bottom distance="3%" duration={1200}> */}
            <div className="col-lg-6 col-12 home-banner-div2">
              <h1 className="home-banner-text1">Self-employed</h1>
              <h1 className="home-banner-text2">
                tax returns 
              </h1>

              <div className="mt-4 ml-3">
                <div className="row mobile-responsive-div1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2073_392)">
                      <rect width="25" height="25" rx="12.5" fill="#1AB7AC" />
                      <path
                        d="M18.75 8.59375L10.9375 16.4063L7.03125 12.5"
                        stroke="#004155"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2073_392">
                        <rect width="25" height="25" rx="12.5" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="home-banner-text3">
                    Simple, fast, all online
                  </p>
                </div>

                <div className="row mobile-responsive-div1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2073_392)">
                      <rect width="25" height="25" rx="12.5" fill="#1AB7AC" />
                      <path
                        d="M18.75 8.59375L10.9375 16.4063L7.03125 12.5"
                        stroke="#004155"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2073_392">
                        <rect width="25" height="25" rx="12.5" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="home-banner-text3">
                    Sorted by an accredited accountant
                  </p>
                </div>

                <div className="row mobile-responsive-div1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2073_392)">
                      <rect width="25" height="25" rx="12.5" fill="#1AB7AC" />
                      <path
                        d="M18.75 8.59375L10.9375 16.4063L7.03125 12.5"
                        stroke="#004155"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2073_392">
                        <rect width="25" height="25" rx="12.5" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="home-banner-text3">
                    Filed in as little as 48 hours
                  </p>
                </div>
              </div>



              <div className='position-relative'>
                <a class="  p-0" >
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
            {/* </Fade> */}

            <Fade bottom distance="3%" duration={1200}>
              <div className="col-lg-6 col-12 home-banner-div3 d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={bannerimg1} className="img-fluid" alt="" />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* section no #### 2 */}

      <div className="container-fluid tax-sec-div1">
        <div className="row">
          <div className="col-lg-6 col-12 acc-sec-div2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="acc-svg-1"
              width="57"
              height="199"
              viewBox="0 0 57 199"
              fill="none"
            >
              <path
                d="M27.1241 122.064C27.1241 122.064 16.0561 92.2828 6.76234 64.2974C-9.33956 15.808 3.0278 3.66405 56.1989 0.643313L56.4579 198.046C48.3828 196.866 43.6877 195.597 43.9187 194.337C45.3832 186.346 33.6181 138.654 27.1241 122.064Z"
                fill="#E3F8F8"
                fill-opacity="0.3"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="acc-svg-2"
              width="86"
              height="167"
              viewBox="0 0 86 167"
              fill="none"
            >
              <path
                d="M85.001 1.73295C74.2257 4.29058 63.3831 8.38426 51.2943 13.8946C-3.04917 38.6647 -12.8494 53.0123 20.9223 91.6668C39.0421 112.406 59.3389 134.049 59.3389 134.049C65.5086 140.405 76.151 153.81 85.001 166.076"
                stroke="url(#paint0_linear_2073_411)"
                stroke-width="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2073_411"
                  x1="24.5499"
                  y1="48.4085"
                  x2="-5.12437"
                  y2="90.4993"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FEB45A" />
                  <stop offset="1" stop-color="#19B8AC" />
                </linearGradient>
              </defs>
            </svg>

            <Fade left distance="0%" >
              <div className="row align-items-center justify-content-md-center acc-sec-div3 container">
                <div>
                  <img src={accimg1} alt="" />
                </div>
                <div>
                  <h1 className="acc-text1">Accounting</h1>
                  <Link to='/services' className="acc-text2">
                    Learn More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        d="M13 1C13 0.447715 12.5523 2.00008e-07 12 -5.28728e-08L3 -6.00782e-07C2.44772 -2.63607e-07 2 0.447715 2 1C2 1.55228 2.44772 2 3 2L11 2L11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10L13 1ZM1.70711 12.7071L12.7071 1.70711L11.2929 0.292893L0.292893 11.2929L1.70711 12.7071Z"
                        fill="#FFC524"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </Fade>
          </div>

          <div className="col-lg-6 col-12 tax-sec-div2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="acc-svg-1"
              width="57"
              height="199"
              viewBox="0 0 57 199"
              fill="none"
            >
              <path
                d="M27.1241 122.064C27.1241 122.064 16.0561 92.2828 6.76234 64.2974C-9.33956 15.808 3.0278 3.66405 56.1989 0.643313L56.4579 198.046C48.3828 196.866 43.6877 195.597 43.9187 194.337C45.3832 186.346 33.6181 138.654 27.1241 122.064Z"
                fill="#E3F8F8"
                fill-opacity="0.3"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="acc-svg-2"
              width="86"
              height="167"
              viewBox="0 0 86 167"
              fill="none"
            >
              <path
                d="M85.001 1.73295C74.2257 4.29058 63.3831 8.38426 51.2943 13.8946C-3.04917 38.6647 -12.8494 53.0123 20.9223 91.6668C39.0421 112.406 59.3389 134.049 59.3389 134.049C65.5086 140.405 76.151 153.81 85.001 166.076"
                stroke="url(#paint0_linear_2073_411)"
                stroke-width="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2073_411"
                  x1="24.5499"
                  y1="48.4085"
                  x2="-5.12437"
                  y2="90.4993"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FEB45A" />
                  <stop offset="1" stop-color="#19B8AC" />
                </linearGradient>
              </defs>
            </svg>
            <Fade left distance="0%" >
              <div className="row align-items-center justify-content-md-center acc-sec-div3 container">
                <div>
                  <img src={taximg1} alt="" />
                </div>
                <div>
                  <h1 className="acc-text1">Tax Services</h1>
                  <Link to='/services' className="acc-text2">
                    Learn More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        d="M13 1C13 0.447715 12.5523 2.00008e-07 12 -5.28728e-08L3 -6.00782e-07C2.44772 -2.63607e-07 2 0.447715 2 1C2 1.55228 2.44772 2 3 2L11 2L11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10L13 1ZM1.70711 12.7071L12.7071 1.70711L11.2929 0.292893L0.292893 11.2929L1.70711 12.7071Z"
                        fill="#FFC524"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* section ###### 3 */}

      <div className="container-fluid pro-sec-div1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  col-12 pro-col-div2">
              <div>
                <Fade top distance="2%" duration={1000}>
                  <h1 className="pro-sec-text1">
                    Professional Agency For Tax and Accounting
                  </h1>
                </Fade>
                <Fade top distance="2%" duration={1000}>
                  <p className="pro-sec-text2 mt-4">
                    Crawley Accountants Ltd is regulated by Institute of
                    Financial Accountants (IFA). It is registered with HMRC to
                    provide services relating Self Assessment, PAYE, VAT,
                    Corporation Tax etc.
                  </p>
                </Fade>
                <Fade top distance="2%" duration={1000}>
                  <p className="pro-sec-text2">
                    Crawley Accountants is a team of professional accountants
                    who are committed to provide the services wrapped with
                    quality, professionalism and efficiency.
                  </p>
                </Fade>
                <Fade top distance="2%" duration={1000}>
                  <p className="pro-sec-text2">
                    Winning the trust of our clients is our top priority. We are
                    proud to be an organization whose building blocks are made
                    up of the pleasure, satisfaction and the belief of our
                    clients.
                  </p>
                </Fade>
                <Fade top distance="2%" duration={1000}>
                  <p className="pro-sec-text2">
                    We believe in the continual improvement and growth of our
                    professionals and we strive hard to make every effort
                    possible to keep ourselves updated.
                  </p>
                </Fade>
              </div>
              <div>
                <Fade top distance="2%" duration={1000}>
                  <Link to='/contact'>
                    <div className="pro-sec-btn1-div1">Book a Call Back</div>
                  </Link>
                </Fade>
              </div>
            </div>

            <div className="col-lg-6 col-12 pro-col-div3">
              {/* Profile card 1 ########################## */}
              <div>
                <Fade top distance="3%" duration={1100}>
                  <div className="d-flex pro-card-div1">
                    <div className="profile-img-div1">
                      <img src={profileimg1} alt="" />
                      <div className="profile-watch-div1">
                        <h1 className="pro-watch-text1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1"
                            width="11"
                            height="15"
                            viewBox="0 0 11 15"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 14.218C0 14.6181 0.446587 14.8561 0.77875 14.633L10.7523 7.93536C11.0468 7.73761 11.0474 7.30462 10.7535 7.106L0.779959 0.366087C0.4479 0.141688 0 0.379589 0 0.780361L0 14.218Z"
                              fill="white"
                            />
                          </svg>{" "}
                          Watch
                        </h1>
                      </div>
                    </div>
                    <div className="pro-card-para-div1">
                      <div>
                        <p className="pro-text-para1">
                          I have used Crawley Accountants for a good few years now. They have always been spot on and answer any questions asked. Highly recommend
                        </p>
                      </div>
                      <div className="d-flex stars-div11">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                            fill="#FFBC49"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                            fill="#FFBC49"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                            fill="#FFBC49"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                            fill="#FFBC49"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                            fill="#FFBC49"
                          />
                        </svg>
                      </div>
                      <div>
                        <h1 className="pro-text-head1">
                          <span>Joshua Lewis
                             </span>

                        </h1>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>

              {/* Profile card 2 ########################## */}
              <div className="mt-4">
                <Fade top distance="3%" duration={1100}>
                  <div className="d-flex pro-card-div1">
                    <div className="profile-img-div1">
                      {/* <img src={profileimg2} alt="" /> */}
                      <div className="profile-watch-div2">
                        <h1 className="pro-watch-text1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1"
                            width="11"
                            height="15"
                            viewBox="0 0 11 15"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 14.218C0 14.6181 0.446587 14.8561 0.77875 14.633L10.7523 7.93536C11.0468 7.73761 11.0474 7.30462 10.7535 7.106L0.779959 0.366087C0.4479 0.141688 0 0.379589 0 0.780361L0 14.218Z"
                              fill="white"
                            />
                          </svg>{" "}
                          Watch
                        </h1>
                      </div>
                    </div>
                    <div className="pro-card-para-div1">
                      <div>
                        <p className="pro-text-para1">
                          I’ve had an excellent experience with Crawley Accountants. They are professional, reliable, and make tax matters simple and stress-free.
                        </p>
                      </div>
                      <div className="d-flex stars-div11">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                            fill="#FFBC49"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                            fill="#FFBC49"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                            fill="#FFBC49"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                            fill="#FFBC49"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                            fill="#FFBC49"
                          />
                        </svg>
                      </div>
                      <div>
                        <h1 className="pro-text-head1">
                          <span>Muhammad Baig </span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>

              {/* Profile card 3 ########################## */}
              <div className="mt-4">
                <Fade top distance="2%" duration={1000}>
                  <div className="d-flex pro-card-div1">
                    <div className="profile-img-div1">
                      <img src={profileimg3} alt="" />
                      <div className="profile-watch-div3">
                        <h1 className="pro-watch-text12">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="15"
                            viewBox="0 0 11 15"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 14.218C0 14.6181 0.446587 14.8561 0.77875 14.633L10.7523 7.93536C11.0468 7.73761 11.0474 7.30462 10.7535 7.106L0.779959 0.366087C0.4479 0.141688 0 0.379589 0 0.780361L0 14.218Z"
                              fill="#1C1C1C"
                            />
                          </svg>{" "}
                          Watch
                        </h1>
                      </div>
                    </div>
                    <div className="pro-card-para-div1">
                      <div>
                        <p className="pro-text-para1">
                          Extremely reliable, attentive to detail and handle it all so promptly! Such a great team!
                        </p>
                      </div>
                      <div className="d-flex stars-div11">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                            fill="#FFBC49"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                            fill="#FFBC49"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                            fill="#FFBC49"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                            fill="#FFBC49"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                            fill="#FFBC49"
                          />
                        </svg>
                      </div>
                      <div>
                        <h1 className="pro-text-head1">
                          <span>Edna Santos</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section no ########## 4 ######### */}
      <div className="container-fluid works-sec4-div1">
        <div>
          <img src={worksecsvg7} className="work-sec-svg-7" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 d-flex d-lg-none align-items-center justify-content-center">
              <div className="mobile-img-maindiv1 position-relative">
                <img src={mobilepic} className="mobile-img" alt="" />
                <div>
                  <div className="work-btn-div1 ">
                    <a href="">
                      <div className="work-btn-1 for-responsive-work-btn-div1">
                        {" "}
                        Download
                        {/* play store svg */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-4"
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          fill="none"
                        >
                          <rect width="35" height="35" fill="white" />
                          <path
                            d="M24.1058 13.5569C21.1036 11.8777 16.2851 9.18137 8.81113 4.99653C8.30723 4.66374 7.72748 4.62013 7.22656 4.78968L20.0498 17.6129L24.1058 13.5569Z"
                            fill="#32BBFF"
                          />
                          <path
                            d="M7.23225 4.78979C7.13836 4.82159 7.047 4.85996 6.95963 4.90629C6.40648 5.20551 6 5.78128 6 6.50948V28.7165C6 29.4447 6.40643 30.0205 6.95963 30.3196C7.04685 30.3659 7.13816 30.4044 7.23195 30.4364L20.0554 17.613L7.23225 4.78979Z"
                            fill="#32BBFF"
                          />
                          <path
                            d="M20.0501 17.6128L7.22656 30.4362C7.72763 30.607 8.30739 30.5668 8.81143 30.2291C16.0596 26.1704 20.8238 23.5061 23.8607 21.8126C23.9452 21.7651 24.0281 21.7187 24.1099 21.6727L20.0501 17.6128Z"
                            fill="#32BBFF"
                          />
                          <path
                            d="M6 18V28.3905C6 29.0719 6.37591 29.6107 6.88757 29.8907C6.96824 29.934 7.0527 29.9701 7.13944 30L19 18H6Z"
                            fill="#2C9FD9"
                          />
                          <path
                            d="M8.84074 5.30159C8.24766 4.90994 7.54826 4.9211 7 5.21208L19.787 18L24 13.7867C21.0245 12.1223 16.2486 9.44967 8.84074 5.30159Z"
                            fill="#29CC5E"
                          />
                          <path
                            d="M19.7842 18L7 29.8025C7.54819 30.071 8.24738 30.0865 8.84033 29.7198C16.0227 26.0068 20.7437 23.5693 23.753 22.0201C23.8368 21.9767 23.9189 21.9342 24 21.8921L19.7842 18Z"
                            fill="#D93F21"
                          />
                          <path
                            d="M30 17.4978C30 16.8382 29.6515 16.1725 28.9608 15.8034C28.9608 15.8034 27.669 15.115 23.7096 13L19 17.4978L23.7142 22C27.6302 19.9002 28.9607 19.1921 28.9607 19.1921C29.6515 18.823 30 18.1574 30 17.4978Z"
                            fill="#FFD500"
                          />
                          <path
                            d="M28.9608 19.5054C29.6515 19.1774 30 18.586 30 18H19L23.7142 22C27.6302 20.1344 28.9608 19.5054 28.9608 19.5054Z"
                            fill="#FFAA00"
                          />
                        </svg>
                        {/* apple store logo */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2"
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          fill="none"
                        >
                          <rect width="35" height="35" fill="white" />
                          <path
                            d="M25.2103 17.8903C25.1781 14.353 28.1346 12.632 28.2698 12.5519C26.5954 10.134 24.0002 9.80366 23.0882 9.77732C20.9086 9.55013 18.7943 11.0691 17.684 11.0691C16.5515 11.0691 14.8417 9.79927 12.9989 9.83659C10.6276 9.8728 8.40913 11.2327 7.19243 13.3443C4.68146 17.65 6.55416 23.9773 8.95986 27.4576C10.1633 29.1632 11.5695 31.0652 13.41 30.9983C15.2107 30.9258 15.8833 29.8623 18.0563 29.8623C20.2094 29.8623 20.841 30.9983 22.7181 30.9555C24.6507 30.9258 25.8674 29.2433 27.0287 27.5235C28.4193 25.5709 28.9778 23.6459 29 23.5471C28.9557 23.5317 25.2479 22.1291 25.2103 17.8903ZM21.6643 7.48785C22.6328 6.28823 23.2955 4.65619 23.1115 3C21.7098 3.06146 19.9567 3.96035 18.9472 5.13362C18.0541 6.1675 17.2563 7.86211 17.4624 9.45574C19.037 9.57208 20.6537 8.6688 21.6643 7.48785Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div>
                <h1 className="works-sec4-text1">
                  <span>How it </span>Works
                </h1>
                <p className="works-sec4-text2">
                  Accounts and tax return made as easy as 1,2,3
                </p>
              </div>
              <div className="num-box-div00">
                <div className="d-flex align-items-center num-box-div0">
                  <div className="num-box-div1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="94"
                      height="90"
                      viewBox="0 0 94 90"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M51.1936 0.0279301C71.3494 0.676329 84.6302 16.9497 90.7296 34.4225C96.6684 51.4353 95.363 70.9966 79.7435 81.8144C63.1296 93.321 40.0907 92.2855 23.0673 81.2844C5.46129 69.9067 -4.49188 50.2976 1.99124 31.5679C8.65011 12.3305 29.0193 -0.685403 51.1936 0.0279301Z"
                        fill="#6373CA"
                      />
                    </svg>
                    <h1 className="num-box-text1">1</h1>
                  </div>
                  <div className="num-box-div2">
                    <h1 className="num-box-text2">Download App</h1>
                    <p className="num-box-text3">
                      Available on the App Store and Google Play
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center num-box-div0">
                  <div className="num-box-div1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="94"
                      height="90"
                      viewBox="0 0 94 90"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M51.1936 0.0279301C71.3494 0.676329 84.6302 16.9497 90.7296 34.4225C96.6684 51.4353 95.363 70.9966 79.7435 81.8144C63.1296 93.321 40.0907 92.2855 23.0673 81.2844C5.46129 69.9067 -4.49188 50.2976 1.99124 31.5679C8.65011 12.3305 29.0193 -0.685403 51.1936 0.0279301Z"
                        fill="#1AB7AC"
                      />
                    </svg>
                    <h1 className="num-box-text1">2</h1>
                  </div>
                  <div className="num-box-div2">
                    <h1 className="num-box-text2">Tex Return</h1>
                    <p className="num-box-text3">
                      Answer a Few Simple questions
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center num-box-div0">
                  <div className="num-box-div1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="94"
                      height="90"
                      viewBox="0 0 94 90"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M51.1936 0.0279301C71.3494 0.676329 84.6302 16.9497 90.7296 34.4225C96.6684 51.4353 95.363 70.9966 79.7435 81.8144C63.1296 93.321 40.0907 92.2855 23.0673 81.2844C5.46129 69.9067 -4.49188 50.2976 1.99124 31.5679C8.65011 12.3305 29.0193 -0.685403 51.1936 0.0279301Z"
                        fill="#6373CA"
                      />
                    </svg>
                    <h1 className="num-box-text1">3</h1>
                  </div>
                  <div className="num-box-div2">
                    <h1 className="num-box-text2">Get Paired</h1>
                    <p className="num-box-text3">with tax return accountant</p>
                  </div>
                </div>

                <div className="d-flex align-items-center num-box-div0">
                  <div className="num-box-div1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="94"
                      height="90"
                      viewBox="0 0 94 90"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M51.1936 0.0279301C71.3494 0.676329 84.6302 16.9497 90.7296 34.4225C96.6684 51.4353 95.363 70.9966 79.7435 81.8144C63.1296 93.321 40.0907 92.2855 23.0673 81.2844C5.46129 69.9067 -4.49188 50.2976 1.99124 31.5679C8.65011 12.3305 29.0193 -0.685403 51.1936 0.0279301Z"
                        fill="#1AB7AC"
                      />
                    </svg>
                    <h1 className="num-box-text1">4</h1>
                  </div>
                  <div className="num-box-div2">
                    <h1 className="num-box-text2">Submit</h1>
                    <p className="num-box-text3">
                      We file your self assessment for you
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-lg-flex d-none align-items-center">
              <div className="mobile-img-maindiv1 position-relative">
                <img src={mobilepic} className="mobile-img" alt="" />
                <div>
                  <div className="work-btn-div1 ">
                    <a href="">
                      <div className="work-btn-1 for-responsive-work-btn-div1">
                        {" "}
                        Download
                        {/* play store svg */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-4"
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          fill="none"
                        >
                          <rect width="35" height="35" fill="white" />
                          <path
                            d="M24.1058 13.5569C21.1036 11.8777 16.2851 9.18137 8.81113 4.99653C8.30723 4.66374 7.72748 4.62013 7.22656 4.78968L20.0498 17.6129L24.1058 13.5569Z"
                            fill="#32BBFF"
                          />
                          <path
                            d="M7.23225 4.78979C7.13836 4.82159 7.047 4.85996 6.95963 4.90629C6.40648 5.20551 6 5.78128 6 6.50948V28.7165C6 29.4447 6.40643 30.0205 6.95963 30.3196C7.04685 30.3659 7.13816 30.4044 7.23195 30.4364L20.0554 17.613L7.23225 4.78979Z"
                            fill="#32BBFF"
                          />
                          <path
                            d="M20.0501 17.6128L7.22656 30.4362C7.72763 30.607 8.30739 30.5668 8.81143 30.2291C16.0596 26.1704 20.8238 23.5061 23.8607 21.8126C23.9452 21.7651 24.0281 21.7187 24.1099 21.6727L20.0501 17.6128Z"
                            fill="#32BBFF"
                          />
                          <path
                            d="M6 18V28.3905C6 29.0719 6.37591 29.6107 6.88757 29.8907C6.96824 29.934 7.0527 29.9701 7.13944 30L19 18H6Z"
                            fill="#2C9FD9"
                          />
                          <path
                            d="M8.84074 5.30159C8.24766 4.90994 7.54826 4.9211 7 5.21208L19.787 18L24 13.7867C21.0245 12.1223 16.2486 9.44967 8.84074 5.30159Z"
                            fill="#29CC5E"
                          />
                          <path
                            d="M19.7842 18L7 29.8025C7.54819 30.071 8.24738 30.0865 8.84033 29.7198C16.0227 26.0068 20.7437 23.5693 23.753 22.0201C23.8368 21.9767 23.9189 21.9342 24 21.8921L19.7842 18Z"
                            fill="#D93F21"
                          />
                          <path
                            d="M30 17.4978C30 16.8382 29.6515 16.1725 28.9608 15.8034C28.9608 15.8034 27.669 15.115 23.7096 13L19 17.4978L23.7142 22C27.6302 19.9002 28.9607 19.1921 28.9607 19.1921C29.6515 18.823 30 18.1574 30 17.4978Z"
                            fill="#FFD500"
                          />
                          <path
                            d="M28.9608 19.5054C29.6515 19.1774 30 18.586 30 18H19L23.7142 22C27.6302 20.1344 28.9608 19.5054 28.9608 19.5054Z"
                            fill="#FFAA00"
                          />
                        </svg>
                        {/* apple store logo */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2"
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          fill="none"
                        >
                          <rect width="35" height="35" fill="white" />
                          <path
                            d="M25.2103 17.8903C25.1781 14.353 28.1346 12.632 28.2698 12.5519C26.5954 10.134 24.0002 9.80366 23.0882 9.77732C20.9086 9.55013 18.7943 11.0691 17.684 11.0691C16.5515 11.0691 14.8417 9.79927 12.9989 9.83659C10.6276 9.8728 8.40913 11.2327 7.19243 13.3443C4.68146 17.65 6.55416 23.9773 8.95986 27.4576C10.1633 29.1632 11.5695 31.0652 13.41 30.9983C15.2107 30.9258 15.8833 29.8623 18.0563 29.8623C20.2094 29.8623 20.841 30.9983 22.7181 30.9555C24.6507 30.9258 25.8674 29.2433 27.0287 27.5235C28.4193 25.5709 28.9778 23.6459 29 23.5471C28.9557 23.5317 25.2479 22.1291 25.2103 17.8903ZM21.6643 7.48785C22.6328 6.28823 23.2955 4.65619 23.1115 3C21.7098 3.06146 19.9567 3.96035 18.9472 5.13362C18.0541 6.1675 17.2563 7.86211 17.4624 9.45574C19.037 9.57208 20.6537 8.6688 21.6643 7.48785Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Cardsection></Cardsection>
    </div>
  );
}

export default Home;
