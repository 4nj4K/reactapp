import React from 'react'
import mobleft from '../assets/images/iphone-left.svg'
import mobmiddle from '../assets/images/iphone-middle.svg'
import mobright from '../assets/images/iphone-right.svg'

const Carousel = () => {
  return (
    <section aria-label="How does it work" className="carousel-section">
        <div className="container space-y-3">
            <h2 className="h1">How does it work?</h2>

            <div className="carousel">
                <div className="carousel-item">
                    <img src={mobleft} alt="" />
                </div>
                <div className="carousel-item">
                    <img src={mobmiddle} alt="" />
                </div>
                <div className="carousel-item">
                    <img src={mobright} alt="" />
                </div>
            </div>

            <div className="text">
                <h3 className="h4">Latest transaction history</h3>
                <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
            </div>

        </div>
    </section>
  )
}

export default Carousel