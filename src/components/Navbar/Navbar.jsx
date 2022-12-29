// Styles
import './Navbar.scss'
// Icons
import { FaBars, FaTimes } from 'react-icons/fa'
// Imports
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navbar = () => {
   const [click, setClick] = useState(false)
   const [navBg, setNavBg] = useState(false)

   const handleClick = () => {
      setClick(!click)
   }

   const changeNavBg = () => {
      window.scrollY >= 150
         ? setNavBg(true)
         : setNavBg(false)
   }

   useEffect(() => {
      window.addEventListener('scroll', changeNavBg)
      return () => {
         window.removeEventListener('scroll', changeNavBg)
      }
   }, [])

   const navStyle = navBg
      ? 'rgba(0,0,0,0.8)'
      : 'transparent'


   return (
      <div
         style={{
            backgroundColor: `${navStyle}`,
            transition: 'all 0.2s',
         }}
         onScroll={changeNavBg}
         className='header'
      >
         <Link to='/'>
            <h1>GLX TRVL</h1>
         </Link>
         <ul
            className={
               click ? 'nav-menu active' : 'nav-menu'
            }
         >
            <li>
               <Link to='/'>Home</Link>
            </li>
            <li>
               <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
               <Link to='/training'>Training</Link>
            </li>
            <li>
               <Link to='/contact'>Contact</Link>
            </li>
         </ul>
         <div className='hamburger' onClick={handleClick}>
            {click ? (
               <FaTimes
                  size={20}
                  style={{ color: '#fff' }}
               />
            ) : (
               <FaBars
                  size={20}
                  style={{ color: '#fff' }}
               />
            )}
         </div>
      </div>
   )
}

export default Navbar
