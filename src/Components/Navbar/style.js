import styled from "styled-components";

export const NavbarSection = styled.div `

    padding: 20px 0;
    overflow: hidden;
    background: white;
    position: relative;
    border-bottom: 2px solid #4C70AF;
`
  
export const Logo = styled.div `
width: 50%;
    float: left;
    color:#4C70AF ;
`


export const LogoText = styled.h2 `
font-size: 30px;
font-weight: bold
`



export const UlList = styled.ul `
   width: 50%;
    float: left;
    list-style: none;
    padding: 0px;
  
`

    
export const ListItem = styled.li `
font-size: 20px;
display: inline-block;
`


export const Anch = styled.a `

display: block;
color:#4C70AF ;
text-decoration: none;
padding: 10px 15px;
font-weight: bold;
&:hover{
     color: #222 
}
`

