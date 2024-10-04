import Image from "next/image";

export default function About() {
    return (
        <section id='about' className="pt-5">
            <div className='flex flex-col gap-5'>
                <h2 className="title">About Me</h2>
                <div className='flex flex-col lg:flex-row gap-[6vw] justify-center p-4 place-items-center'>
                    <Image src={"/assets/aboutme.JPEG"} className='aspect-square rounded-full box-shadow-pic lg:w-[350px]' alt='about me' width={250} height={0} />
                    <div className='flex flex-col gap-4 place-content-center text-center lg:text-left font-light text-lg [&>p>b]:text-[--main-blue]'>
                        <p>Ciao a tutti, sono Michael Cecchini e sono un studente al primo anno di università a Perugia (PG).</p>
                        <p>Sono appassionato di infomatica e, in particolare, di <b>sviluppo Web</b>: <b>Frontend</b> e <b>Backend</b>.<br />
                            Questa passione per i siti web mi ha permesso anche di imparare ad utilizzare strumenti di <b>UI/UX Design</b>.</p>
                        <p>Attualmente sto frequentando l'università per ampliare le mie conoscenze nel mondo della tecnologia e
                            dell'informatica.</p>
                        <p>Infine mi piace anche leggere, giocare ai videogiochi ed il mondo della musica.</p>
                    </div>
                </div>
            </div>
        </section >
    );
}
