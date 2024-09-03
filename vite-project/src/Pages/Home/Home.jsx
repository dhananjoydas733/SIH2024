// import React, { Component } from 'react'
import styles from "./Home.module.scss"
import * as Components from "../../Components/index"

const Home = () => {
  return (
    <div className={styles.home}>
      <Components.Navbar/>
      <Components.Hero />
    </div>
  )
}

export default Home
