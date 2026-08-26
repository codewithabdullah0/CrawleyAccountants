import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Cardsection from './Cardsection';
import './Contact.css';

function Contact() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();

        // Clear previous status
        setFormStatus({ type: '', message: '' });

        // Get form data
        const formData = new FormData(form.current);
        const email = formData.get('email');
        const phone = formData.get('phone');
        const fname = formData.get('fname');
        const lname = formData.get('lname');
        const profession = formData.get('profession');

        // Validate all fields
        if (!email || !phone || !fname || !lname || !profession) {
            setFormStatus({
                type: 'error',
                message: 'Please fill in all fields before submitting.'
            });
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setFormStatus({
                type: 'error',
                message: 'Please enter a valid email address.'
            });
            return;
        }

        // Validate phone number (basic - at least 10 digits)
        const phoneRegex = /^\d{10,}$/;
        if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
            setFormStatus({
                type: 'error',
                message: 'Please enter a valid phone number (minimum 10 digits).'
            });
            return;
        }

        setIsSubmitting(true);

        emailjs.sendForm(
            'service_pugrntb',
            'template_3lt2wyf',
            form.current,
            '6fHU80Ivvvlucsx-o'
        )
            .then((result) => {
                console.log('Email sent successfully!', result.text);
                setFormStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
                });
                form.current.reset();
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error('Failed to send email:', error.text);
                setFormStatus({
                    type: 'error',
                    message: 'Oops! Something went wrong. Please try again later or contact us directly at info@crawleyaccountants.com'
                });
                setIsSubmitting(false);
            });
    };

    return (
        <div>
            <div className='container-fluid calculate-section1-div1'>
                <div className='container contact-section1-div2'>
                    <div>
                        <h1 className='calculate-section1-text1'>CONTACT <span>US</span></h1>
                    </div>

                    <div className='contact-call-maindiv1'>
                        <div className='row'>
                            <div className='col-lg-6 col-12'>
                                <a href='tel:+441293 978498'>
                                    <div className='contact-call-div1 d-flex'>
                                        <div>
                                            <div className='contact-call-icon-div1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 27 26" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.7289 17.0907L9.9128 13.3051C8.85885 12.2595 8.59757 10.6623 9.26414 9.33974L9.48036 8.91075C10.1469 7.58823 9.88565 5.99096 8.83171 4.94542L4.10009 0.251537C3.76201 -0.0838458 3.21387 -0.0838458 2.87579 0.251537C2.81 0.316808 2.75524 0.392173 2.71363 0.474734L0.802189 4.26712C-0.660086 7.16834 -0.0868988 10.6723 2.22516 12.9659L12.6116 23.2695C15.1283 25.7661 18.8509 26.6379 22.2274 25.5214L26.4078 24.139C26.8614 23.989 27.1065 23.5027 26.9553 23.0527C26.9128 22.9262 26.8412 22.8113 26.7462 22.717L22.1558 18.1632C21.1018 17.1176 19.4917 16.8584 18.1585 17.5197L17.7261 17.7342C16.393 18.3955 14.7828 18.1363 13.7289 17.0907Z" fill="#F1F1F1" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <h1 className='contact-call-icon-text1'>Call Us
                                                <br />
                                                <span>+44 1293 978498</span>
                                            </h1>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className='col-lg-6 col-12 mt-lg-0 mt-4'>
                                <a href='mailto:info@crawleyaccountants.com'>
                                    <div className='contact-mail-div1 d-flex'>
                                        <div>
                                            <div className='contact-mail-icon-div1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.351028 12.6284C0.0944698 12.3718 0.188009 11.936 0.527253 11.8073L30.3498 0.495334C30.7528 0.342459 31.1475 0.73712 30.9946 1.14016L19.6826 30.9627C19.5539 31.3019 19.1181 31.3955 18.8616 31.1389L0.351028 12.6284ZM27.0363 4.45772L11.2441 23.5173L7.97674 20.2499L27.0363 4.45772Z" fill="white" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <h1 className='contact-call-icon-text1'>Email Us
                                                <br />
                                                <span>info@crawleyaccountants.com</span>
                                            </h1>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='contact-form-div1'>
                        <div>
                            {/* Status Message Display */}
                            {formStatus.message && (
                                <div style={{
                                    padding: '12px 20px',
                                    marginBottom: '20px',
                                    borderRadius: '4px',
                                    backgroundColor: formStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                                    color: formStatus.type === 'success' ? '#155724' : '#721c24',
                                    border: formStatus.type === 'success' ? '1px solid #c3e6cb' : '1px solid #f5c6cb',
                                    fontSize: '14px',
                                    fontFamily: 'Poppins, sans-serif'
                                }}>
                                    {formStatus.message}
                                </div>
                            )}

                            <form ref={form} onSubmit={sendEmail} className="contact-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="d-flex calculate-input-field-div1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.96094 6C4.85637 6 3.96094 6.89543 3.96094 8V17C3.96094 18.1046 4.85637 19 5.96094 19H19.9609C21.0655 19 21.9609 18.1046 21.9609 17V8C21.9609 6.89543 21.0655 6 19.9609 6H5.96094ZM20.1213 8.14443C19.9249 7.77972 19.4701 7.64327 19.1054 7.83965L12.9609 11.1482L6.81651 7.83965C6.45181 7.64327 5.99696 7.77972 5.80058 8.14443C5.60421 8.50913 5.74066 8.96397 6.10536 9.16035L12.6054 12.6604C12.8273 12.7799 13.0945 12.7799 13.3165 12.6604L19.8165 9.16035C20.1812 8.96397 20.3177 8.50913 20.1213 8.14443Z" fill="#292668" />
                                            </svg>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control calculate-input-field"
                                                placeholder="Email Address"
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="d-flex calculate-input-field-div1 mt-lg-0 mt-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.0851 14.1427L9.88108 11.9387C9.27236 11.33 9.12145 10.4 9.50644 9.63003L9.63132 9.38027C10.0163 8.6103 9.8654 7.68035 9.25668 7.07163L6.52387 4.33883C6.32861 4.14357 6.01203 4.14357 5.81677 4.33883C5.77876 4.37683 5.74714 4.42071 5.72311 4.46878L4.61913 6.67673C3.77458 8.36584 4.10563 10.4059 5.44098 11.7412L11.4398 17.74C12.8933 19.1936 15.0434 19.7011 16.9935 19.0511L19.408 18.2463C19.6699 18.1589 19.8115 17.8758 19.7242 17.6138C19.6997 17.5402 19.6583 17.4733 19.6034 17.4184L16.9521 14.7671C16.3434 14.1584 15.4135 14.0075 14.6435 14.3925L14.3937 14.5173C13.6238 14.9023 12.6938 14.7514 12.0851 14.1427Z" fill="#292668" />
                                            </svg>
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="form-control calculate-input-field"
                                                placeholder="Phone Number"
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mt-lg-4 mt-3">
                                        <div className="d-flex calculate-input-field-div1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.3" d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z" fill="#292668" />
                                                <path d="M3.00065 20.1992C3.38826 15.4265 7.26191 13 11.9833 13C16.7712 13 20.7049 15.2932 20.9979 20.2C21.0096 20.3955 20.9979 21 20.2467 21C16.5411 21 11.0347 21 3.7275 21C3.47671 21 2.97954 20.4592 3.00065 20.1992Z" fill="#292668" />
                                            </svg>
                                            <input
                                                type="text"
                                                name="fname"
                                                className="form-control calculate-input-field"
                                                placeholder="First Name"
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mt-lg-4 mt-3">
                                        <div className="d-flex calculate-input-field-div1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.3" d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z" fill="#292668" />
                                                <path d="M3.00065 20.1992C3.38826 15.4265 7.26191 13 11.9833 13C16.7712 13 20.7049 15.2932 20.9979 20.2C21.0096 20.3955 20.9979 21 20.2467 21C16.5411 21 11.0347 21 3.7275 21C3.47671 21 2.97954 20.4592 3.00065 20.1992Z" fill="#292668" />
                                            </svg>
                                            <input
                                                type="text"
                                                name="lname"
                                                className="form-control calculate-input-field"
                                                placeholder="Last Name"
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mt-lg-4 mt-3">
                                        <div className="d-flex calculate-input-field-div1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.3" d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z" fill="#292668" />
                                                <path d="M3.00065 20.1992C3.38826 15.4265 7.26191 13 11.9833 13C16.7712 13 20.7049 15.2932 20.9979 20.2C21.0096 20.3955 20.9979 21 20.2467 21C16.5411 21 11.0347 21 3.7275 21C3.47671 21 2.97954 20.4592 3.00065 20.1992Z" fill="#292668" />
                                            </svg>
                                            <input
                                                type="text"
                                                name="profession"
                                                className="form-control calculate-input-field"
                                                placeholder="Enter your Profession Here"
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    <div className='col-12 calculate-btn1-div1'>
                                        <button
                                            className='col-12 calculate-btn1'
                                            type="submit"
                                            disabled={isSubmitting}
                                            style={{
                                                opacity: isSubmitting ? 0.7 : 1,
                                                cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                            }}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Start Now'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Cardsection />
        </div>
    );
}

export default Contact;