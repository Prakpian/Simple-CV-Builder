import '../styles/Navbar.css'

export default function Navbar({toggleMenu,menuOpen,toPreview}) {
    return (
        <nav className='main'>
        <div>
            <div className='nav-wrapper'>
                <h1>CVBuilder</h1>
                <div className='nav-a'>
                    <ul>
                        <li><a onClick={() => toPreview(false)}>Edit CV</a></li>
                        <li><a onClick={() => toPreview(true)}>Preview CV</a></li>
                    </ul>
                </div>
                {menuOpen ? <img src="https://img.icons8.com/?size=100&id=8112&format=png&color=000000" alt="" className='close-menu-icon' onClick={toggleMenu}/> 
                : <img src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000" alt="" className='open-menu-icon' onClick={toggleMenu}/>}
            </div>
        </div>
        {menuOpen &&             
            <div className='menu-drop-down'>
                <a onClick={() => toPreview(false)}>Edit CV</a>
                <a onClick={() => toPreview(true)}>Preview CV</a>
            </div>
            }
        </nav>
    )
}