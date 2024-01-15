import React from 'react'
import '../assets/Home.css'

export default function Home() {
  return (
    <div>
        <div className='top-bar'>
            <h1 className='header'>Code Tuner</h1>
            <h1 className='header' style={{ cursor: "pointer", textDecoration: "underline" }}>Sign out</h1>
        </div>
    </div>
  )
}
