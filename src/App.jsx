import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import UserDetails from './UserDetails'

function App() {
  const [menuOpen,setMenuOpen] = useState(false)

  const toggleMenu = () => {
      setMenuOpen(!menuOpen)
  }
  return (
    <>
    <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen}/>
    <UserDetails/>
    </>
  )
}

export default App
