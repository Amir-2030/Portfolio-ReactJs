import React from 'react';
import {Link} from 'react-router-dom';
import {NavbarSection , Logo , LogoText ,UlList , ListItem , Anch } from './style.js'


const Navbar = () => {
  return (
<NavbarSection>
    <div className="container">
        <Logo>
            <LogoText>My Portfolio</LogoText>
        </Logo>
        <UlList>
            <ListItem><Link to="/" style={{textDecoration:"none"}}><Anch >Home</Anch></Link></ListItem>
            <ListItem><Anch href="/Work">Work</Anch></ListItem>
            <ListItem><Anch href="/Portofolio">Portofolio</Anch></ListItem>
            <ListItem><Anch href="/Profile">Resume</Anch></ListItem>
            <ListItem><Anch href="/About">About</Anch></ListItem>
           
            <ListItem><Link to="/Contact"  style={{textDecoration:"none"}}><Anch >Contact</Anch></Link></ListItem>
        </UlList>
    </div>
</NavbarSection>
   
  );
}
export default Navbar;