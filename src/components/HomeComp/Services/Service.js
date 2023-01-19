import React from 'react'
import "./Service.css"
import data from "./data"
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
function Service() {
  return (
    <section id="services" class="service">
      <div class="services-center">
      <div class="service-title">
        <h1>Our Services</h1>
        <div class="underline"></div>
      </div>
      <div class="allcard-container">
      <AiOutlineLeft className='sv-arrow sal'/>
        {
          data.map((item) => (
            <div className="card-container">
              <div class="img-card-container">
                <img className="photo-child" alt="eye-care" src={item.photo} />
                <div className="card-title">
                  <h3>{item.title}</h3>
              </div>
              </div>
              <div class="card-container2">
                <p className="card-text">
                  {item.text}
                </p>
                <button class="explore-card-btn">explore</button>
              </div> 
            </div>
          ))
        }
      <AiOutlineRight className='sv-arrow sar'/>
      </div>
      </div>
    </section>
  )
}

export default Service


