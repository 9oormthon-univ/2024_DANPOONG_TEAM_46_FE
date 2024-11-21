import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style.css'

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'nav-item active' : 'nav-item'
        }
      >
        <i className="ic-book-open"></i>
        <span>도서관</span>
      </NavLink>
      <NavLink
        to="/club"
        className={({ isActive }) =>
          isActive ? 'nav-item active' : 'nav-item'
        }
      >
        <i className="ic-club"></i>
        <span>북클럽</span>
      </NavLink>
      <NavLink
        to="/star"
        className={({ isActive }) =>
          isActive ? 'nav-item active' : 'nav-item'
        }
      >
        <i className="ic-star"></i>
        <span>별자리</span>
      </NavLink>
      <NavLink
        to="/my-library"
        className={({ isActive }) =>
          isActive ? 'nav-item active' : 'nav-item'
        }
      >
        <i className="ic-book"></i>
        <span>내 서재</span>
      </NavLink>
    </nav>
  )
}

export default NavigationBar
