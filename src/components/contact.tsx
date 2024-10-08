"use client"

import { useState } from 'react';
import Image from 'next/image';

interface FormErrors {
    nameErr: string;
    mailErr: string;
    msgErr: string;
}

export default function Contact() {
    const [errors, setErrors] = useState<FormErrors>({
        nameErr: '',
        mailErr: '',
        msgErr: ''
    });

    const validateForm = (name: string, email: string, message: string): boolean => {
        let valid = true;
        const newErrors: FormErrors = { nameErr: '', mailErr: '', msgErr: '' };

        if (name.trim().length === 0) {
            newErrors.nameErr = 'Il nome è obbligatorio';
            valid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            newErrors.mailErr = 'Inserisci un\'email valida';
            valid = false;
        }

        if (message.trim().length === 0) {
            newErrors.msgErr = 'Il messaggio è obbligatorio';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = (form.elements.namedItem('your_name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('your_email') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLInputElement).value;

        if (validateForm(name, email, message)) {
            console.log("Form validato e inviato!");
        }
    };

    return (
        <section id="contactme" className="flex flex-col place-items-center justify-center pt-8 gap-8">
            <h2 className="title">Contact Me</h2>
            <form className="flex flex-col relative h-auto border border-[--skill-card-bgcolor] bg-[--skill-card-content-bgcolor] flex-wrap gap-5 p-5 rounded-xl lg:w-2/4 w-[90%]" onSubmit={handleSubmit}>
                <div className="fields-cont">
                    <span className="field-name">Nome</span>
                    <span className="field-errors" id="nameErr">{errors.nameErr}</span>
                    <input type="text" placeholder="Nome" name="your_name" id="nome" className={errors.nameErr ? 'invalid' : ''} />
                </div>
                <div className="fields-cont">
                    <span className="field-name">Email</span>
                    <span className="field-errors" id="mailErr">{errors.mailErr}</span>
                    <input type="text" placeholder="example@example.com" name="your_email" id="email" className={errors.mailErr ? 'invalid' : ''} />
                </div>
                <div className="fields-cont">
                    <span className="field-name">Messaggio</span>
                    <span className="field-errors" id="msgErr">{errors.msgErr}</span>
                    <textarea placeholder="Il tuo messaggio..." name="message" id="msg" className={errors.nameErr ? 'invalid' : ''}></textarea>
                </div>
                <div className="fields-cont">
                    <button type="submit" className="btn-submit">INVIA</button>
                </div>
            </form>

            <div className='flex w-[90%] justify-center gap-10 items-center p-5 social-cont'>
                <a href='https://instagram.com/___cecco___' target='_blank' rel='noreferrer' className='social-img'>
                    <Image src={"/assets/instagram.png"} alt='instagram' width={50} height={50} />
                </a>
                <a href='mailto:cecchinimichael.code@gmail.com'>
                    <Image src={"/assets/gmail.png"} alt='gmail' width='50' height={50} className='social-img' />
                </a>
                <a href='https://github.com/cecco25' target='_blank' rel='noreferrer'>
                    <Image src={"/assets/github.png"} alt='github' width='50' height={50} className='social-img' />
                </a>
                <a href='https://www.threads.net/@___cecco___' target='_blank' rel='noreferrer'>
                    <Image src={"/assets/threads.png"} alt='Threads' width='50' height={50} className='social-img' />
                </a>
            </div>

        </section>
    );
}
