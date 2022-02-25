import styled from 'styled-components';


export const WorkSection = styled.div `
    height: auto;
    padding: 10px 0;
    overflow: hidden;
    background: #fff
`


export const WorkTitle = styled.h2 `
color:#4C70AF ;
font-size: 60px;
`
 
export const Span = styled.span `
color:#4C70AF ;
font-weight: normal
`
 
export const Part = styled.div `
height:420px;
margin-top: 20px;
width: 30%;
float: left;

padding: 100px 0;
border: 2px solid #4C70AF ;
box-sizing: border-box;
text-align: center;
margin-left: 5%;
margin-left:${props => props.first === 1 ? '0': '5%'};

`


export const Icon = styled.i `
color: #888;
margin-bottom: 20px
`
 

export const PartTitle = styled.h4 `
font-size: 25px;
color:#4C70AF ;
    margin-bottom: 20px
`

    
export const Line = styled.hr `
width: 60%;
margin: auto;
margin-bottom: 20px
`

export const PartDesc = styled.p `
font-size: 20px;
color:#4C70AF ;
padding: 20px
`

   
