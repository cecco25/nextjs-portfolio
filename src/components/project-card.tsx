"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

type ProjectCardProps = {
  name: string;
  images: string[];
  dex: string;
  languages: string[];
};

export default function ProjectCard({
  name,
  images,
  dex,
  languages,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col w-[400px] h-max g-5 p-5 border border-[--glass-border] rounded-2xl backdrop-blur-sm shadow-[--glass-box-shadow] bg-[--glass-bg] project-card">
      <Splide
        options={{
          rewind: true,
          width: 400,
          heightRatio: 0.8,
          type: "fade",
          arrows: true,
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <Image
              className="w-full h-full object-cover brightness-[0.9]"
              src={image}
              alt={`${name} image ${index + 1}`}
              layout="fill"
              sizes="100%"
            />
          </SplideSlide>
        ))}
      </Splide>
      <details className="pt-3">
        <summary className="no-drag flex relative justify-between p-3 font-medium text-xl hover:underline">
          <span className="cursor-pointer">{name.toUpperCase()}</span>
          <Image
            className="img-help"
            src={"assets/help.svg"}
            alt="help"
            width={24}
            height={24}
          />
          <div className="flex opacity-0 w-fit absolute right-[-20px] top-[-55px] bg-[--background] p-2 rounded-2xl border border-[--glass-border] g-1 z-10 transition-opacity div-help">
            {languages.map((lan, index) => (
              <Image
                src={`assets/${lan}.svg`}
                alt={lan}
                width="35"
                height={35}
                key={index}
              />
            ))}
          </div>
        </summary>
        <p className="vsm:pl-5 overflow-y-auto max-h-[250px] font-light text-lg">
          {dex}
        </p>
      </details>
    </div>
  );
}
