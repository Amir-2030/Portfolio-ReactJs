import React from 'react';
import './style.css';



const Social = () => {
  
  return (
    <div class="social-media">
            
    <div class="social face">
        <i class="icon fab fa-facebook fa-lg"></i>
        <p>
            <span class="info1">Follow Me on</span>
            <span class="info2">Social Facebook</span>
        </p>
    </div>

    
    
    <div class="social twitter">
        <i class="icon fab fa-twitter fa-lg"></i>
        <p>
            <span class="info1">Tweet Me on</span>
            <span class="info2">Social twitter</span>
        </p>
    </div>
    
    <div class="social pin">
        <i class="icon fab fa-pinterest fa-lg"></i>
        <p>
            <span class="info1">Pin Me on</span>
            <span class="info2">Social Pinterest</span>
        </p>
    </div> 
</div>
  );



}

export default Social;