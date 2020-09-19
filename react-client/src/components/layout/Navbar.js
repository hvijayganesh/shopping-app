import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Paypal Shopping</Link>
        <ul className="right">
          <li><NavLink to='/create'>My Cart</NavLink></li>
          <li><NavLink to='/'>My Orders</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
