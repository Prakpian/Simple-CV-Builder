import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <div className='nav-wrapper'>
            <h1>CVBuilder</h1>
            <ul>
                <li><a>Edit CV</a></li>
                <li><a>Preview CV</a></li>
            </ul>
            <button>Download PDF</button>
            </div>
        </nav>
    )
}