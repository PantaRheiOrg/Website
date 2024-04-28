import React, { useState } from 'react';
import '../css/Dj.scss';

const Dj = () => {
  // State to manage the pressed state of the button
  const [isPressed, setIsPressed] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    // Toggle the pressed state
    setIsPressed(prevState => !prevState);
  };

  // Dynamically add the 'pressed' class based on the state
  const buttonClassName = `button ${isPressed ? 'pressed' : ''}`;

  return (
    <div class="toy-box">
    <div class="toy turntable">
       <div class="platter-base">
          <div class="inner">
             <div class="platter">
                <div class="inner-ring ring-1">
                   <div class="inner-ring ring-2">
                      <div class="inner-ring ring-3">
                         <div class="inner-ring ring-4">
                            <div class="inner-ring ring-5"></div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <div class="mixer">
          <div class="inner">
             <div class="screen">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
             </div>
             <div class="controls">
                <div class="buttons">
                   <div class="button"></div>
                   <div class="button"></div>
                   <div class="button"></div>
                   <div class="button"></div>
                   <div></div>
                   <div class="button"></div>
                   <div class="button"></div>
                   <div class="button"></div>
                   <div class="button"></div>
                </div>
                <input type="range" class="slider"/>
             </div>
          </div>
       </div>
       <div class="platter-base">
          <div class="inner">
             <div class="platter">
                <div class="inner-ring ring-1">
                   <div class="inner-ring ring-2">
                      <div class="inner-ring ring-3">
                         <div class="inner-ring ring-4">
                            <div class="inner-ring ring-5"></div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
  );
};

export default Dj;
