import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="pt-5 flex items-center justify-center">
      <div className="flex flex-col gap-5">
        <h2 className="title">About Me</h2>
        <div className="flex flex-col lg:flex-row gap-[6vw] justify-center p-4 place-items-center">
          <Image
            src={"/assets/aboutme.JPEG"}
            className="aspect-square rounded-full box-shadow-pic lg:w-[350px]"
            alt="about me"
            width={250}
            height={0}
          />
          <div className="flex flex-col gap-4 place-content-center text-center lg:text-left font-light text-lg [&>p>b]:text-[--main-blue]">
            <p>
              Hi everyone, I&apos;m Michael Cecchini and I&apos;m a first year
              university student in Perugia (PG).
            </p>
            <p>
              I am passionate about IT and, in particular,{" "}
              <b>Web development</b>: <b>Frontend</b> and <b>Backend.</b>.<br />
              This passion for websites also allowed me to learn to use{" "}
              <b>UI/UX Design</b> tools.
            </p>
            <p>
              I am currently attending university to broaden my knowledge in the
              world of technology and IT.
            </p>
            <p>
              Finally, I also like reading, playing video games and the world of
              music.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
