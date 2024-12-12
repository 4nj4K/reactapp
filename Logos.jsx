import React from 'react'
import logo1 from '../assets/images/logos/logoipsum-1.svg'
import logo2 from '../assets/images/logos/logoipsum-2.svg'
import logo3 from '../assets/images/logos/logoipsum-3.svg'
import logo4 from '../assets/images/logos/logoipsum-4.svg'
import logo5 from '../assets/images/logos/logoipsum-5.svg'
import logo6 from '../assets/images/logos/logoipsum-6.svg'

const Logos = () => {
  return (
    <section aria-label="our costumers" className="logos">
        <div className="container">
            <div className="logo-card">
                <img src={logo1} alt="logoipsum" />
            </div>
            <div className="logo-card">
                <img src={logo2} alt="logoipsum" />
            </div>
            <div className="logo-card">
                <img src={logo3} alt="logoipsum" />
            </div>
            <div className="logo-card">
                <img src={logo4} alt="logoipsum" />
            </div>
            <div className="logo-card">
                <img src={logo5} alt="logoipsum" />
            </div>
            <div className="logo-card">
                <img src={logo6} alt="logoipsum" />
            </div>
        </div>  
    </section>
  )
}

export default Logos