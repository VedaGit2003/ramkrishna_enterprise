import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import two from '../image/Clients/2.jpg'
import three from '../image/Clients/3.jpg'
import four from '../image/Clients/4.jpg'
const Gallery = () => {
  return (
    <Carousel className='w-full'   
          autoPlay
    infiniteLoop
    centerMode
    dynamicHeight
    interval={800}>
                <div >
                    <img src={two} />
                   
                </div>
                <div >
                    <img src={three}  />
                    
                </div>
                <div >
                    <img src={four} />
                  
                </div>
            </Carousel>
  )
}

export default Gallery