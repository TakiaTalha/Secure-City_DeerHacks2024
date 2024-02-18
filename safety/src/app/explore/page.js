"use client"
import React from 'react'
import styles from './explore.module.css'
import Map from "@/components/map/map"
import Read from "@/components/read/read"

export default function explore() {
  return (
    <div>
    <div className={styles.first}>
       <div className={styles.sideBar}>
        <Read />
       </div>
      <div className={styles.mainContent}>
      <Map />
      </div>
    </div>
    <section className={styles.blank}>
          <h1> ok</h1>
         </section>
    </div>
  )
}
