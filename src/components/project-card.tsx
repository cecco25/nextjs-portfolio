"use client"

import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function ProjectCard() {

    return (
        <div className='flex flex-col g-5 p-5 border-[--glass-border] rounded-2xl backdrop-blur-sm shadow-[--glass-box-shadow] bg-[--glass-bg]'>
            <div className='portfolio-card'>
                <Splide options={{
                    rewind: true,
                    width: 400,
                    heightRatio: 0.8,
                    type: 'fade'
                }}>
                    <SplideSlide>
                        <img src="/assets/logoNightwave.jpeg" alt="Nightwave 1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="/assets/nightwave1.png" alt="Nightwave 2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="/assets/nightwave2.png" alt="Nightwave 3" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="/assets/nightwave4.png" alt="Nightwave 4" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="/assets/nightwave5.png" alt="Nightwave 5" />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );

}