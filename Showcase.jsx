import React from 'react'
import apple from '../assets/images/icons/apple-light.svg'
import google from '../assets/images/icons/googleplay-light.svg'
import discover from '../assets/images/icons/discover.svg'
import mob from '../assets/images/mobiler1-desktop.svg'

const Showcase = () => {
  return (
    <section aria-label="showcase" className="showcase">
        <div className="container space-y-3">
            <h1 className="d4">Manage All Your Money In One App</h1>
            <div className="content space-y-3">
                <p className="text-lg">We offer you a new generation of the mobile banking.
                    Save, spend & manage money in your pocket.</p>
                    
                <div className="market-btns">
                    <a href="#" className="store-btn">
                        <img src={apple} alt="appstore" />
                    </a>
                    <a href="#" className="store-btn">
                        <img src={google} alt="google play" />
                    </a>
                </div>

                <div className="more">
                    <a href="#features" className="btn-round-white">
                       <img src={discover} alt="btn" />
                    </a>
                    <span>Discover more</span>
                </div>

            </div>
            <div className="phone-img-container">
                <img src={mob} alt="two phones" />
            </div>

        </div>
    </section> 
  )
}

export default Showcase