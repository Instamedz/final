import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hifiform() {
    const navigate=useNavigate()
    const bookapp=()=>{
        navigate("/appointsuccess")
  }
  return (
    <div class="hifi-appform">
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
                        <h4>Email</h4>
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
                        <select class="form-control" 
                        >
                            <option value="notselected"> --- select city --- </option>
                            <option value="pune">Pune,Mahasrastra</option>
                            <option value="indore">Indore,MP</option>
                        </select>
                    </label>
                    <label for="callmode">
                        <h4>Mode</h4>
                        <select class="form-control" 
                        >
                            <option value="notselected"> --- select mode --- </option>
                            <option value="phone">Phone</option>
                            <option value="video">video</option>
                            <option value="chat">chat</option>
                        </select>
                    </label>
                </article>
            </div>
            <button onClick={bookapp}  class="btn btn-primary book-appointment" id="callback">Book Appointment</button>
        </form>
    </div>
</div>
  )
}

export default Hifiform