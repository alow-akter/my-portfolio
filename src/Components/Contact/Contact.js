import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm
            ('service_n3m9kxl',
                'template_2apx1bd',
                form.current,
                'kKTode4MqTpLhmaa_')
            .then((result) => {
                console.log(result.text);
                console.log('message send');

            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

    }
    return (
        <div className='mt-10 '>

            <form ref={form} onSubmit={sendEmail} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid bg-slate-300">
                <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
                <div>
                    <label for="name" className="block mb-1 ml-1">Name</label>
                    <input id="name" name='name' type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                </div>
                <div>
                    <label for="email" className="block mb-1 ml-1">Email</label>
                    <input id="email" name='email' type="text" placeholder="Your Email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                </div>
                <div>
                    <label for="message" className="block mb-1 ml-1">Message</label>
                    <textarea id="message" name='message' type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400"></textarea>
                </div>
                <div>
                    <input className='w-full  btn btn-accent text-white' type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default Contact;