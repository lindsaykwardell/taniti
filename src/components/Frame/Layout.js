import React from 'react'
import NavBar from "./Navbar";

export default function Layout(props) {
  return (
    <div>
      <NavBar link={props.link} />
      {props.children}
    </div>
  )
}
