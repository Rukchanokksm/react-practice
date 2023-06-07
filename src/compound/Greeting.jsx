import React, { useState } from "react"
import classes from "./Greeting.module.css"
const Greeting = (props) => {
  // const state = useState("Smite")
  const [name, setName] = useState("Smite")
  const handleClick = () => {
    setName("John")
  }
  return (
    <>
      <div className={classes.card}>
        <h3>Wellcome</h3>
        <p>{name}</p>
      </div>
      <button onClick={handleClick}>Change Name</button>
    </>
  )

  // const { name } = props
  // const isLogin = false
  // return (
  //   <div className={classes.card}>
  //     <h3>Wellcome</h3>
  //     <p>{isLogin ? name : "Unknow"}</p>
  //   </div>
  // )
}

export default Greeting
