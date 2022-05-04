import React from "react"
import earthLogo from "../img/earth-logo.png"

export default function Navbar() {
  return (
    <nav className="nav-container">
      <img src={earthLogo} alt="earth logo" className="nav-image"/>
      <p className="nav-text">my travel journal.</p>
    </nav>
  )
}