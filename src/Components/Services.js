import React from 'react'
import './Services.css'
import svgimg1 from '../Pics/Group (2).svg'
import svgimg2 from '../Pics/Group (3).svg'
import svgimg4 from '../Pics/Group 1000002919.svg'
import svgimg5 from '../Pics/Group (4).svg'
import svgimg3 from '../Pics/Group 1000002920.svg'
import ServiceLastCardSec from './ServiceLastCardSec'
import svgimg6 from '../Pics/Group (5).svg'
import svgimg7 from '../Pics/Group (6).svg'
import { HashLink } from "react-router-hash-link";
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom'



function Services() {
    return (
        <div>
            <div className='container-fluid services-section1-div1'>
                <div className='container '>
                    <div>
                        <h1 className='services-section1-text1'>Services</h1>
                        <div> 
                            <ul class="navbar-nav services-section1-ul1">
                                <li class="nav-item">
                                    <HashLink
                                        class="nav-link services-section1-text2"
                                        to="#bookkeeping"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={600}
                                    >
                                        Book Keeping 
                                    </HashLink>
                                </li>
                                <li class="nav-item">
                                    <HashLink
                                        class="nav-link services-section1-text2"
                                        to="#annualaccounts"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={600}
                                    >
                                        Annual Accounts
                                    </HashLink>
                                </li>
                                <li class="nav-item">
                                    <HashLink
                                        class="nav-link services-section1-text2"
                                        to="#payroll"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={600}
                                    >
                                        Payroll
                                    </HashLink>
                                </li>
                                <li class="nav-item">
                                    <HashLink
                                        class="nav-link services-section1-text2"
                                        to="#selfassessment"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={600}
                                    >
                                        Self Assessment
                                    </HashLink>
                                </li>
                                <li class="nav-item">
                                    <HashLink
                                        class="nav-link services-section1-text2"
                                        to="#vat"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={600}
                                    >
                                        VAT
                                    </HashLink>
                                </li>
                                <li class="nav-item">
                                    <HashLink
                                        class="nav-link services-section1-text2"
                                        to="#companyformation"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={600}
                                    >
                                        Company Formation
                                    </HashLink>
                                </li>
                                <li class="nav-item">
                                    <HashLink
                                        class="nav-link services-section1-text2"
                                        to="#Corporation Tax"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={600}
                                    >
                                        Corporation Tax
                                    </HashLink>
                                </li>
                            </ul>
                        </div>
                    </div>


{/* Card sections ####### */}


                    <div className='services-cards-maindiv1'>

                    <Fade top distance="6%" duration={1200}>
                        <div className='container services-cards-div1' id='bookkeeping'>
                            <div className='row'>
                                <div className='col-lg-4 col-12 d-lg-none d-block ' >
                                    <div className='service-card-pic-div1'>
                                        <img src={svgimg1} className='img-fluid service-card-pics11'  alt="" />
                                    </div>
                                </div>
                                <div className='col-lg-8 col-12 '>
                                    <div className='service-card-textdiv11'>
                                        <h1 className='service-card-text11'>Book Keeping</h1>
                                        <p className='service-card-text12'>Crawley Accountants Ltd take away your headache and <br></br> provide you with quality book keeping services tailored to suit <br /> the specific needs of your business ..</p>
                                        <Link to='/contact' className='service-card-btn1' >Get Started</Link>
                                    </div>
                                </div>

                                <div className='col-4 d-lg-block d-none'>
                                    <div className='service-card-pic-div1'>
                                        <img src={svgimg1} className='img-fluid service-card-pics11'  alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>

                        <Fade top distance="6%" duration={1200}>
                        <div className='container services-cards-div2' id='annualaccounts'>
                            <div className='row'>
                                 <div className='col-lg-4 col-12 d-lg-none d-block ' >
                                    <div className='service-card-pic-div1'>
                                        <img src={svgimg2} className='img-fluid service-card-pics11' alt="" />
                                    </div>
                                </div>
                                <div className='col-lg-8 col-12'>
                                    <div className='service-card-textdiv11'>
                                        <h1 className='service-card-text11'>Annual Accounts and Corporation Tax</h1>
                                        <p className='service-card-text12'>With increased reporting obligations, more robust investigation policies on the part of the tax authorities, and harsher penalties for non-compliance, you could be spending an undue amount of your time and resources dealing with accounts...... <span> Read More</span></p>
                                        <Link to='/contact' className='service-card-btn1' >Get Started</Link>
                                    </div>
                                </div>

                                <div className='col-4 d-lg-block d-none'>
                                    <div className='service-card-pic-div1'>
                                        <img src={svgimg2} className='img-fluid service-card-pics11' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>

                        <Fade top distance="6%" duration={1200}>
                        <div className='container services-cards-div3' id='payroll'>
                            <div className='row'>
                                <div className='col-lg-4 col-12 d-lg-none d-block '>
                                    <div className='service-card-pic-div1'>
                                        <img src={svgimg3} className='img-fluid service-card-pics11' alt="" />
                                    </div>
                                </div>
                                <div className='col-lg-8 col-12'>
                                    <div className='service-card-textdiv11'>
                                        <h1 className='service-card-text11'>Payroll</h1>
                                        <p className='service-card-text12'>We provide a comprehensive and confidential payroll service, including: Registration with HM Revenue and Customs as an employer; Customised payslips; Administration of PAYE, national insurance, ...... <span> Read More</span></p>
                                        <Link to='/contact' className='service-card-btn1' >Get Started</Link>
                                    </div>
                                </div>

                                <div className='col-4 d-lg-block d-none'>
                                    <div className='service-card-pic-div1'>
                                        <img src={svgimg3} className='img-fluid service-card-pics11' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>

                        <Fade top distance="6%" duration={1200}>
                        <div className='container services-cards-div4' id='businessadvice'>
                            <div className='row'>
                                 <div className='col-lg-4 col-12 d-lg-none d-block'>
                                    <div className='service-card-pic-div1'>
                                        <img src={svgimg4} className='img-fluid service-card-pics11' alt="" />
                                    </div>
                                </div>
                                <div className='col-lg-8 col-12'>
                                    <div className='service-card-textdiv11'>
                                        <h1 className='service-card-text11'>Business Advice</h1>
                                        <p className='service-card-text12'>We understand the need of appropriate and most suitable business guidelines which are the part of every milestone in the life of a running business. Our guidelines help you to focus on your targets with proper planning and growth.</p>
                                        <Link to='/contact' className='service-card-btn1' >Get Started</Link>
                                    </div>
                                </div>

                                <div className='col-4 d-lg-block d-none'>
                                    <div className='service-card-pic-div1'>
                                        <img src={svgimg4} className='img-fluid service-card-pics11' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>

                        <Fade top distance="6%" duration={1200}>
                        <div className='container services-cards-div5 ' id='selfassessment'>
                            <div className='row'>
                                 <div className='col-lg-4 col-12 d-lg-none d-block'>
                                    <div className='service-card-pic-div1'>
                                        <img src={svgimg5} className='img-fluid service-card-pics11' alt="" />
                                    </div>
                                </div>
                                <div className='col-lg-8 col-12'>
                                    <div className='service-card-textdiv11'>
                                        <h1 className='service-card-text11'>Self Assessment</h1>
                                        <p className='service-card-text12'>We can prepare and submit your personal tax returns, calculate your tax liability and can help you meet the deadlines for payments. As part of this process, we can analyse your self assessment tax return to see if any tax savings are ...... <span> Read More</span></p>
                                        <Link to='/contact' className='service-card-btn1' >Get Started</Link>
                                    </div>
                                </div>

                                <div className='col-4 d-lg-block d-none'>
                                    <div className='service-card-pic-div1'>
                                        <img src={svgimg5} className='img-fluid service-card-pics11' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>

                        <Fade top distance="6%" duration={1200}>
                        <div className='container services-cards-div1' id='vat'>
                            <div className='row'>
                                <div className='col-lg-4 col-12 d-lg-none d-block'>
                                    <div className='service-card-pic-div1'>
                                        <img src={svgimg6} className='img-fluid service-card-pics11' alt="" />
                                    </div>
                                </div>
                                <div className='col-lg-8 col-12'>
                                    <div className='service-card-textdiv11'>
                                        <h1 className='service-card-text11'>VAT</h1>
                                        <p className='service-card-text12'>We offer an efficient, cost effective VAT service, which includes: Assistance with VAT registration, Advice on VAT planning and administration, Use of the most appropriate scheme, VAT control and reconciliation, ...... <span> Read More</span></p>
                                        <Link to='/contact' className='service-card-btn1' >Get Started</Link>
                                    </div>
                                </div>

                                <div className='col-4 d-lg-block d-none'>
                                    <div className='service-card-pic-div1'>
                                        <img src={svgimg6} className='img-fluid service-card-pics11' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>

                        <Fade top distance="6%" duration={1200}>
                        <div className='container services-cards-div2' id='companyformation'>
                            <div className='row'>
                                 <div className='col-lg-4 col-12 d-lg-none d-block'>
                                    <div className='service-card-pic-div1'>
                                        <img src={svgimg7} className='img-fluid service-card-pics11' alt="" />
                                    </div>
                                </div>
                                <div className='col-lg-8 col-12'>
                                    <div className='service-card-textdiv11'>
                                        <h1 className='service-card-text11'>Company Formation</h1>
                                        <p className='service-card-text12'>We help in the formation of new company by providing the services like advice on incorporation, assistance with shareholder agreement, registered Office, Company Secretarial service, VAT review and analysis etc.</p>
                                        <Link to='/contact' className='service-card-btn1' >Get Started</Link>
                                    </div>
                                </div>

                                <div className='col-4 d-lg-block d-none'>
                                    <div className='service-card-pic-div1'>
                                        <img src={svgimg7} className='img-fluid service-card-pics11' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>

                    </div>

                    
                </div>
            </div>

            <ServiceLastCardSec></ServiceLastCardSec>
        </div>
    )
}

export default Services
