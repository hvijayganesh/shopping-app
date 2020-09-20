import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Paypal Shopping</Link>
        <ul className="right">
          <li><NavLink to='/cart'>Cart</NavLink></li>
          <li><NavLink to='/my-orders'>My Orders</NavLink></li>
          <li><NavLink to='/' className="btn btn-floating pink lighten-1">PP</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
