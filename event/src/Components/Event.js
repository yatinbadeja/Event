import React from 'react'
import E1 from '../Assets/Event3.JPG'
import E2 from '../Assets/Event2.jpg'
import E3 from '../Assets/Event4.jpg'
import E4 from '../Assets/Event7.jpg'
import E5 from '../Assets/Event8.JPG'
import SliderImg from './SliderImg'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Event = () => {
    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '90vh',
        width:"80vw",
        marginLeft:"10vw",
      }
    const events = [
    {
        "id":1,
        "url":E1
    },
    {
        "id":2,
        "url":E2
    },
    {
        "id":3,
        "url":E3
    },
    {
        "id":4,
        "url":E4
    },
    {
        "id":5,
        "url":E5
    }
]
    return (
    <>
    <br></br><br/>
    <div className='heading'>
                    <h1>Events</h1>
    </div><br/><br/>
    
    return (
      <div className="slide-container">
        <Fade>
         {events.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle}}>
              <SliderImg srcurl = {slideImage.url}/>
              </div>
            </div>
          ))} 
        </Fade>
        <div className='event'><h1>Event Summary</h1></div>
        
      </div>
      <br/><br/><br/>
    )
    
    </>
  )
}
export default Event
