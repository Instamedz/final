import React ,{ useRef } from 'react'
import { useState } from 'react'
import "./faq.css"
import fdata from './fdata'


import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"

function Faq() {
  const containerRef = useRef(null);
  // const [leftDisabled, setLeftDisabled] = useState(true);
  // const [rightDisabled, setRightDisabled] = useState(false);
  

  // function handleScrollLeft() {
  //   const element = containerRef.current.scrollLeft -= 350;
  //   setLeftDisabled(element.scrollLeft === 0);
  //   setRightDisabled(element.scrollLeft === element.scrollWidth);
  // }

  // function handleScrollRight() {
  //   const element = containerRef.current.scrollLeft += 350;
  //   setLeftDisabled(element.scrollLeft === 0);
  //   setRightDisabled(element.scrollLeft === element.scrollWidth);
  // }

  // const scrolll = () => {
  //   var left = document.querySelector(".faqs-allcard")
  //   left.scrollBy(350, 0)
  // }
  // const scrollr = () => {
  //   var right = document.querySelector(".faqs-allcard")
  //   right.scrollBy(-350, 0)
  // }

  return (
    <section className="faqs">
      <div>
        <span class="faqs-title">
          <h2>FAQs</h2>
        </span>
        <div ref={containerRef} class="faqs-allcard">
        <AiOutlineLeft className='sv-arrow sal'/>
        
          {
            fdata.map((item)=>(
            
              <article className="faq-card">
              <p><b>Ques:</b>  {item.ques}</p>
              <p className='ans'><b>Ans:</b>{item.ans}</p>
              {console.log(item.ques)}
            </article>
            ))
          }
        {/* <button className='right-icon' disabled={rightDisabled} onClick={handleScrollRight}><BsFillArrowRightCircleFill /></button> */}
        <AiOutlineRight className='sv-arrow sar'/>
        </div>
        
      </div>
    </section>

  )
}

export default Faq