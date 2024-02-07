"use client";

import React from 'react'
import Image from 'next/image';
import './skills.css'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import js from '../../assets/js.svg'
import php from '../../assets/php.svg'
import mysql from '../../assets/mysql.svg'
import java from '../../assets/java.svg'
import figma from '../../assets/figma.svg'
import csharp from '../../assets/csharp.svg'
import angular from '../../assets/angular.svg'
import nodejs from '../../assets/nodejs.svg'
import react from '../../assets/react.svg'
import './script'

function Skills() {
    return (
        <section id="skills">
            <h2 className='skills-title'>Skills</h2>
            <div className='slider'>
                <div className='skills-cards'>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={html} alt='html' />
                            <h2>HTML</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={css} alt='css' />
                            <h2>CSS</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={js} alt='javascript' />
                            <h2>JavaScript</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={php} alt='php' />
                            <h2>PHP</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={mysql} alt='mysql' />
                            <h2>MySQL</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={react} alt='react' />
                            <h2>React</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={angular} alt='angular' />
                            <h2>Angular</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={nodejs} alt='node js' />
                            <h2>NodeJS</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={figma} alt='figma' />
                            <h2>Figma</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={java} alt='java' />
                            <h2>Java</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={csharp} alt='c-sharp' />
                            <h2>C#</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={html} alt='html' />
                            <h2>HTML</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={css} alt='css' />
                            <h2>CSS</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={js} alt='javascript' />
                            <h2>JavaScript</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={php} alt='php' />
                            <h2>PHP</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={mysql} alt='mysql' />
                            <h2>MySQL</h2>
                        </div>
                    </div>

                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={react} alt='react' />
                            <h2>React</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={angular} alt='angular' />
                            <h2>Angular</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={nodejs} alt='node js' />
                            <h2>NodeJS</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={figma} alt='figma' />
                            <h2>Figma</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={java} alt='java' />
                            <h2>Java</h2>
                        </div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-card-content'>
                            <Image src={csharp} alt='c-sharp' />
                            <h2>C#</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills