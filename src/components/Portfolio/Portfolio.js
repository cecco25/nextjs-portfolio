"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import logoNightwave from '../../../public/assets/logoNightwave.jpeg'
import nightwave1 from '../../../public/assets/nightwave1.png'
import nightwave2 from '../../../public/assets/nightwave2.png'
import nightwave3 from '../../../public/assets/nightwave3.png'
import nightwave4 from '../../../public/assets/nightwave4.png'
import nightwave5 from '../../../public/assets/nightwave5.png'
import logoStagePass from '../../../public/assets/logoStagePass.jpeg'
import stagepass1 from '../../../public/assets/stagepass1.png'
import stagepass2 from '../../../public/assets/stagepass2.png'
import stagepass3 from '../../../public/assets/stagepass3.png'
import stagepass4 from '../../../public/assets/stagepass4.png'
import stagepass5 from '../../../public/assets/stagepass5.png'
import logoBikeWin from '../../../public/assets/logoBikeWin.jpeg'
import bikewin1 from '../../../public/assets/bikewin1.png'
import bikewin2 from '../../../public/assets/bikewin2.png'
import bikewin3 from '../../../public/assets/bikewin3.png'
import html from '../../../public/assets/html.svg'
import css from '../../../public/assets/css.svg'
import js from '../../../public/assets/js.svg'
import php from '../../../public/assets/php.svg'
import mysql from '../../../public/assets/mysql.svg'
import java from '../../../public/assets/java.svg'
import figma from '../../../public/assets/figma.svg'
import c from '../../../public/assets/c-lang.svg'
import help from '../../../public/assets/help.svg'
import logoMerende from '../../../public/assets/logoServizioMerende.jpeg'
import merende1 from '../../../public/assets/merende1.png'
import merende2 from '../../../public/assets/merende2.png'
import merende3 from '../../../public/assets/merende3.png'
import scalogna from '../../../public/assets/scalogna-quest.png'
import './portfolio.css'

