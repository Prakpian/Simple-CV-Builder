import { useState } from 'react'
import '../styles/Navbar.css'

export default function Navbar({toggleMenu,menuOpen}) {
    return (
        <nav className='main'>
        <div>
            <div className='nav-wrapper'>
                <h1>CVBuilder</h1>
                <div className='nav-a'>
                    <ul>
                        <li><a>Edit CV</a></li>
                        <li><a>Preview CV</a></li>
                    </ul>
                </div>
                <button>Download PDF</button>
                {menuOpen ? <img src="https://img.icons8.com/?size=100&id=8112&format=png&color=000000" alt="" className='close-menu-icon' onClick={toggleMenu}/> 
                : <img src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000" alt="" className='open-menu-icon' onClick={toggleMenu}/>}
            </div>
        </div>
        {menuOpen &&             
            <div className='menu-drop-down'>
                <a>Edit CV</a>
                <a>Preview CV</a>
                <button>Download PDF</button>
            </div>
            }
        </nav>
    )
}