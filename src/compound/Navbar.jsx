import React from "react"
import classes from "./Navstyle.module.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.navMenu}>
        <h1>Logo</h1>
        <NavLink to="/" className={(arg) => (arg.isActive ? classes.active : classes.unactive)}>
          Feed
        </NavLink>
        <NavLink to="/create" className={(arg) => (arg.isActive ? classes.active : classes.unactive)}>
          Create
        </NavLink>
      </div>
      <div className={classes.navMenu}>
        <NavLink to="/Profile" className={(arg) => (arg.isActive ? classes.active : classes.unactive)}>
          Profile
        </NavLink>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar
