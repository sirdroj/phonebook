import React, { useState } from 'react'
import "./Navbar2.scss"
import usericon from "../../assets/usericon.png"
import cartimg from "../../assets/cart.png"
const Navbar2 = ({setpg,username}) => {

  
  return (
    <nav class="navbar">
    <div class="logo" onClick={()=>setpg(1)}>Your Phonebook</div>
    
    {/* <!-- NAVIGATION MENU --> */}
    <ul class="nav-links">

      {/* <!-- USING CHECKBOX HACK --> */}
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

      {/* <!-- NAVIGATION MENUS --> */}
      <div class="menu">
      {/* <li className='user' onClick={()=>{setpg(4)
        document.getElementById("checkbox_toggle").checked = false;}}><img src={usericon} />Hellow, {username.length>0?username:"User"}</li> */}
        <li onClick={()=>{setpg(1)
        document.getElementById("checkbox_toggle").checked = false;}}>Home</li>
        <li onClick={()=>{setpg(2)
        document.getElementById("checkbox_toggle").checked = false;}}>Create Contact</li>
      </div>
    </ul>
  </nav>
  )
}

export default Navbar2