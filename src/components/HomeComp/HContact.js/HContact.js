import React from 'react'
import { useState } from 'react'
import axios from "axios"
import "./HContact.css"
function HContact() {
    const [query,setQuery]=useState("")
    const [email,setemail]=useState("")
    const [cname,setCname]=useState("")
    const [phone,setPhone]=useState("")
    const onsubmit=async()=>{
        // const data=new Date().toLocaleDateString()
        // Time:new Date().toLocaleTimeString()}
        const resultresp=await axios.post("https://sheetdb.io/api/v1/vebsfk5upa3hw",{
             data:[{Name:cname,
                Email:email,
                Query:query,
                Contact:phone
            }]
        })
        console.log(resultresp)
        setCname("")
        setPhone("")
        setemail("")
        setQuery("")
    }
    return (
        <section id='hcontact' className='Home-contact'>
            <div class="hc-container1">
            <img className="rectangle-icon" alt="" src="../rectangle-43@2x.png" />
            </div>
            <div class="hc-container2">
                <div className='hc-container2-child'>
                <div class="hc-title">
                    <h2>Curious? In Doubt ? Need Help</h2>
                    <h2>Get in touch & Let us Help</h2>
                </div>
                <div>
            <div class="form-group">
                <input type="text" class="form-control" onChange={(e)=>setCname(e.target.value)}   value={cname}  placeholder="Name" />
            </div>
            <div class="form-group">
                <input type="tel" class="form-control" onChange={(e)=>setPhone(e.target.value)}   value={phone} maxlength="10" pattern="[1-9]{1}[0-9]{9}" placeholder="Phone no." />
            </div>
            <div class="form-group">
                <input type="email" class="form-control" onChange={(e)=>setemail(e.target.value)}   value={email} aria-describedby="emailHelp" placeholder="Email" />
            </div>
            <div class="form-group">
                <textarea name="query" id="" cols="30" rows="5" placeholder="Write your query.." onChange={(e)=>setQuery(e.target.value)}   value={query} ></textarea>
            </div>
            <button onClick={onsubmit}  class="btn btn-primary book-appointment" id="callback">Book Appointment</button>
        </div>

            
        </div>
            </div>
           
        </section>
    )
}

export default HContact


