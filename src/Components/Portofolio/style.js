import styled from 'styled-components';


export const  Portfolio = styled.div `
background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
`

export const  Title = styled.h2 `
  color:#4C70AF ;
  text-align: center;
    font-size: 35px
  
`


export const  Span = styled.span `
color:#4C70AF ;
font-weight: normal;
 

`

export const  PorList = styled.ul `
list-style: none;
    text-align: center;
    margin: 20px 0
`
    
export const  PorItem = styled.li `

display: inline-block;
width: 100px;
padding: 10px;
background: ${props => props.active ? '#4C70AF ' : '#DDD'}
`

export const  Box = styled.div `

 width: 25%;
    float: left;
    font-size: 0;
    position: relative;

    &:hover > div{
        opacity:1;
    }
`


export const  Img = styled.img `
width: 100%
`



export const  Overlay = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(76, 112, 175 , 0.5);
    font-size: 15px;
    opacity: 0
`


export const  OverlaySpan = styled.span `
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background: #fff;
display: block;
padding: 10px 20px;
cursor: pointer;
border: 2px solid #4C70AF;
`


