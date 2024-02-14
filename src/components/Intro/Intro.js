import React from 'react'
import Image from 'next/image'
import './intro.css'
import intro_animation from '../../../public/assets/intro.svg'

function Intro() {
  return (
    <section id="intro">
      <div className='intro-contents'>
        <span>Ciao,</span>
        <span>sono <b style={{ color: "#E16DF5" }}>MICHAEL CECCHINI</b></span>
        <p>Programmatore e Sviluppatore Web</p>
      </div>
      <Image src={intro_animation} alt="Intro Animation" className='intro-logo' width={450} />
      <a style={{ display: "none" }} href="https://storyset.com/work">Work illustrations by Storyset</a>
    </section>
  )
}

export default Intro;