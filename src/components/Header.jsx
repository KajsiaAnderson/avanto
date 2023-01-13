import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const dispatch = useDispatch()

  const handleMenu = () => setShowMenu(!showMenu)
  const username = useSelector(state => state.username)
  const logout = () => {
    dispatch({type: 'LOGOUT'})
  }

  return (
    <header>
      <h2>Avanto</h2>
      <BiMenu size="2rem" style={{ zIndex: 3 }} onClick={handleMenu} />
      <nav className={showMenu ? 'menu-show' : 'menu-hide'}>
        <h2>{username !== "" ? username : "Welcome"}</h2>
        <Link to="/">
          <button onClick={handleMenu} className='nav-btn'>Home</button>
        </Link>
        {username !== "" ? <button className='nav-btn' onClick={logout}>Logout</button> :
          <Link to="/auth">
            <button onClick={handleMenu} className='nav-btn'>Login</button>
          </Link>
        }
      </nav>
    </header>
  )
}

export default Header