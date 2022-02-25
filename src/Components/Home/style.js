import styled from "styled-components";

export const HomeSection = styled.div `
height: 500px;
background: url('images/Portfolio-Websites.webp');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
` 

export const HomeInformation = styled.div `
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%)
` 



export const Title = styled.h2 `
font-size: 60px;
font-weight: bold;
color: white;
` 

export const HomeInfo = styled.h4 `
font-size: 35px;
color: White;
margin-bottom: 20px;
` 

export const HomeDesc = styled.p `
font-size: 20px;
    line-height: 1.5;
    color: white;
    margin-bottom: 20px
` 


export const Span = styled.span `
color: #000;
font-weight:bold;
` 


export const Btn = styled.button `
background:#fff ;
color:black ;
font-size: 18px;
width: 150px;
border: 0;
padding: 15px;
cursor: pointer;
font-weight: bold;
&:hover{
    background: #fff;
    color: #4C70AF 
}
` 





