import "./consult.css";

import React from 'react'
import Service from "../../components/HomeComp/Services/Service";
import Faq from "../../components/faq/Faq";
import { useNavigate } from "react-router-dom";

function Consult() {
  const navigate=useNavigate()
    return ( 
    <main className="consultpage">
        <header className="consult-hero">
          <div>
          <a href="/appointservice"><img src="./consult/Group 37.svg" alt=""/></a>
            <img className="nursephote"  src="./consult/nurse.svg" alt=""/>
          </div>
          <img onClick={()=>navigate("/appointservice")}  src="./consult/consulthero.jpg" alt=""/>
          
        </header>
        {/* src="./rectangle-4@2x.png" */}


        <section class="experts">
        {/* <div class="service-title">
        <h1>Our Products</h1>
        <div class="underline"></div> */}
            <div class="experts-title">
                <h2>Our Experts</h2>
            </div>
            <img src="./ourexperts.png" alt=""/>
            <div class="c-expert-container">
                    <img src="./consult/exp1.png" alt="" />
                    <img src="./consult/exp2.png" alt="" />
                    <img src="./consult/exp3.png" alt="" />
                </div>

        </section>

        <Service/>
        <Faq/>





    
    </main>
    
  )
}

export default Consult


