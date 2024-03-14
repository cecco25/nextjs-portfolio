"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import './contact.css'
import insta from '../../../public/assets/instagram.png'
import gmail from '../../../public/assets/gmail.png'
import github from '../../../public/assets/github.png'
import threads from '../../../public/assets/threads.png'
import emailjs from '@emailjs/browser';
import done from '../../../public/assets/done.png'
import errorImg from '../../../public/assets/error.png'

function Contact() {

    const form = useRef();

    function validateName(name) {
        if (name.value.length > 1 && name.value != null && name.value != "") {
            document.getElementById('nameErr').innerHTML = ""
            document.getElementById('nome').style.outline = "none";
            return true;
        }
        else {
            document.getElementById('nameErr').innerHTML = "Inserisci un nome valido"
            document.getElementById('nome').style.outline = "2px solid rgb(213, 49, 49)";
            return false;
        }
    }

    function validateEmail(email) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.value.match(mailformat)) {
            document.getElementById('mailErr').innerHTML = ""
            document.getElementById('email').style.outline = "none";
            return true;
        }
        else {
            document.getElementById('mailErr').innerHTML = "Inserisci un indirizzo email valido"
            document.getElementById('email').style.outline = "2px solid rgb(213, 49, 49)";
            return false;
        }
    }

    function validateMessage(message) {
        if (message.value.length > 1 && message.value != null && message.value != "") {
            document.getElementById('msgErr').innerHTML = ""
            document.getElementById('msg').style.outline = "none";
            return true;
        }
        else {
            document.getElementById('msgErr').innerHTML = "Inserisci un messaggio valido"
            document.getElementById('msg').style.outline = "2px solid rgb(213, 49, 49)";
            return false;
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const sendEmail = async (e) => {
        e.preventDefault();
        var isNameValid = validateName(document.getElementById('nome'))
        var isMailValid = validateEmail(document.getElementById('email'))
        var isMessageValid = validateMessage(document.getElementById('msg'))
        if (isNameValid && isMailValid && isMessageValid) {
            document.getElementById('contact-form').style.filter = 'blur(3px) brightness(0.5)'
            document.getElementById('contact').innerHTML += '<svg class="ring" id="ring" viewBox="25 25 50 50" stroke-width="5"><circle cx="50" cy="50" r="20" /></svg>';
            await sleep(1000)
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
                .then(async (result) => {
                    console.log(result.text);
                    await sleep(1000)
                    document.getElementById('ring').style.display = "none"
                    document.getElementById('contact-form').style.filter = "none"
                    document.getElementById('resultDone').style.display = "flex";
                    await sleep(3000)
                    document.getElementById('resultDone').style.display = "none"
                }, async (error) => {
                    console.log(error.text);
                    await sleep(1000)
                    document.getElementById('ring').style.display = "none"
                    document.getElementById('contact-form').style.filter = "none"
                    document.getElementById('resultFail').style.display = "flex";
                    await sleep(3000)
                    document.getElementById('resultFail').style.display = "none"
                });
        }
    };
    return (
        <section id='contact'>
            <h2>Contact Me</h2>
            <form className='contact-form' id='contact-form' ref={form} onSubmit={sendEmail}>
                <div className='fields-cont'>
                    <span className='field-name'>Nome</span>
                    <span className='field-errors' id='nameErr'></span>
                    <input type='text' placeholder='Nome' name="your_name" id='nome' />
                </div>
                <div className='fields-cont'>
                    <span className='field-email'>Email</span>
                    <span className='field-errors' id='mailErr'></span>
                    <input type='text' placeholder='example@example.com' name="your_email" id='email' />
                </div>
                <div className='fields-cont'>
                    <span className='field-msg'>Messaggio</span>
                    <span className='field-errors' id='msgErr'></span>
                    <textarea placeholder='Il tuo messaggio...' name="message" id='msg' />
                </div>
                <button type='submit' className='form-submit'>INVIA</button>
            </form>

            <div className='email-result' id='resultDone' style={{ display: "none" }}> <Image src={done} alt='ok' width='30' /> <p>Mail inviata</p> </div>
            <div className='email-result' id='resultFail' style={{ display: "none" }}> <Image src={errorImg} alt='ok' width='30' /> <p>Problemi con l&lsquo;invio della mail, riprova </p> </div>

            <div className='social-cont'>
                <a href='https://instagram.com/___cecco___' target='_blank' rel='noreferrer'><Image src={insta} alt='instagram' width='50' /></a>
                <a href='mailto:cecchinimichael.code@gmail.com'><Image src={gmail} alt='gmail' width='50' /></a>
                <a href='https://github.com/cecco25' target='_blank' rel='noreferrer'><Image src={github} alt='github' width='50' /></a>
                <a href='https://www.threads.net/@___cecco___' target='_blank' rel='noreferrer'><Image src={threads} alt='Threads' width='50' /></a>
            </div>
        </section>
    )
}

export default Contact;