import React from "react";
import { Link } from "react-router-dom";
import './index.css'

import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  navbar,
  Navbar,
  Dropdown
} 
from './NavbarElements';

function Header() {
  return (
    
    <div>
      <Nav>
  <NavMenu>
  <Navbar><NavBtn>UBooks</NavBtn></Navbar>
    <Navbar>M/S R S Constractions</Navbar>
    <Navbar><NavBtn><span>CurrentLocation
      M/S R S Constractions</span></NavBtn></Navbar>
      <Navbar><NavBtn><span>CurrentBranch
      M/S R S Constractions</span></NavBtn></Navbar>
      <Navbar><NavBtn>Live</NavBtn></Navbar>
      <Navbar><NavBtn>Help</NavBtn></Navbar>
      <Navbar><NavBtn><span>HarshaVardan:
      Last Logged in:</span></NavBtn></Navbar>
    
  </NavMenu>
  </Nav>
     
  <center>
   <div>
    
   <h4> <label class="radio"><input type="radio" name="demo-radio-inline" /><i class="icon-radio"></i>
				<a href="./header/">Define</a></label>
     <label class="radio"><input type="radio" name="demo-radio-inline" /><i class="icon-radio"></i>	<a href='/import/'>Import</a></label></h4>
    </div>
  
    <div>
    <div class="item-inner">
              <div class="item-title item-label"><h3>Date</h3></div>
              <div class="item-input-wrap">
                <input type="date"/>
              </div>
            </div><br></br>
            <div>
              <h3>Branch</h3>
            <select name="selectList" id="selectList">
            <option value="option 1">Select Branch</option>
   <option value="option 1">4 Shastri Nagar M/S R S Constractions, Shastri Nagar</option>
   <option value="option 2">Other Branch</option>
</select>
            </div>

    </div>
    </center>
    <br></br>
   
   
   

    </div>
    
    
  );
}

export default Header;
