import React from 'react'
import './Footer.css'
// import footerlogopic from '../Pics/Group 1000002077.svg Group 1000002918.svg'
import footerlogopic from '../Pics/Group 1000002918.svg'
import footerpic2 from '../Pics/image 2129.svg'
import { HashLink } from "react-router-hash-link";
import { Link } from 'react-router-dom'
import linkedin from '../Pics/linkedin-svgrepo-com.svg'



function Footer() {
    return (
        <div>
            <div className='container-fluid footer-div1'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-12 d-flex justify-content-md-center justify-content-start '>
                            <div>
                                <div className='footer-logo-div12'>
                                    <Link to='/' className=''>
                                    <img src={footerlogopic} alt="" />
                                    </Link>
                                </div>
                                <div className='d-flex mt-3'>
                                    <div className='footer-social-div1'>
                                        <a href="https://www.facebook.com/CrawleyAccountantsLtd" target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                            <path d="M26.0008 13.0004C26.0008 5.8199 20.1809 0 13.0004 0C5.81991 0 0 5.8199 0 13.0004C0 19.4899 4.75138 24.8681 10.9702 25.8441V16.7616H7.67202V13.0004H10.9702V10.1367C10.9702 6.8813 12.9078 5.07906 15.8783 5.07906C17.303 5.07906 18.7918 5.3355 18.7918 5.3355V8.53396H17.1534C15.5364 8.53396 15.0377 9.53837 15.0377 10.5642V13.0004H18.6422L18.0652 16.7616H15.0377V25.8441C21.2494 24.8681 26.0008 19.4899 26.0008 13.0004Z" fill="#1877F2" />
                                            <path d="M19.0852 14.9598L19.8117 10.4654H15.2735V7.55431C15.2735 6.32857 15.9103 5.12836 17.9372 5.12836H20V1.30643C20 1.30643 18.1256 1 16.3318 1C12.5919 1 10.1525 3.15356 10.1525 7.04358V10.4654H6V14.9598H10.1525V25.8127C10.9865 25.9404 11.8386 26 12.7085 26C13.5785 26 14.4305 25.9319 15.2646 25.8127V14.9598H19.0852Z" fill="white" />
                                        </svg>
                                        </a>
                                    </div>
                                    <div className='footer-social-div2'>
                                        <a href="https://www.instagram.com/crawleyaccountants/" target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                            <g clip-path="url(#clip0_2073_445)">
                                                <path d="M14.5 2.61267C18.3717 2.61267 18.8302 2.6274 20.3592 2.69716C21.7729 2.76168 22.5407 2.9979 23.0517 3.19642C23.7285 3.45946 24.2115 3.77372 24.7189 4.28109C25.2263 4.78847 25.5405 5.27155 25.8035 5.94831C26.0021 6.45931 26.2383 7.22708 26.3028 8.64076C26.3726 10.1698 26.3873 10.6283 26.3873 14.5C26.3873 18.3717 26.3726 18.8303 26.3028 20.3592C26.2383 21.773 26.0021 22.5407 25.8035 23.0517C25.5405 23.7285 25.2263 24.2116 24.7189 24.719C24.2115 25.2263 23.7285 25.5406 23.0517 25.8036C22.5407 26.0022 21.7729 26.2384 20.3592 26.3029C18.8305 26.3727 18.3719 26.3874 14.5 26.3874C10.6281 26.3874 10.1695 26.3727 8.64076 26.3029C7.22702 26.2384 6.45926 26.0022 5.94831 25.8036C5.27149 25.5406 4.78841 25.2263 4.28104 24.719C3.77366 24.2116 3.4594 23.7285 3.19642 23.0517C2.99784 22.5407 2.76163 21.773 2.6971 20.3593C2.62734 18.8303 2.61261 18.3717 2.61261 14.5C2.61261 10.6283 2.62734 10.1698 2.6971 8.64081C2.76163 7.22708 2.99784 6.45931 3.19642 5.94831C3.4594 5.27155 3.77366 4.78847 4.28104 4.28109C4.78841 3.77372 5.27149 3.45946 5.94831 3.19642C6.45926 2.9979 7.22702 2.76168 8.6407 2.69716C10.1697 2.6274 10.6283 2.61267 14.5 2.61267ZM14.5 0C10.562 0 10.0682 0.0166918 8.52167 0.0872577C6.97825 0.157708 5.92426 0.40279 5.00189 0.76126C4.04839 1.13182 3.23976 1.62762 2.43366 2.43372C1.62756 3.23982 1.13176 4.04845 0.761202 5.00195C0.402732 5.92431 0.157651 6.97831 0.0872001 8.52173C0.0166342 10.0682 0 10.562 0 14.5C0 18.438 0.0166342 18.9318 0.0872001 20.4783C0.157651 22.0217 0.402732 23.0757 0.761202 23.9981C1.13176 24.9516 1.62756 25.7602 2.43366 26.5663C3.23976 27.3724 4.04839 27.8682 5.00189 28.2388C5.92426 28.5973 6.97825 28.8424 8.52167 28.9128C10.0682 28.9834 10.562 29 14.5 29C18.438 29 18.9318 28.9834 20.4783 28.9128C22.0217 28.8424 23.0757 28.5973 23.9981 28.2388C24.9516 27.8682 25.7602 27.3724 26.5663 26.5663C27.3724 25.7602 27.8682 24.9516 28.2387 23.9981C28.5972 23.0757 28.8423 22.0217 28.9127 20.4783C28.9833 18.9318 29 18.438 29 14.5C29 10.562 28.9833 10.0682 28.9127 8.52173C28.8423 6.97831 28.5972 5.92431 28.2387 5.00195C27.8682 4.04845 27.3724 3.23982 26.5663 2.43372C25.7602 1.62762 24.9516 1.13182 23.9981 0.76126C23.0757 0.40279 22.0217 0.157708 20.4783 0.0872577C18.9318 0.0166918 18.438 0 14.5 0ZM14.5 7.05406C10.3877 7.05406 7.054 10.3878 7.054 14.5C7.054 18.6123 10.3877 21.946 14.5 21.946C18.6122 21.946 21.9459 18.6123 21.9459 14.5C21.9459 10.3878 18.6122 7.05406 14.5 7.05406ZM14.5 19.3334C11.8306 19.3334 9.66661 17.1694 9.66661 14.5C9.66661 11.8307 11.8306 9.66667 14.5 9.66667C17.1693 9.66667 19.3333 11.8307 19.3333 14.5C19.3333 17.1694 17.1693 19.3334 14.5 19.3334ZM23.9801 6.75988C23.9801 7.72087 23.2011 8.49991 22.2401 8.49991C21.2791 8.49991 20.5001 7.72087 20.5001 6.75988C20.5001 5.79889 21.2791 5.01991 22.2401 5.01991C23.2011 5.01991 23.9801 5.79889 23.9801 6.75988Z" fill="#FBFBFB" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2073_445">
                                                    <rect width="29" height="29" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </a>
                                    </div>
                                    <div className='footer-social-div3' >
                                        <a href="https://www.linkedin.com/in/crawley-accountants-b474a1293/" target='_blank'>
                                        <img src={linkedin} className='img-fluid' alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-3 col-md-6 col-12 d-flex justify-content-md-center justify-content-start mt-md-0 mt-5'>
                            <div>
                                <div>
                                    <h1 className='footer-services-text1 ml-lg-3 ml-0'>Our Services</h1>
                                    <ul className='footer-services-ul1 mt-2'>
                                        <li className='footer-services-li1'> <HashLink
                                            class=""
                                            to="/services#bookkeeping"
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={600}
                                        >
                                            Book Keeping
                                        </HashLink></li>
                                        <li className='footer-services-li1'> <HashLink
                                            class=""
                                            to="/services#annualaccounts"
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={600}
                                        >
                                            Annual Accounts
                                        </HashLink></li>
                                        <li className='footer-services-li1'><HashLink
                                            class=""
                                            to="/services#payroll"
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={600}
                                        >
                                            Payroll
                                        </HashLink></li>
                                        <li className='footer-services-li1'><HashLink
                                            class=""
                                            to="/services#businessadvice"
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={600}
                                        >
                                            Business Advice
                                        </HashLink></li>
                                        <li className='footer-services-li1'><HashLink
                                            class=""
                                            to="/services#selfassessment"
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={600}
                                        >
                                            Self Assessment
                                        </HashLink></li>
                                        <li className='footer-services-li1'> <HashLink
                                            class=""
                                            to="/services#vat"
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={600}
                                        >
                                            VAT
                                        </HashLink></li>
                                        <li className='footer-services-li1'> <HashLink
                                            class=""
                                            to="/services#companyformation"
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={600}
                                        >
                                            Company Formation
                                        </HashLink></li>
                                        <li className='footer-services-li1'><HashLink
                                            class=""
                                            to="/services#Corporation Tax"
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={600}
                                        >
                                            Corporation Tax
                                        </HashLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-3 col-md-6 col-12 mt-lg-0  mt-3'>
                            <div>
                                <div>
                                    <h1 className='footer-services-text1 ml-lg-3 ml-0'>Important Link</h1>
                                    <ul className='footer-services-ul1 mt-2'>
                                        <li className='footer-services-li1'><Link to="/about">About Us</Link></li>
                                        <li className='footer-services-li1'><Link to="/privacy-policy">Privacy Policy</Link></li>
                                        <li className='footer-services-li1'><Link to="/privacy-policy">Terms & Conditions</Link></li>
                                        <li className='footer-services-li1'><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-3 col-md-6 col-12 d-flex justify-content-md-center justify-content-start mt-lg-0  mt-3'>
                            <div>
                                <div>
                                    <h1 className='footer-services-text1 '>Contact Us</h1>
                                    <a href="tel:+441293 978498">
                                        <div className='d-flex align-items-center mt-4'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5692 13.2671L8.6305 10.3284C7.81887 9.51676 7.61766 8.27684 8.13098 7.2502L8.29749 6.91719C8.8108 5.89055 8.60959 4.65063 7.79796 3.839L4.15422 0.195262C3.89388 -0.0650874 3.47177 -0.0650874 3.21142 0.195262C3.16075 0.24593 3.11858 0.304434 3.08654 0.368524L1.61457 3.31246C0.488497 5.56461 0.929897 8.28464 2.71037 10.0651L10.7088 18.0636C12.6469 20.0016 15.5136 20.6783 18.1137 19.8116L21.333 18.7385C21.6823 18.6221 21.8711 18.2445 21.7547 17.8952C21.7219 17.7971 21.6668 17.7078 21.5936 17.6347L18.0586 14.0996C17.247 13.288 16.007 13.0868 14.9804 13.6001L14.6474 13.7666C13.6208 14.2799 12.3808 14.0787 11.5692 13.2671Z" fill="#443EBC" />
                                            </svg>
                                            <h1 className='footer-contact-text1'>+44 1293 978498</h1>
                                        </div>
                                    </a>


                                    <a href="mailto:info@crawleyaccountants.com">
                                        <div className='d-flex align-items-center mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.500572C0 0.137743 0.374311 -0.104281 0.705183 0.0446109L18.9868 8.27132C19.3798 8.44821 19.3798 9.00635 18.9868 9.18324L0.705182 17.4099C0.374311 17.5588 0 17.3168 0 16.954V10.2273L16 8.72728L0 7.22728V0.500572Z" fill="#FFBC49" />
                                            </svg>
                                            <h1 className='footer-contact-text1'>info@crawleyaccountants.com</h1>
                                        </div>
                                    </a>

                                    <div className='d-flex align-items-center mt-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.73857 17.6742L5.79373 16.5183C7.20828 17.8665 9.02874 18.7263 11 18.9449V20.0001H10C8.89544 20.0001 8.00001 20.8955 8.00001 22.0001H12H16C16 20.8955 15.1046 20.0001 14 20.0001H13V18.9451C17.5 18.4477 21 14.6326 21 10.0001C21 7.08913 19.6071 4.40909 17.3004 2.72573C16.8543 2.40017 16.2287 2.49791 15.9031 2.94403C15.5776 3.39016 15.6753 4.01574 16.1214 4.3413C17.9176 5.65205 19 7.73475 19 10.0001C19 13.8661 15.866 17.0001 12 17.0001C9.86321 17.0001 7.88624 16.038 6.56408 14.4108C6.17862 13.9364 5.46151 13.9157 5.04941 14.3672L3.26145 16.3259C2.8891 16.7338 2.91792 17.3663 3.32582 17.7386C3.73372 18.111 4.36622 18.0821 4.73857 17.6742Z" fill="#19B8AC" />
                                            <circle opacity="0.3" cx="12" cy="10" r="6" fill="#19B8AC" />
                                        </svg>
                                        <h1 className='footer-contact-text1'>15 York Road, Crawley RH10 5JT, United Kingdom</h1>
                                    </div>

                                    <div className='mt-3'>
                                        <img src={footerpic2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid footer-copyright-div1'>
                <div className='container'>
                    <h1 className='footer-copy-text12'>© 2021 Crawley Accountants. All Rights Reserved | Developed by Flograb</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
