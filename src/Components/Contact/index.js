import React from 'react';
import {ContactSection,Title ,Span,Form,Input,FormInput,InputEmail,InputText,Textarea,InputSubmit} from './style.js';
import Footer from '../Footer/index.js';
const Contact = () => {
  return (
   <><ContactSection>
        <div class="container">
            <Title><Span>Contact </Span>US</Title>
            <Form>
           
                <FormInput>
                    <InputText placeholder=" Name"/>
                    <InputEmail placeholder=" Email"/>
                   <Input type="text" class="sub" placeholder=" Subject"/>  
                </FormInput>
               
                <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                <InputSubmit type="submit" value="Send Message"/>
            </Form>
        </div>
    </ContactSection> 
    <Footer />
   </>
    
  
  ); 
}

export default Contact;