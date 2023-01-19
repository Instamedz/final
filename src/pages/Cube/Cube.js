import React, { useState } from 'react'
import "./Cube.css"
import { useEffect } from 'react';
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import Progf from '../../components/cubecomp/Progfeat/Progf';
import { useNavigate } from 'react-router-dom';

function Cube() {
    const [city, setCity] = useState("")
    const navigate=useNavigate()
    const bookapp=()=>{
        navigate("/appointservice")
    }
 
    return (
        <main>
            <div class="cube-hero">
                <div class="cube-hero-container">
                    <div class="ch-title">
                        <h1>CARDIO CARE CAMPAIGN</h1>
                        <p>Get a Complete home heart Checkup and consultation for a Intensivist in minutes.</p>
                    </div>
                    <div class="ch-img-container">
                        <img src="./casset/docvis.png" alt="" />
                    </div>

                </div>

            </div>
            <Progf/>

            <div class="cube-imp">
                <a href=""><img className='cimg' src="./casset/arroww.png" alt="" /></a>
                <div class="cim">
                    <a href=""><img className='cimg' src="./casset/impdevice.png" alt="" /></a>
                    <div class="c-imp-container2">
                        <h2>Impulse-12</h2>
                        <p>Portable 12-Lead ECG Machine to monitor your heart health with convenience. With BARC certification and 100% Accuracy, Impulse-12 runs for 200 readings in one charge and comes with 2- year gurantee</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>

            <div class="c-oldman">
                <a href=""><img className='cimg' src="./casset/woldman.jpg" alt="" /></a>
                <a href=""><img className='cimg' src="./casset/moldman.jpg" alt="" /></a>
            </div>

            <div class="c-expert">
                <img className='cimg' src="./casset/expertw.jpg" alt="" />
                <div class="c-expert-container">
                    <img src="./casset/exp1.png" alt="" />
                    <img src="./casset/exp2.png" alt="" />
                </div>
            </div>

            <div class="cube-appform">
                <div class="cube-app-container">
                    <div class="c-app-title">
                        
                        <div class="c-app-t1">
                            <h2>Appointment Request Form</h2>
                            <p>Please fill in the details for your appointment</p>
                        </div>
                    </div>

                    <form >
                        <div className="ask-form-container">
                            <article>
                                <label for="cname">
                                    <h4>Name</h4>
                                    <input type="text" id="cname" placeholder=""></input>
                                </label>
                                <label for="cphone">
                                    <h4>Phone</h4>
                                    <input type="tel" id="cphone" ></input>
                                </label>
                                <label for="cemail">
                                    <h4>Address</h4>
                                    <input type="email" id="cemail" ></input>
                                </label>
                            </article>

                            <article>
                                <label for="cdate">
                                    <h4>Date</h4>
                                    <input type="date" id="cdate" ></input>
                                </label>
                                <label for="cities">
                                    <h4>City</h4>
                                    <select class="form-control" onChange={(e) => {
                                        setCity(e.target.value)
                                    }}>
                                        <option value="notselected"> --- select city --- </option>
                                        <option value="pune">Pune,Mahasrastra</option>
                                        <option value="indore">Indore,MP</option>
                                    </select>
                                </label>
                            </article>
                        </div>
                        <button class="btn btn-primary book-appointment" id="callback">Book Appointment</button>
                    </form>
                </div>
            </div>


            <section class="cubetest">
                <div class="ctest-header">
                    <img src="./casset/arrowtest.png" alt="" />
                </div>
                <div class="ctest-video-container">
                    <a href="https://www.youtube.com/watch?v=QZIjRA9J3IA"><img src="./casset/ctest-video.jpg" alt="" /></a>
                </div>
            </section>
        </main>

    )
}

export default Cube