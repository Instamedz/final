import React from 'react'
import "./hifi.css"
import { useNavigate } from 'react-router-dom'
function Hifidoc() {
    const navigate=useNavigate()
    const bookapp=()=>{
        navigate("/appointform")
  }
    return (
        <main className='apphifi-docpg'>
            <header className='hifi-header'>
                {/* <img src="" alt="" /> */}
                <div class="app-header-title">
                    <h1>Choose the Doctor</h1>
                    <p>Select the Medical expert you wish to consult with and proceed to Book Appointment with them</p>
                </div>
            </header>
            <section class="hf-doc-container">
                <div class="hf-doc-side-container">
                <img src="./hifi/sidebar.png" alt=""/>
                <img src="./hifi/msidebar.svg" alt=""/>
                </div>

                <div class="hf-doc-main-container">
                    <div class="hf-child-docmain">

                        <div class="hf-doc-card">
                            <div class="hf-doc-cardchild">
                                <img src="./hifi/praduman.png" alt=""/>
                                <div class="hfdc-text">
                                    <div>
                                    <h4>Dr.Pradyuman Reddy</h4>
                                    <p>MBBS <br/>DNB(GEN Medicine) <br/>15 years Experience <br/>Hindi,Eng <br/> Consults Done </p>
                                    </div>
                                </div>
                                <div class="hfdc-fh">
                                    <div class="hfdc-fh-text">
                                    <p>Consultation Fee <br/> <span>Rs.399</span> </p>
                                    <p>Available Hours <br/> <span>10am to 5pm</span> </p>
                                    </div>
                                  
                                    <button onClick={bookapp}>Book Appointment</button>
                                </div>
                            </div>
                        </div>

                        <div class="hf-doc-card">
                            <div class="hf-doc-cardchild">
                            <img src="./hifi/praduman.png" alt=""/>
                            <div class="hfdc-text">
                                    <div>
                                    <h4>Dr.Pradyuman Reddy</h4>
                                    <p>MBBS <br/>DNB(GEN Medicine) <br/>15 years Experience <br/>Hindi,Eng <br/> Consults Done </p>
                                    </div>
                                </div>
                                <div class="hfdc-fh">
                                <div class="hfdc-fh-text">
                                    <p>Consultation Fee <br/> <span>Rs.399</span> </p>
                                    <p>Available Hours <br/> <span>10am to 5pm</span> </p>
                                    </div>
                                    <button onClick={bookapp}>Book Appointment</button>
                                </div>
                            </div>
                        </div>

                        <div class="hf-doc-card">
                            <div class="hf-doc-cardchild">
                            <img src="./hifi/praduman.png" alt=""/>
                                <div class="hfdc-text">
                                    <h4>Dr.Pradyuman Reddy</h4>
                                    <p>MBBS <br/>DNB(GEN Medicine) <br/>15 years Experience <br/>Hindi,Eng <br/> Consults Done </p>
                                </div>
                                <div class="hfdc-fh">
                                <div class="hfdc-fh-text">
                                    <p>Consultation Fee <br/> <span>Rs.399</span> </p>
                                    <p>Available Hours <br/> <span>10am to 5pm</span> </p>
                                    </div>
                                    <button onClick={bookapp}>Book Appointment</button>
                                </div>
                            </div>
                        </div>

                        <div class="hf-doc-card">
                            <div class="hf-doc-cardchild">
                            <img src="./hifi/praduman.png" alt=""/>
                                <div class="hfdc-text">
                                    <div>
                                    <h4>Dr.Pradyuman Reddy</h4>
                                    <p>MBBS <br/>DNB(GEN Medicine) <br/>15 years Experience <br/>Hindi,Eng <br/> Consults Done </p>
                                    </div>
                                </div>
                                <div class="hfdc-fh">
                                <div class="hfdc-fh-text">
                                    <p>Consultation Fee <br/> <span>Rs.399</span> </p>
                                    <p>Available Hours <br/> <span>10am to 5pm</span> </p>
                                    </div>
                                    <button onClick={bookapp}>Book Appointment</button>
                                </div>
                            </div>
                        </div>

                        <div class="hf-doc-card">
                            <div class="hf-doc-cardchild">
                            <img src="./hifi/praduman.png" alt=""/>
                            <div class="hfdc-text">
                                    <div>
                                    <h4>Dr.Pradyuman Reddy</h4>
                                    <p>MBBS <br/>DNB(GEN Medicine) <br/>15 years Experience <br/>Hindi,Eng <br/> Consults Done </p>
                                    </div>
                                </div>
                                <div class="hfdc-fh">
                                <div class="hfdc-fh-text">
                                    <p>Consultation Fee <br/> <span>Rs.399</span> </p>
                                    <p>Available Hours <br/> <span>10am to 5pm</span> </p>
                                    </div>
                                    <button onClick={bookapp}>Book Appointment</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="hifi-pgno">
                    <ul>
                        <img src="./hifi/leftbtn.svg" alt=""/>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <img src="./hifi/rightbtn.svg" alt=""/>
                    </ul>
                    </div>
                
                </div>
            </section>
        </main>
    )
}

export default Hifidoc