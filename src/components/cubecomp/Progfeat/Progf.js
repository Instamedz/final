import React from 'react'
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import "./Progf.css"
import "../../../pages/Cube/Cube.css"
import { useEffect } from 'react'

function Progf() {
    useEffect(()=>{
        console.log("hello there")
        let allcardlength=document.getElementsByClassName("cpg-allcard")[0].offsetWidth
        let cardlength=document.getElementsByClassName("cpg-card")[0].offsetWidth
        console.log(allcardlength - 3*cardlength)
    },[])
    function Srolling() {
        let allcardlength=document.getElementsByClassName("cpg-allcard")[0].offsetWidth
        let card=document.getElementsByClassName("cpg-card")
        const cardlength=card[0].offsetWidth
       
    }
  return (
    <div class="c-program">
                <div className='c-pg-child'>
                    <div class="pgtitle">
                        <h4 class="mpg-feature">
                            Program Feature
                        </h4>
                        <img src="./casset/ellipse1.png" alt="" />
                        <h3>Program <br /> Feature</h3>
                    </div>
                    <div class="cpg-allcard">
                        <AiOutlineLeft className='sv-arrow sal'/>
                        <div class="cpg-card">
                            <img src="./casset/pg1.jpg" alt="" />
                            <div><h3>Get ECG Test at home</h3> </div>

                        </div>
                        <div class="cpg-card">
                            <img src="./casset/pg2.jpg" alt="" />
                            <div><h3>Get your reports on the spot</h3></div>

                        </div>
                        <div class="cpg-card">
                            <img src="./casset/pg3.jpg" alt="" />
                            <div><h3>Get Consultation from Experts</h3></div>
                        </div>
                        <AiOutlineRight className='sv-arrow sar'/>
                    </div>
                </div>
            </div>
  )
}

export default Progf