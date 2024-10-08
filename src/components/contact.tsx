"use client"

import { useState, useRef } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

interface FormErrors {
    nameErr: string;
    mailErr: string;
    msgErr: string;
}

export default function Contact() {

    const form = useRef(null);

    const [errors, setErrors] = useState<FormErrors>({
        nameErr: '',
        mailErr: '',
        msgErr: ''
    });

    const validateForm = (name: string, email: string, message: string): boolean => {
        let valid = true;
        const newErrors: FormErrors = { nameErr: '', mailErr: '', msgErr: '' };

        if (name.trim().length === 0) {
            newErrors.nameErr = 'Name is required';
            valid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            newErrors.mailErr = 'Please enter a valid email';
            valid = false;
        }

        if (message.trim().length === 0) {
            newErrors.msgErr = 'The message is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };


    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const sendEmail = async () => {

        document.getElementById('email-form')!.style.filter = 'blur(3px) brightness(0.5)';
        document.getElementById('contactme')!.innerHTML += '<svg class="ring" id="ring" viewBox="25 25 50 50" stroke-width="5"><circle cx="50" cy="50" r="20" /></svg>';
        await sleep(1000)
        emailjs.sendForm(SERVICE_ID!, TEMPLATE_ID!, form.current!, PUBLIC_KEY)
            .then(async (result: any) => {
                console.log(result.text);
                await sleep(1000)
                document.getElementById('ring')!.style.display = "none"
                document.getElementById('email-form')!.style.filter = "none"
                document.getElementById('resultDone')!.style.display = "flex";
                await sleep(3000)
                document.getElementById('resultDone')!.style.display = "none"
            }, async (error: any) => {
                console.log(error.text);
                await sleep(1000)
                document.getElementById('ring')!.style.display = "none"
                document.getElementById('email-form')!.style.filter = "none"
                document.getElementById('resultFail')!.style.display = "flex";
                await sleep(3000)
                document.getElementById('resultFail')!.style.display = "none"
            });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = (form.elements.namedItem('your_name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('your_email') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLInputElement).value;

        if (validateForm(name, email, message)) {
            sendEmail();
        }

    };

    return (
        <section id="contactme" className="flex flex-col place-items-center justify-center pt-8 gap-8">
            <h2 className="title">Contact Me</h2>
            <form id="email-form" className="flex flex-col relative h-auto border border-[--skill-card-bgcolor] bg-[--skill-card-content-bgcolor] flex-wrap gap-5 p-5 rounded-xl lg:w-2/4 w-[90%]" onSubmit={handleSubmit} ref={form}>
                <div className="fields-cont">
                    <span className="field-name">Name</span>
                    <span className="field-errors" id="nameErr">{errors.nameErr}</span>
                    <input type="text" placeholder="Name" name="your_name" id="nome" className={errors.nameErr ? 'invalid' : ''} />
                </div>
                <div className="fields-cont">
                    <span className="field-name">Email</span>
                    <span className="field-errors" id="mailErr">{errors.mailErr}</span>
                    <input type="text" placeholder="example@example.com" name="your_email" id="email" className={errors.mailErr ? 'invalid' : ''} />
                </div>
                <div className="fields-cont">
                    <span className="field-name">Message</span>
                    <span className="field-errors" id="msgErr">{errors.msgErr}</span>
                    <textarea placeholder="Your message..." name="message" id="msg" className={errors.nameErr ? 'invalid' : ''}></textarea>
                </div>
                <div className="fields-cont">
                    <button type="submit" className="btn-submit">SEND</button>
                </div>
            </form>

            <div className='email-result' id='resultDone' style={{ display: "none" }}>
                <Image src={"/assets/done.png"} alt='ok' width='30' height={30} />
                <p>Email sent</p>
            </div>
            <div className='email-result' id='resultFail' style={{ display: "none" }}>
                <Image src={"/assets/error.png"} alt='error' width='30' height={30} />
                <p>Problems sending the email, try again</p>
            </div>

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
