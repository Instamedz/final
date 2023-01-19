import React from 'react'
import Faq from '../../components/faq/Faq'
import "./hifi.css"
import { useNavigate } from 'react-router-dom'

function Apphifi() {

    const navigate=useNavigate()
    const bookapp=()=>{
        navigate("/appointdoctor")
  }
  return (
    <main className='apphifi'>
        <header className='hifi-header'>
            <img src="" alt=""/>
            <div class="app-header-title">
                <h1>How can we help today?</h1>
                <p>Select the medical issue you need help with. This is the first step in connecting you to an expert</p>
            </div>
        </header>
        <section class="apphf-concern-cardcontainer">
          <div class="apphf-c-container1">
            <div class="apphf-c-c1-title">
              <h3>What concerns your medical issue</h3>
            </div>
            <div class="apphf-c-c1-cards">
              <div class="apphf-c-c1-card"><a href="/appointdoctor">
                <img onClick={bookapp} src="./hifi/eyecare.png" alt=""/>
                </a></div>
                <div class="apphf-c-c1-card"><a href="">
                <img onClick={bookapp} src="./hifi/dentalcare.png" alt=""/>
                </a></div>
                <div class="apphf-c-c1-card"><a href="">
                <img onClick={bookapp} src="./hifi/soulcare.png" alt=""/>
                </a></div>
                <div class="apphf-c-c1-card"><a href="">
                <img onClick={bookapp}  src="./hifi/nutricare.png" alt=""/>
                </a></div>
            </div>
          </div>
          <div class="apphf-c-container2">
          <div class="apphf-c-c1-title">
              <h3>Common health concerns</h3>
            </div>
            <div class="apphf-c-c1-cards">
              <div class="apphf-c-c1-card"><a href="">
                <img onClick={bookapp} src="./hifi/eye-inf.png" alt=""/>
                </a></div>
                <div class="apphf-c-c1-card"><a href="">
                <img onClick={bookapp} src="./hifi/blurry-vision.png" alt=""/>
                </a></div>
                <div class="apphf-c-c1-card"><a href="">
                <img onClick={bookapp} src="./hifi/insomania.png" alt=""/>
                </a></div>
                <div class="apphf-c-c1-card"><a href="">
                <img onClick={bookapp} src="./hifi/keto.png" alt=""/>
                </a></div>
            </div>
          </div>
        </section>
        <Faq/>

        

    </main>
  )
}

export default Apphifi