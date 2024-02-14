import React from 'react'
import Image from 'next/image'
import './about.css'
import aboutme from '../../../public/assets/aboutme.JPEG'

function About() {
    return (
        <section id='about'>
            <div className='about-contents'>
                <h2>About Me</h2>
                <div className='about-info'>
                    <Image src={aboutme} className='about-me' alt='about me' />
                    <div className='about-dex'>
                        <p>Ciao a tutti, sono Michael Cecchini e sono un studente al primo anno di università a Perugia (PG).</p>
                        <p>Sono appassioanto di infomatica e, in particolare, di <b>sviluppo Web</b>: <b>Frontend</b> e <b>Backend</b>.<br />
                            Questa passione per i siti web mi ha permesso anche di imparare ad utilizzare strumenti di <b>UI/UX Design</b>.</p>
                        <p>Attualmente sto frequentando l'università per ampliare le mie conoscenze nel mondo della tecnologia e
                            dell'informatica.</p>
                        <p>Infine mi piace anche leggere, giocare ai videogiochi ed il mondo della musica.</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About