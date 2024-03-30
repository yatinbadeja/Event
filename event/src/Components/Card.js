import React from 'react'

const Card = (props) => {  
  const img = props.domainImg;
  const name = props.name;
  return (
    <div className='Card' style={{"margin":"1.5vh"}}>
    <div className='img'>
        <img src={img} alt={name}/>
    </div>
    <div className='domainName'>
    <h1 style={{"textAlign":"center"}}>{name}</h1>
    </div>
    </div>
  )
}
export default Card
