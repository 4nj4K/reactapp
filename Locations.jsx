import React from 'react'
import map from '../assets/images/map.svg'
import pin from '../assets/images/icons/icons/pin.svg'
import icon from '../assets/images/icons/icons/phone.svg'
import clock from '../assets/images/icons/icons/clock.svg'

const Locations = () => {
  return (
    <section className="locations">
        <div className="container">

            <div className="map">
                <img src={map} alt="map" />
            </div>
            <div className="medical-grid">
                <h3>Medical Center 1</h3>
                <div className="medical-card">
                        <div className="med.img">
                            <img className="icon" src={pin} alt="icon" />
                        </div>
                        <div className="text">
                            <p>  4517 Washington Ave. Manchester, Kentucky 39495</p>
                        </div>
                        <div className="medical-card">
                            <div className="med.img">
                                <img className="icon" src={icon} alt="icon" />
                            </div>
                            <div className="text">
                                <p>(406) 555-0120</p>
                            </div>
                        </div>
                        <div className="medical-card">
                            <div className="med.img">
                                <img className="icon" src={clock} alt="icon" />
                            </div>
                            <div className="text">
                                <p>  <strong>Mon - Fri:</strong> 9:00 am - 22:00 pm</p>
                                <p> <strong>Sat - Sun:</strong> 9:00 am - 20:oo pm</p>
                            </div>
                        </div>
                </div>

                <h3>Medical Center 2</h3>
                <div className="medical-card">
                    <div className="med.img">
                        <img className="icon" src={pin} alt="icon" />
                    </div>
                    <div className="text">
                        <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
                    </div>
                    <div className="medical-card">

                        <div className="med.img">
                            <img className="icon" src={icon} alt="icon" />
                        </div>
                        <div className="text">
                            <p>(406) 544-0123</p>
                        </div>
                    </div>
                    <div className="medical-card">

                        <div className="med.img">
                            <img className="icon" src={clock} alt="icon" />
                        </div>
                        <div className="text">
                            <p>  <strong>Mon - Fri:</strong> 9:00 am - 22:00 pm</p>
                            <p> <strong>Sat - Sun:</strong> 9:00 am - 20:oo pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Locations