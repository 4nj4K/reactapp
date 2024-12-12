import React from 'react'
import mail from '../assets/images/icons/mail.svg'

const Contact = () => {
  return (
    <section className="contact-us">
        <div className="container space-y-3">

            <h1 className="d4">Contact us</h1>
            <div className="contact-grid space-y-1">
                
                <div className="contact-card">
                    <div className="img-container">
                        <img className="icon" src={mail} alt="mail icon" />
                    </div>
                    <div className="contact">
                        <h3 className="h5">Email us</h3>
                        <p>Please feel free to drop us a line. We will respond ass soon as possible.</p>
                        <a className="link" href="#">Leave a message</a>
                    </div>
                </div>
                
                <div className="contact-card">
                    <div className="img-container">
                        <img className="icon" src="images/social-btn/icons/contact.svg" alt="contact icon" />
                    </div>
                    <div className="contact">
                        <h3 className="h5">Careers</h3>
                        <p>Sit ac ipsum lorem magna nunc mattis maecenas non vestibulum</p>
                        <a className="link" href="#">Send an application</a>
                    </div>
                </div>
                
                <div className="form-container">
                    <h2>Get Online Conultation</h2>
                    <form>
                        <label for="full-name">Full name</label>
                        <input type="text" name="full-name" id="full-name" />
                        
                        <label for="email">Email adress</label>
                        <input type="email" name="email" id="name" />
                        
                        <label for="specialist">Specialist</label>
                        <input type="specialist" name="speialist" id="specialist" />
                        
                        <div className="appt.btn">
                            <a href="#" className="appt">
                                <span>Make an appointment</span>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section> 
  )
}

export default Contact