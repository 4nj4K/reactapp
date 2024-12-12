import React from 'react'

const Faq = () => {
  return (
    <section aria-label="any questions" className="faq">
        
        <div className="container">
            <div className="text space-y-3">
                <h1 className="h4">Any questions? Check out the FAQs</h1>
                <p className="text-lg">Still have unanswered questions and need to get in touch?</p>

                <div className="questions-grid">

                    <div className="questions-card">
                        <div className="question">
                            <h5>Is any of my personal information stored in the App?</h5>
                            <button className="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                  </svg> 
                            </button>
                        </div>

                        <div className="answer">
                            <div className="expandable">
                                <p className="answ">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="questions-card">
                        <div className="question">
                            <h5>What formats can I download my transaction history in?</h5>
                            <button className="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                  </svg> 
                            </button>
                        </div>

                        <div className="answer">
                            <div className="expandable">
                                <p className="answ">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="questions-card">
                        <div className="question">
                            <h5>Can I schedule future transfers?</h5>
                            <button className="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                  </svg>
                            </button>
                        </div>

                        <div className="answer">
                            <div className="expandable">
                                <p className="answ">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="questions-card">
                        <div className="question">
                            <h5>When can I use Banking App services?</h5>
                            <button className="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                  </svg> 
                            </button>
                        </div>

                        <div className="answer">
                            <div className="expandable">
                                <p className="answ">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="questions-card">
                        <div className="question">
                            <h5>Can I create my own password that is easy for me to remember?</h5>
                            <button className="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                  </svg> 
                            </button>
                        </div>

                        <div className="answer">
                            <div className="expandable">
                                <p className="answ">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="questions-card">
                        <div className="question">
                            <h5>What happens if I forget or lose my password?</h5>
                            <button className="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                  </svg> 
                            </button>
                        </div>

                        <div className="answer">
                            <div className="expandable">
                                <p className="answ">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="question-btns">
                <a href="#" className="contact-btn">
                    <img src="images/icons/contact-call.svg" alt="contact button call" />
                </a>
                <a href="#" className="contact-btn">
                    <img src="images/icons/contact-sms.svg" alt="contact button message" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Faq