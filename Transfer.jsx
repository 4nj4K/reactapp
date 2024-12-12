import React from 'react'
import circle from '../assets/images/icons/bx-check-circle.svg'
import arrow from '../assets/images/icons/arrow.svg'
import left from '../assets/images/image-left.svg'
import right from '../assets/images/image-right.svg'
import credit from '../assets/images/icons/credit-card.svg'
import wallet from '../assets/images/icons/wallet.svg'

const Transfer = () => {
  return (
    <section aria-label="transfer simple and clear" className="transfer">
        <div className="container">
            <div className="check">

                <h1 className="h2">Make your money transfer simple and clear</h1>  
                
                <div className="check-list">
                    
                    <div className="check-line">
                        <div className="check-icon">
                            <img src={circle} alt="check icon" />
                        </div>
                        <div className="text-space-y-1">
                            <p>Banking transactions are free for you</p>
                    </div>
                </div>
                <div className="check-line">
                    <div className="check-icon">
                        <img src={circle} alt="check icon" />
                    </div>
                    <div className="text-space-y-1">
                        <p>No monthly cash commission</p>
                    </div>
                </div>
                <div className="check-line">
                    <div className="check-icon">
                        <img src={circle} alt="check icon" />
                    </div>
                    <div className="text-space-y-1">
                        <p>Manage payments and transactions online</p>
                    </div>
                </div>
                <div className="more-btn">
                    <a href="#" className="learn-more">
                        <span>Learn more</span>
                        <img className="arrow" src={arrow} alt="" />
                    </a>
                </div>
                
                <div className="contacts">
                    <img src={left} alt="pictures of contacts with a card on top." />
                </div>
            </div>
                
            </div>
            <div className="payment">
                <div className="forecast">
                    <img src={right} alt="image of forecast" />
                </div>
                <div className="texts-space-y-1">
                    <h1 className="h2">Receive payment from international bank details</h1>
                    
                    <div className="payment-grid">
                        
                        <div className="payment-card">
                            <div className="payment-icon">
                                <img src={credit} alt="credit card icon" />
                            </div>
                            <div className="text-space-y-1">
                                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                            </div>
                        </div>
                        <div className="payment-card">
                            <div className="payment-icon">
                                <img src={wallet} alt="wallet icon" />
                            </div>
                            <div className="text-space-y-1">
                                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                            </div>
                        </div>
                        <div className="more-btn">
                            <a href="#" className="learn-more">
                                <span>Learn more</span>
                                <img className="arrow" src={arrow} alt="arrow" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </section>
  )
}

export default Transfer