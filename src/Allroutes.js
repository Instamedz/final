import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Apphifi from './pages/Apphifi/Apphifi'
import Hifidoc from './pages/Apphifi/Hifidoc'
import Hifiform from './pages/Apphifi/Hifiform'
import Hifisuccess from './pages/Apphifi/Hifisuccess'
import Consult from './pages/Consult/Consult'
import Cube from './pages/Cube/Cube'
// import Consult from './pages/Consult/Consult'
// import Cube from './pages/Cube/Cube'

import Home from './pages/Home/homepage'
import Impulse from './pages/Impulse/Impulse'



function Allroutes() {
  return (
     <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        {/* <Route path="/consult-page" element={<Consult></Consult>}> </Route>
        
        <Route path="/cube" element={<Cube/>}> </Route> */}
        <Route path="/product" element={<Impulse/>}> </Route>
        <Route path="/cardiocamp" element={<Cube/>}> </Route>
        <Route path="/appointservice" element={<Apphifi/>}> </Route>
        <Route path="/appointdoctor" element={<Hifidoc/>}> </Route>
        <Route path="/appointform" element={<Hifiform/>}> </Route>
        <Route path="/appointsuccess" element={<Hifisuccess/>}> </Route>
        <Route path="/consult" element={<Consult/>}> </Route>


    </Routes>
  )
}

export default Allroutes