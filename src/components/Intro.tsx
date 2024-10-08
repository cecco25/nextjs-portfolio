import Image from "next/image";

export default function Intro() {

    return (
        <section id="intro" className="h-[80dvh] mt-10 flex flex-wrap gap-5 items-center p-10 justify-center lg:justify-between">
            <div className="font-light text-3xl flex flex-col clamp gap-2">
                <span>Hi, </span>
                <span>i'm <b className="text-[--main-fucsia] font-medium">MICHAEL CECCHINI</b></span>
                <p className="border-r-[.10em] border-r-[--main-fucsia] whitespace-nowrap overflow-hidden mt-0 mb-0 ml-auto mr-auto typing">Programmer and Web Developer</p>
            </div>
            <Image src={"/assets/intro.svg"} alt="Intro Animation" className='lg:w-[450px]' width={350} height={350} />
        </section>
    );
}
