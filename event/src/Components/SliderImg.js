import React from 'react'

export default function SliderImg (props){
  const url = props.srcurl
  return (
    <>
    <div className='event-img'>
        <img src={url} height="90%" width="90%"/>
    </div>
    </>
  )
}
