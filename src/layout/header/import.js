import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from 'framework7-react';

const ExportPage = () => (
  
  <Page name="home">
    <br></br>
    <br></br>
    <h1>Manage Inventory</h1>
    
  
{/* <ListItem type="radio"link="/export/" title="About"/>
<a class="link" href="/export/">Export</a> */}
     <label class="radio"><input type="radio" name="demo-radio-inline" /><i class="icon-radio"></i><a href="/home/">Define</a></label><br></br>
     <label class="radio"><input type="radio" name="demo-radio-inline" /><i class="icon-radio"></i>Export</label>
    
          <center><div class="item-inner">
              <div class="item-title item-label">Date</div>
              <div class="item-input-wrap">
                <input type="datetime-local"/>
              </div>
            </div>

          <br></br>
          Branch:
    <center><div class="menu">
      <div class="menu-inner">
        <div class="menu-item menu-item-dropdown">
         
          <div class="menu-dropdown menu-dropdown">
            <div class="menu-dropdown-content">
           <center> <a href="#" class="menu-dropdown-link menu-close">4 Shastri Nagar M/S R/S Constructions,Shastri Nagar,Uttar Pradesh</a>
              <a href="#" class="menu-dropdown-link menu-close">Location2</a></center>
              
            </div>
          </div>
        </div>
        </div>
        </div>
        </center>
        
       {/* Select File to Import:<br></br>
       <input  type='file' id='_file' accept="image/*;capture=camera"></input> */}
       </center>

<br></br>
<br></br>
       <button>Import</button>
    <Navbar large sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
        
      </NavLeft>
      <NavTitle sliding>Manage Inventory</NavTitle>
      
    </Navbar>
   
   
  </Page>
);
export default ExportPage;