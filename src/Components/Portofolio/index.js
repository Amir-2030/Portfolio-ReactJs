import React from 'react';

import { render } from '@testing-library/react';
import {Portfolio , Title , Span,PorList,PorItem,Box,Img,Overlay,OverlaySpan} from './style.js'
const Portofolio = () => {
  
  return (
   
    <Portfolio>
        <Title><Span>My</Span> Portfolio</Title>
        <PorList>
            <PorItem active>All</PorItem>
            <PorItem>HTML</PorItem>
            <PorItem>Photoshop</PorItem>
            <PorItem>Wordpress</PorItem>
            <PorItem>Mobile</PorItem>
        </PorList>
         <div className="box">
        <Box>
        <Img src="images/home-bg.png" alt=" "/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
                
                 </Box>
               
        
               
            </div>


            <div className="box">
        <Box>
        <Img src="images/home-bg.png" alt=" "/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
                
                 </Box>
               
        
               
            </div>
            <div className="box">
        <Box>
        <Img src="images/home-bg.png" alt=" "/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
                
                 </Box>
               
        
               
            </div>
            
            
            <div className="box">
        <Box>
        <Img src="images/home-bg.png" alt=" "/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
                
                 </Box>
               
  
               
            </div>
            
       
        
    </Portfolio>
  );



}

export default Portofolio;