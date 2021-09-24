import "./index.css"
import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import Fade from "react-reveal"
// import logo from "../../Images/logo.png"

import MenuBox from "../MenuBox";
import SmallMenu from "../SmallMenu";


export default function WebNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState('');
  const [menu, setMenu] = useState(false);
  const [smallMenu, setSmallMenu] = useState(false);
  const [smallMenu2, setSmallMenu2] = useState(false);
  const [smallMenu3, setSmallMenu3] = useState(false);


  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    fetch('http://erp.entertechsolutions.com/CompanyProfile/GetCompanyProfile_CustomerPage?companyID=da0c5aaf-0196-4935-b823-d695575627a4')
      .then(res => { return res.json() })
      .then(res => { setLogo(res.Profile.CompanyLogo) })
  }, [])


  return <>
    <div >
      <Navbar className="navbar" light expand="md">
        <img style={{ paddingTop: "10px",borderRadius: "8px" }} src={logo} width={60} alt="aa"  />
        <NavbarToggler className="toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto corner" navbar>
            <NavItem className="menu" >
              <NavLink style={{ color: 'black' }}>Home   </NavLink>
            </NavItem>
            <NavItem onMouseLeave={() => { setMenu(false) }} onMouseEnter={() => { setMenu(true) }} className="menu" >
              <NavLink style={{ color: 'black' }}>Products <i class="fas fa-angle-down caret"></i></NavLink>
            </NavItem>
            {menu && <div className="position" onMouseLeave={() => { setMenu(false) }} onMouseEnter={() => { setMenu(true) }}><Fade bottom><MenuBox name="Products" /></Fade></div>}

            <NavItem onMouseLeave={() => { setSmallMenu(false) }} onMouseEnter={() => { setSmallMenu(true) }} className="menu" >
              <NavLink style={{ color: 'black' }}>Customer Care <i class="fas fa-angle-down caret"></i></NavLink>
            </NavItem>
            {smallMenu && <div className="smallPosition" onMouseLeave={() => { setSmallMenu(false) }} onMouseEnter={() => { setSmallMenu(true) }}  ><Fade bottom><SmallMenu name="Brands" /></Fade></div>}

            <NavItem onMouseLeave={() => { setSmallMenu2(false) }} onMouseEnter={() => { setSmallMenu2(true) }}    className="menu" >
              <NavLink style={{ color: 'black' }}>Sort By  <i class="fas fa-angle-down caret"></i></NavLink>
            </NavItem>
            {smallMenu2 && <div className="smallPosition2" onMouseLeave={() => { setSmallMenu2(false) }} onMouseEnter={() => { setSmallMenu2(true) }}  ><Fade bottom><SmallMenu name="Brands" /></Fade></div>}

            <NavItem className="menu" >
              <NavLink style={{ color: 'black' }}>Search </NavLink>
            </NavItem>
            <NavItem onMouseLeave={() => { setSmallMenu3(false) }} onMouseEnter={() => { setSmallMenu3(true) }}    className="menu" >
              <NavLink style={{ color: 'black' }}>Contact <i class="fas fa-angle-down caret"></i></NavLink>
            </NavItem>
            {smallMenu3 && <div className="smallPosition3" onMouseLeave={() => { setSmallMenu3(false) }} onMouseEnter={() => { setSmallMenu3(true) }}  ><Fade bottom><SmallMenu name="Brands" /></Fade></div>}

          </Nav>
          <div className="spacing">

            <span style={{ padding: "0px 18px" }}><i class="fas fa-search" /> </span>
            <Button className="btn">Sign In </Button>
            <span style={{ padding: "0px 18px" }}><i class="fas fa-shopping-cart"></i> </span>
          </div>
        </Collapse>
      </Navbar>
    </div>
  </>
}

{/* <NavItem onMouseEnter={() => { setMenu3(true) }} onMouseLeave={() => { setMenu3(false) }} className="menu" >
<NavLink style={{ color: 'black' }}>Men Wear <i class="fas fa-angle-down caret"></i></NavLink>
</NavItem>
{menu3 && <div className="position" onMouseLeave={() => { setMenu3(false) }} onMouseEnter={() => { setMenu3(true) }}><Fade bottom><MenuBox name="Men Wear" /></Fade></div>}

<NavItem onMouseEnter={() => { setMenu4(true) }} onMouseLeave={() => { setMenu4(false) }} className="menu" >
<NavLink style={{ color: 'black' }}>Women Wear <i class="fas fa-angle-down caret"></i></NavLink>
</NavItem>
{menu4 && <div className="position" onMouseLeave={() => { setMenu4(false) }} onMouseEnter={() => { setMenu4(true) }}><Fade bottom><MenuBox name="Women Wear" /></Fade></div>} */}
