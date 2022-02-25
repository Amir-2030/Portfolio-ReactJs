import React,{Component} from 'react';
import {WorkSection, WorkTitle,Span , Part ,Icon,PartTitle,Line ,PartDesc}from './style.js';


class Work extends Component{
  render(){
    return (
   
      <WorkSection>
          <div class="container">
              <WorkTitle><Span>My</Span> Work</WorkTitle>
              <Part first="1">
                  <Icon className="icon fa fa-tachometer fa-2x"></Icon>
                  <PartTitle>Web Design</PartTitle>
                  <Line  />
                  <PartDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                  </PartDesc>
              </Part>
              
              <Part>
                  <Icon className="icon fa fa-bolt fa-2x"></Icon>
                  <PartTitle>Web Design</PartTitle>
                  <Line />
                  <PartDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                  </PartDesc>
              </Part>
              
              <Part>
                  <Icon className="icon fa fa-tachometer fa-2x"></Icon>
                  <PartTitle>Web Design</PartTitle>
                  <Line />
                  <PartDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                  </PartDesc>
              </Part>
              
          </div>
      </WorkSection>
      
    );
  
  }
  


}

export default Work;