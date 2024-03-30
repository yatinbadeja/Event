import React from 'react'
import logo from '../Assets/c3-noBG.png'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Link} from 'react-router-dom'
import Registration from '../Pages/Form';
export default function Header() {
    return (
        <div className='header' style={{ "height": "100vh", "width": "100vw" }}>
            <div className='content'>
                <span>
                    <h1>CTAE Coders</h1>
                    <h1>Carousel</h1>
                    <h3>The Offical Programming Club of CTAE</h3><br /><br />
                    <div className='mark'>
                        <h2>*Mark your calender for 9 April'24 event</h2>
                        <Link to='/form'>
                            <button>Register Now</button>
                        </Link>
                    </div>

                </span>
            </div>
            <div className='C3-logo'>
                <img src={logo} alt='C3-logo' height="100%" width="100%"></img>
            </div>

        </div>
    )
}
