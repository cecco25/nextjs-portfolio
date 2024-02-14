"use client";

import React from 'react'
import Image from 'next/image';
import './skills.css'
import html from '../../../public/assets/html.svg'
import css from '../../../public/assets/css.svg'
import js from '../../../public/assets/js.svg'
import php from '../../../public/assets/php.svg'
import mysql from '../../../public/assets/mysql.svg'
import java from '../../../public/assets/java.svg'
import figma from '../../../public/assets/figma.svg'
import csharp from '../../../public/assets/csharp.svg'
import angular from '../../../public/assets/angular.svg'
import nodejs from '../../../public/assets/nodejs.svg'
import react from '../../../public/assets/react.svg'
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