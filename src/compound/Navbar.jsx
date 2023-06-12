import React from "react"
import classes from "./Navstyle.module.css"
import { NavLink } from "react-router-dom"
import { useAuth } from "../providers/AuthProviders"

const Navbar = () => {
  const { isLogIn, logout } = useAuth()

  return (
    <div className={classes.nav}>
      <div className={classes.navMenu}>
        <h1>Logo</h1>
        <NavLink to="/" className={(arg) => (arg.isActive ? classes.active : classes.unactive)}>
          Feed
        </NavLink>
        {isLogIn && (
          <NavLink to="/create" className={(arg) => (arg.isActive ? classes.active : classes.unactive)}>
            Create Post
          </NavLink>
        )}
      </div>
      <div className={classes.navMenu}>
        {isLogIn ? (
          <>
            <NavLink to="/Profile" className={(arg) => (arg.isActive ? classes.active : classes.unactive)}>
              Profile
            </NavLink>
            <button onClick={logout}>Log Out</button>
          </>
        ) : (
          <NavLink to="/Login">
            <button>Log in</button>
          </NavLink>
        )}
      </div>
    </div>
  )
}

export default Navbar
