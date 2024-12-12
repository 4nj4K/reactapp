import React from 'react'
import mob2 from '../assets/images/mobil2-desktop.svg'
import credit from '../assets/images/icons/credit-card.svg'
import shield from '../assets/images/icons/shield.svg'
import bars from '../assets/images/icons/bars-graphic.svg'
import commmunication from '../assets/images/icons/communication.svg'
import wallet from '../assets/images/icons/wallet.svg'
import happy from '../assets/images/icons/happy.svg'

const Features = () => {
  return (
    <section aria-label="app features" className="features">
        <div className="container">
            <div className="iphone">
                <img src={mob2} alt="Iphone with credit card popping out." />
            </div>
            <div className="text space-y-1">
                <h2 className="h1">App Features</h2>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>

                <div className="features-grid">

                    <div className="feature-card">
                        <div className="icon-container">
                            <img src={credit} alt="Credit card icon" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="h5">Easy Payments</h3>
                            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="icon-container">
                            <img src={shield} alt="Credit card icon" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="h5">Data Security</h3>
                            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="icon-container">
                            <img src={bars} alt="Credit card icon" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="h5">Cost Statistics</h3>
                            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="icon-container">
                            <img src={commmunication} alt="Credit card icon" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="h5">Support 24/7</h3>
                            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="icon-container">
                            <img src={wallet} alt="Credit card icon" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="h5">Regular Cashback</h3>
                            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="icon-container">
                            <img src={happy} alt="Credit card icon" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="h5">Top Standards</h3>
                            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Features