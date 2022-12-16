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
            <h2 className="w-full text-4xl font-bold text-center text-purple-700 ">Contact Me</h2>
            <hr className='w-1/2 mx-auto mt-4' />
            <form ref={form} onSubmit={sendEmail} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow  ng-untouched ng-pristine ng-valid  bg-purple-400 mt-9">

                <div>
                    <label for="name" className="block mb-1 ml-1">Name</label>
                    <input id="name" name='name' type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 " />
                </div>
                <div>
                    <label for="email" className="block mb-1 ml-1">Email</label>
                    <input id="email" name='email' type="text" placeholder="Your Email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 " />
                </div>
                <div>
                    <label for="message" className="block mb-1 ml-1">Message</label>
                    <textarea id="message" name='message' type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 "></textarea>
                </div>
                <div>
                    <input className='w-full border-none   btn bg-purple-700 hover:bg-violet-900 text-white font-extrabold' type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default Contact;