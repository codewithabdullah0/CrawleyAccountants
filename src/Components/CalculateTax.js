import React from 'react'
import './CalculateTax.css'
import Cardsection from './Cardsection'
import linesvg8 from '../Pics/Group (8).svg'
import linesvg9 from '../Pics/Group (9).svg'


function CalculateTax() {
    return (
        <div>
            <div className='container-fluid calculate-section1-div1 '>
                <div>
                    <img src={linesvg8} className='line-svg-8' alt="" />
                </div>
                <div>
                    <img src={linesvg9} className='line-svg-9' alt="" />
                </div>

                <div className='container calculate-section1-div2'>
                    <div>
                        <h1 className='calculate-section1-text1'>CALCULATE <span>TAX</span></h1>
                        <p className='calculate-section1-text2'>Let us handle the accounting so that you can focus on your business <br className='d-md-block d-none'/>
                            Offering you expert business advice and support, delivered by friendly team.</p>
                    </div>

                    <div className='calculate-form-div1'>
                        <div className=''>
                            <form className="contact-form" >
                                <div class="row">
                                    <div class="col-lg-6 ">
                                        <div class="d-flex calculate-input-field-div1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.96094 6C4.85637 6 3.96094 6.89543 3.96094 8V17C3.96094 18.1046 4.85637 19 5.96094 19H19.9609C21.0655 19 21.9609 18.1046 21.9609 17V8C21.9609 6.89543 21.0655 6 19.9609 6H5.96094ZM20.1213 8.14443C19.9249 7.77972 19.4701 7.64327 19.1054 7.83965L12.9609 11.1482L6.81651 7.83965C6.45181 7.64327 5.99696 7.77972 5.80058 8.14443C5.60421 8.50913 5.74066 8.96397 6.10536 9.16035L12.6054 12.6604C12.8273 12.7799 13.0945 12.7799 13.3165 12.6604L19.8165 9.16035C20.1812 8.96397 20.3177 8.50913 20.1213 8.14443Z" fill="#292668" />
                                            </svg>
                                            <input
                                                type="email"
                                                name="email"
                                                class="form-control calculate-input-field"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-md-0 mt-3">
                                        <div class="d-flex calculate-input-field-div1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0851 14.1427L9.88108 11.9387C9.27236 11.33 9.12145 10.4 9.50644 9.63003L9.63132 9.38027C10.0163 8.6103 9.8654 7.68035 9.25668 7.07163L6.52387 4.33883C6.32861 4.14357 6.01203 4.14357 5.81677 4.33883C5.77876 4.37683 5.74714 4.42071 5.72311 4.46878L4.61913 6.67673C3.77458 8.36584 4.10563 10.4059 5.44098 11.7412L11.4398 17.74C12.8933 19.1936 15.0434 19.7011 16.9935 19.0511L19.408 18.2463C19.6699 18.1589 19.8115 17.8758 19.7242 17.6138C19.6997 17.5402 19.6583 17.4733 19.6034 17.4184L16.9521 14.7671C16.3434 14.1584 15.4135 14.0075 14.6435 14.3925L14.3937 14.5173C13.6238 14.9023 12.6938 14.7514 12.0851 14.1427Z" fill="#292668" />
                                            </svg>
                                            <input
                                                type="number"
                                                name="phone"
                                                class="form-control calculate-input-field"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-md-4 mt-3">
                                        <div class="d-flex calculate-input-field-div1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.3" d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z" fill="#292668" />
                                                <path d="M3.00065 20.1992C3.38826 15.4265 7.26191 13 11.9833 13C16.7712 13 20.7049 15.2932 20.9979 20.2C21.0096 20.3955 20.9979 21 20.2467 21C16.5411 21 11.0347 21 3.7275 21C3.47671 21 2.97954 20.4592 3.00065 20.1992Z" fill="#292668" />
                                            </svg>
                                            <input
                                                type="text"
                                                name="fname"
                                                class="form-control calculate-input-field"
                                                placeholder="First Name"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-lg-6 mt-md-4 mt-3">
                                        <div class="d-flex calculate-input-field-div1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.3" d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z" fill="#292668" />
                                                <path d="M3.00065 20.1992C3.38826 15.4265 7.26191 13 11.9833 13C16.7712 13 20.7049 15.2932 20.9979 20.2C21.0096 20.3955 20.9979 21 20.2467 21C16.5411 21 11.0347 21 3.7275 21C3.47671 21 2.97954 20.4592 3.00065 20.1992Z" fill="#292668" />
                                            </svg>
                                            <input
                                                type="text"
                                                name="lname"
                                                class="form-control calculate-input-field"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>
                                    <div className=' col-12 calculate-btn1-div1'>
                                        <button className='col-12 calculate-btn1'>Start Now</button>
                                    </div>

                                </div>
                            </form>
                        </div>

                        
                    </div>
                </div>
            </div>

            <Cardsection></Cardsection>
        </div>
    )
}

export default CalculateTax
