import React from "react"
import classes from "./Greeting.module.css"
const Greeting = (props) => {
  const { name } = props
  const isLogin = false
  return (
    <div className={classes.card}>
      <h3>Wellcome</h3>
      <p>{isLogin ? name : "Unknow"}</p>
    </div>
  )
}

export default Greeting
