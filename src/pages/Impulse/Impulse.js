import React from 'react'
import "./Impulse.css"
import { useState } from 'react'

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai"
import Faq from '../../components/faq/Faq'
import data from "./impdata"

function Impulse() {
  const [query, setQuery] = useState("")
  const [email, setemail] = useState("")
  const [cname, setCname] = useState("")
  const [prevMode, setImp] = useState(true)


  function handleinput(e) {
    if (e.target.name === "query") {
      setQuery(e.target.value)
    }
    if (e.target.name === "email") {
      setemail(e.target.value)
    }
    if (e.target.name === "cname") {
      setCname(e.target.value)
    }
  }
  const scrolll = () => {
    var left = document.querySelector(".card-video-container")
    left.scrollBy(350, 0)
  }
  const scrollr = () => {
    var right = document.querySelector(".card-video-container")
    right.scrollBy(-350, 0)
  }
  const onsubmit = async () => {

    // const data=new Date().toLocaleDateString()
    // Time:new Date().toLocaleTimeString()}]


    // const resultresp=await axios.post("https://sheetdb.io/api/v1/vebsfk5upa3hw",{
    //      data:[{Name:cname,
    //         Email:email,
    //         Query:query}]

    // })
    // console.log(resultresp)
  }
  return (
    <div class="impulse-page">

      <header>

        <div class="impulse-hero1">
            <img src="./Imp-assest/iwh.jpg" alt="" />
            <img src="./Imp-assest/impm1.png" alt="" />
        </div>
        <div class="impulse-hero2">
          <img src="./Imp-assest/impulse2.svg" alt="" />
          <img src="./Imp-assest/impm2.png" alt="" />
        </div>
      </header>

      <section class="impulseform">
        <div class="impulseform-container2">
          {/* <div class="imp-form-title">
            <h2>Try before you buy</h2>
            <p>Book a free demo of Impulse-12 at your doorstep by filing the details below</p>

          </div> */}

          <div className='hc-container2-child'>
            <div class="hc-title">
              <h2>Try before you buy</h2>
              <p>Book a free demo of Impulse-12 at your doorstep by filing the details below</p>
            </div>
            <div>
              <div class="form-group">
                <input type="text" class="form-control" onChange={(e) => handleinput(e)} name="cname" placeholder="Name" />
              </div>

              <div class="form-group">
                <input type="tel" class="form-control" onChange={(e) => handleinput(e)} name="phone" aria-describedby="emailHelp" placeholder="Phone" />

              </div>
              <div class="form-group">
                <input type="text" class="form-control" onChange={(e) => handleinput(e)} name="pin" aria-describedby="emailHelp" placeholder="Pincode" />

              </div>
            </div>
            <button onClick={onsubmit} class="btn btn-primary book-appointment" id="callback">Book a Free Demo</button>
          </div>


        </div>
      </section>

      <section class="deviceinfo">
        <div class="impulsedevice imp-c">
          <img className='impdevicew' onClick={() => setImp(prevMode => !prevMode)}
            src={prevMode ? "./impulse4.svg" : "./impulse22.svg"} alt="" />

          <img className='impdevicem' onClick={() => setImp(prevMode => !prevMode)}
            src={prevMode ? "./Imp-assest/impdevicem1.jpg" : "./Imp-assest/impdevicem2.jpg"} alt="" />

          {/* <img src="./impulse4.svg" alt="" /> */}
        </div>
      </section>

      {/* how to use direction */}
      <section className='direction-use'>
        <h3>How to use Impulse-12</h3>
        <div class="direction-use-child">
          <button className='left-icon' onClick={scrolll}><AiOutlineDoubleLeft /></button>
          {/* <button class="icon"><i className='fas fa-angle-double-left'></i></button> */}
          <div class="card-video-container">
            <div class="card-video">
            <img src="./Imp-assest/step1.jpg" ></img>
              <h4>step1</h4>
            </div>
            <div class="card-video">
              <img src="./Imp-assest/step2.jpg" ></img>
              <h4>step2</h4>
            </div>
            <div class="card-video">
            <img src="./Imp-assest/step3.jpg" ></img>
              <h4>step3</h4>
            </div>
            <div class="card-video">
            <img src="./Imp-assest/autor1.jpg" ></img>
              <h4>step4</h4>
            </div>
          </div>
          <button className='right-icon' onClick={scrollr}><AiOutlineDoubleRight /></button>

        </div>
        {/* <div class="device-steps imp-c">
          <img src="./impulsestep.svg" alt="" />
        </div> */}
      </section>

      <section class="imptestimonial">
        <div>
          <div class="imp-testimonial-title">
            <h3>Testimonial</h3>
          </div>
          <div class="imp-test-container">
            <div class="imp-test-cards">

              {
                data.map((item) => (
                  <div class="test-cardcontainer">
                    <article>
                      <h4>{item.name}</h4>
                      <p className='t12' >{item.e1}<br />
                        {item.e2}<br />
                        {item.e3}</p>
                      <p ><b>{item.e4}</b></p>
                    </article>
                  </div>
                ))
              }



            </div>
          </div>
        </div>
      </section>


      <section class="autoreport">
        <div class="autoreport-title">
          <h3>Impulse-12</h3>
        </div>
        <div class="direction-use-child">
          <button className='left-icon' onClick={scrolll}><AiOutlineDoubleLeft /></button>
          {/* <button class="icon"><i className='fas fa-angle-double-left'></i></button> */}
          <div class="card-video-container">
            <div class="card-video">
            <img src="./Imp-assest/ar1.jpg" ></img>
            </div>
            <div class="card-video">
              <img src="./Imp-assest/ar2.jpg" ></img>
            </div>
            <div class="card-video">
            <img src="./Imp-assest/ar3.jpg" ></img>
            </div>
            <div class="card-video">
            <img src="./Imp-assest/ar4.jpg" ></img>
            </div>
            <div class="card-video">
            <img src="./Imp-assest/ar5.jpg" ></img>
            </div>
            <div class="card-video">
            <img src="./Imp-assest/ar6.jpg" ></img>
            </div>
            {/* <div class="card-video">
            <img src="./Imp-assest/ar7.jpg" ></img>
            </div> */}
            <div class="card-video">
            <img src="./casset/impdevice.png" ></img>
            </div>
            <div class="card-video">
            <img src="./Imp-assest/step3.jpg" ></img>
            </div>
            <div class="card-video">
            <img src="./Imp-assest/autor1.jpg" ></img>
            </div>
          </div>
          <button className='right-icon' onClick={scrollr}><AiOutlineDoubleRight /></button>

        </div>
      </section>


      <Faq />

    </div>
  )
}

export default Impulse