import React from 'react'
import Cardc from './Card'
import AI from '../Assets/AI.jpg'
import Appd from '../Assets/App.jpg'
import CP from '../Assets/CP.jpg'
import graphics from '../Assets/graphics2.jpg'
import Web from '../Assets/web.jpg'

const Domain = () => {

    const Domain = [
        {
            "id": 1,
            "img": Web,
            "name": "Web Development"
        },
        {
            "id": 2,
            "img": Appd,
            "name": "App Development"
        },
        {
            "id": 3,
            "img": AI,
            "name": "AI & ML"
        },
        {
            "id": 4,
            "img": graphics,
            "name": "Graphics Design"
        },
        {
            "id": 5,
            "img": CP,
            "name": "CPP Programming"
        }
    ]

    return (
        <>
            <div className='heading' >
                    <h1>Domains</h1>
            </div><br/><br/>
            <div className='Domain'>

                {
                    Domain.map((element) => {
                        console.log(element.img)
                        return <Cardc key={element.id} domainImg={element.img} name={element.name} />
                    })
                }
            </div>
            <hr/>
        </>
    )
}
export default Domain