function Portfolio() {
    return (
        <section id='portfolio'>
            <h2>Portfolio</h2>
            <div className='portfolio-container'>
                <div className='portfolio-card'>
                    <Splide options={{
                        rewind: true,
                        width: 400,
                        heightRatio: 0.8,
                        type: 'fade'
                    }}>
                        <SplideSlide className='splide-slide'>
                            <Image src={logoNightwave} alt="Nightwave 1" />
                        </SplideSlide>
                        <SplideSlide className='splide-slide'>
                            <Image src={nightwave1} alt="Nightwave 2" />
                        </SplideSlide>
                        <SplideSlide className='splide-slide'>
                            <Image src={nightwave2} alt="Nightwave 3" />
                        </SplideSlide>
                        <SplideSlide className='splide-slide'>
                            <Image src={nightwave3} alt="Nightwave 4" />
                        </SplideSlide>
                        <SplideSlide className='splide-slide'>
                            <Image src={nightwave4} alt="Nightwave 5" />
                        </SplideSlide>
                        <SplideSlide className='splide-slide'>
                            <Image src={nightwave5} alt="Nightwave 6" />
                        </SplideSlide>
                    </Splide>
                    <details>
                        <summary>
                            <span>NIGHTWAVE</span>
                            <Image src={help} alt='help' className='img-help' />
                            <div className='div-help'>
                                <Image src={html} alt='html' width='35' />
                                <Image src={css} alt='css' width='35' />
                                <Image src={js} alt='js' width='35' />
                                <Image src={php} alt='php' width='35' />
                                <Image src={mysql} alt='mysql' width='35' />
                            </div>
                        </summary>
                        <p>Gestionale per una discoteca in cui l&lsquo;amministratore può aggiungere/modificare gli eventi ed i biglietti, quest&lsquo;ultimi
                            potranno essere acquistati dagli utenti registrati e verrà generato un QR Code univoco da poter essere scannerizzato con la fotocamera
                            integrata per verificare l&lsquo;acquisto.</p>
                    </details>
                </div>
                <div className='portfolio-card'>
                    <Splide options={{
                        rewind: true,
                        width: 400,
                        heightRatio: 0.8,
                        type: 'fade'
                    }}>
                        <SplideSlide className='splide-slide'>
                            <Image src={logoStagePass} alt="StagePass Logo" />
                        </SplideSlide>
                        <SplideSlide className='splide-slide'>
                            <Image src={stagepass1} alt="StagePass 1" />
                        </SplideSlide>
                        <SplideSlide className='splide-slide'>
                            <Image src={stagepass2} alt="StagePass 2" />
                        </SplideSlide>
                        <SplideSlide className='splide-slide'>
                            <Image src={stagepass3} alt="StagePass 3" />
                        </SplideSlide>
                        <SplideSlide className='splide-slide'>
                            <Image src={stagepass4} alt="StagePass 4" />
                        </SplideSlide>
                        <SplideSlide className='splide-slide'>
                            <Image src={stagepass5} alt="StagePass 5" />
                        </SplideSlide>
                    </Splide>
                    <details>
                        <summary>
                            <span>STAGE PASS</span>
                            <Image src={help} alt='help' className='img-help' />
                            <div className='div-help'>
                                <Image src={html} alt='html' width='35' />
                                <Image src={css} alt='css' width='35' />
                                <Image src={js} alt='js' width='35' />
                                <Image src={php} alt='php' width='35' />
                                <Image src={mysql} alt='mysql' width='35' />
                                <Image src={figma} alt='figma' width='35' />
                            </div>
                        </summary>
                        <p>Social Network per condividere eventi live di musica, teatro, spettacoli ecc... in cui l&lsquo;utente registrato
                            può direttamente aggiungerli specificando nome, artisti coinvolti, luogo, data e allegando un&lsquo;immagine
                            significativa. Essi potranno inoltre mettere un voto da 1 a 5 agli eventi visualizzati e lasciare un commento.
                        </p>
                    </details>
                </div>
                <div className='portfolio-card'>
                    <Splide options={{
                        rewind: true,
                        width: 400,
                        heightRatio: 0.8,
                        type: 'fade'
                    }}>
                        <SplideSlide className='splide-slide'>
                            <Image src={logoBikeWin} alt="Logo BikeWin" />
                        </SplideSlide>
                        <SplideSlide className='splide-slide'>
                            <Image src={bikewin1} alt="BikeWin 1" />
                        </SplideSlide>
                        <SplideSlide className='splide-slide'>
                            <Image src={bikewin2} alt="BikeWin 2" />
                        </SplideSlide>
                        <SplideSlide className='splide-slide'>
                            <Image src={bikewin3} alt="BikeWin 3" />
                        </SplideSlide>
                    </Splide>
                    <details>
                        <summary>
                            <span>BIKE & WIN</span>
                            <Image src={help} alt='help' className='img-help' />
                            <div className='div-help'>
                                <Image src={html} alt='html' width='35' />
                                <Image src={css} alt='css' width='35' />
                                <Image src={js} alt='js' width='35' />
                                <Image src={php} alt='php' width='35' />
                                <Image src={mysql} alt='mysql' width='35' />
                                <Image src={figma} alt='figma' width='35' />
                            </div>
                        </summary>
                        <p>Landing page per un progetto scolastico riguardante la mobilità sostenibile in cui sono presenti
                            tutte le informazioni della scuola, del progetto e della classifica in tempo reale, aggiornata con i dati
                            raccolti dall&lsquo;applicazione esterna. Il Canvas divide gli sfidanti in base ai kilometri percorsi più avanti
                            o più indietro.</p>
                    </details>
                </div>
                <div className='portfolio-card'>
                    <Splide options={{
                        rewind: true,
                        width: 400,
                        heightRatio: 0.8,
                        type: 'fade'
                    }}>
                        <SplideSlide className='splide-slide'>
                            <Image src={logoMerende} alt="Logo Merende" />
                        </SplideSlide>
                        <SplideSlide className='splide-slide'>
                            <Image src={merende1} alt="merende 1" />
                        </SplideSlide>
                        <SplideSlide className='splide-slide'>
                            <Image src={merende2} alt="merende 2" />
                        </SplideSlide>
                        <SplideSlide className='splide-slide'>
                            <Image src={merende3} alt="merende 3" />
                        </SplideSlide>
                    </Splide>
                    <details>
                        <summary>
                            <span>SERVER SERVIZIO MERENDE</span>
                            <Image src={help} alt='help' className='img-help' />
                            <div className='div-help'>
                                <Image src={java} alt='Java' width='35' />
                                <Image src={figma} alt='Figma' width='35' />
                            </div>
                        </summary>
                        <p>Server in grado di salvare le richieste delle liste di merende (in formato CSV) dei consumatori per i fornitori, quest&lsquo;ultimi saranno infatti in grado di visualizzare in tempo reale i prodotti richiesti dai loro consumatori così da provvedere con il rifornimento. </p>
                    </details>
                </div>
                <div className='portfolio-card'>
                    <Splide options={{
                        rewind: true,
                        width: 400,
                        heightRatio: 0.8,
                        type: 'fade',
                        arrows: false
                    }}>
                        <SplideSlide className='splide-slide'>
                            <Image src={scalogna} alt="Logo Scalogna-Quest" />
                        </SplideSlide>
                    </Splide>
                    <details>
                        <summary>
                            <span>SCALOGNA-QUEST</span>
                            <Image src={help} alt='help' className='img-help' />
                            <div className='div-help'>
                                <Image src={c} alt='C' width='35' />
                            </div>
                        </summary>
                        <p>Gioco da terminale sviluppato in C, remake di Hero-Quest: 4 player si sfidano in una mappa fatta di segrete generata randomicamente, in cui l&lsquo;obbiettivo è arrivare alla fine senza morire, prendendo tesori, cure ma anche rischiando di avvelenarsi e combattere con gli abitanti delle segrete.<br />
                            <Link href="https://github.com/cecco25/scalogna-quest" style={{ color: "white", textDecoration: "underline" }}>Clicca qui per provarlo!</Link>
                        </p>
                    </details>
                </div>
            </div>
        </section >
    )

}

export default Portfolio;