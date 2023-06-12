import React, { useState } from "react"
import classes from "./LoginStyle.module.css"
import { useAuth } from "../providers/AuthProviders"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [userInput, setUserNameInput] = useState("")
  const [PasswordInput, setPasswordInput] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(userInput, PasswordInput)

      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.loginFrom}>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUserNameInput(e.target.value)
          }}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPasswordInput(e.target.value)
          }}
        />

        <input type="submit" value="Login" />
      </form>
    </>
  )
}

export default Login
