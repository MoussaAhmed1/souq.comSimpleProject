import React from 'react'
import {Carousel} from 'react-bootstrap'
export default function Slider() {
    return (
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="../images/L_1630062929_GW-MB-Apparel-en.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="../images/L_1629633700_GW-MB-Electronics-en.jpg"
          alt="Second slide"
        />
    
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="../images/L_1629819028_GW-MB-Samsung-en.jpg"
          alt="Third slide"
        />
    
        
      </Carousel.Item>
    </Carousel>
    )
}

