import React from 'react';
import {HomeSection,HomeInformation,HomeInfo,Title,HomeDesc,Span,Btn} from './style.js'


const Home = () => {
  
  return (
  
    <HomeSection>
        <div className="container">
            <HomeInformation>
                <Title>Welcome,</Title>
                <HomeInfo>I'm  Lorem ipsum</HomeInfo>
                <HomeDesc>
                    <Span>Front-End Developer</Span> 
                    and   Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </HomeDesc>
                <Btn className="home-btn">Let's Begin</Btn>
            </HomeInformation>
        </div>
    </HomeSection>
  );



}

export default Home;