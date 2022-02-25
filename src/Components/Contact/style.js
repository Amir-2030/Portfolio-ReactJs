import styled from "styled-components";

export const ContactSection= styled.div`

height:485px;;
padding: 50px 0px;
    text-align: center;
   
    
`


export const Title= styled.h2`
font-size: 60px;
margin-bottom: 30px;
color: #4C70AF;
`

export const Span= styled.span`
font-weight: normal;
`


export const Form= styled.form`
width: 55%;
margin: auto;

`

export const Input= styled.input`
box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
    border-radius:10px;
    border: 2px solid  #4C70AF;
`

export const FormInput= styled.div`
overflow: hidden;
 

`
   
export const InputText= styled(Input)`
float: left;
width: 40%;
border: 2px solid  #4C70AF;
`

export const InputEmail= styled(Input)`
width: 32%;
float: right;
border: 2px solid  #4C70AF;
`

export const InputSub= styled(Input)`
width: 100%;
border: 2px solid  #4C70AF;
`

export const Textarea= styled.textarea`
width: 100%;
    outline: 0;
    border-radius:10px;
    border: 2px solid  #4C70AF;
 
  
`


export const InputSubmit= styled(Input)`
    width: 60%;
    border: 1px solid #ccc;
    background-color: #4C70AF;
    color:white;
    cursor: pointer;
    margin-top:10px;
`
