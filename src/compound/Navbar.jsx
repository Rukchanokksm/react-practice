import React from "react"
import classes from "./Navstyle.module.css"

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <h1>Logo</h1>
      <button>Login</button>
    </div>
  )
}

export default Navbar
