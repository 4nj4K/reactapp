import React from 'react'
import fourstars from '../assets/images/icons/4-stars.svg'
import fivestars from '../assets/images/icons/5-stars.svg'
import fannie from '../assets/images/icons/Fannie.svg'
import albert from '../assets/images/icons/albert.svg'


const Testimonials = () => {
  return (
    <section aria-label="Cliens are loving our app" className="testimonials">
        <div className="container">
            <div className="text">
                <h1 className="title">Clients are loving our app</h1>
            </div>
           

            <div className="testimonials-grid">
                <div className="four-stars">
                    <img src={fourstars} alt="4 stars rating." />
                </div>
                <div className="testimonials-card">
                    <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                </div>
                <div className="icon-container">
                    <img src={fannie} alt="Fannie Summers" />
                </div>
            </div>
                
                <div className="testimonials-grid">
                    <div className="five-stars">
                        <img src={fivestars} alt="5 stars rating." />
                    </div>
                    <div className="testimonials-card">
                        <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                    </div>
                    <div className="icon-container">
                        <img src={albert} alt="Albert Flores" />
                    </div>
                </div>
            
        </div>
    </section>
  )
}

export default Testimonials