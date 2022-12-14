import React from 'react';


const MyProject = () => {
    return (
        <div className='mt-10 m-2' >
            <h2 className='text-purple-500 text-6xl font-bold text-center'>MY PROJECT</h2>
            <hr className='w-1/2 mx-auto mt-5' />
            <div className=' mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:w-full w-full mx-auto lg:ml-6 gap-4 ' >

                <article class="overflow-hidden rounded-lg border border-gray-100 shadow-lg shadow-slate-700 w-[400px] h-[600px] ">
                    <img
                        alt="Office"
                        src='https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R55050mmdrivers_f993a2c2-483d-40f3-b2b0-460602543c5a_1300x.jpg?v=1667828684'
                        class="h-[300px] w-full p-6 object-cover"
                    />

                    <div class="p-4 mt-2">
                        <h2 className='text-2xl font-bold text-purple-500'>  Awel Headphone</h2>
                        <p className='mt-2'> Headphones are used for everything from listening to speech.
                            Using good headphones means you'll enjoy high-quality audio, music, which is crucial to the experience</p>
                        <div className='flex gap-2 mt-4' >
                            <h4 className=' text-1xl font-semibold mb-4'>Technologies:</h4>
                            <p className=''>RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth</p>
                        </div>

                    </div>

                    <div className="card-actions justify-center mt-2 flex">
                        <button className='btn btn-sm bg-purple-700 border border-none p-2'><a href="https://awel-headphone-auth.web.app/" target="_blank">Live View</a></button>

                    </div>
                </article>

                <article class="overflow-hidden rounded-lg border border-gray-100 shadow-lg shadow-slate-700 w-[400px] h-[600px]">
                    <img
                        alt="Office"
                        src='https://www.gfs.com/sites/default/files/styles/hero_image_modern_/public/hero-modern/new%20products%20us%20web%20header.jpg?itok=LwOCf7mr)'
                        class="h-[300px] w-full p-6 object-cover"
                    />

                    <div class="p-4 mt-2">
                        <h2 className='text-2xl font-bold text-purple-500'>Food Restaurant</h2>
                        <p className='mt-2'>A restaurant, an eatery, This is a business that prepares and provides customers with food.
                            Food restaurants deliver food to homes and offices.
                            Food is usually served on the premises.</p>
                        <div className='flex gap-2 mt-4' >
                            <h4 className=' text-1xl font-semibold mb-4'>Technologies:</h4>
                            <p className=''>RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth</p>
                        </div>

                    </div>

                    <div className="card-actions justify-center mt-2  flex">
                        <button className='btn btn-sm bg-purple-700 border border-none '><a href="https://pato-food-service-auth.web.app/" target="_blank">Live View</a></button>

                    </div>
                </article>

                <article class="overflow-hidden rounded-lg border border-gray-100 shadow-lg shadow-slate-700 w-[400px] h-[600px]">
                    <img
                        alt="Office"
                        src='https://www.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg'
                        class="h-[300px] w-full p-6 object-cover"
                    />

                    <div class="p-4 mt-2">
                        <h2 className='text-2xl font-bold text-purple-500'>  Programing Language</h2>
                        <p className='mt-2'>A programming language is a computer language.
                            The term programming language usually refers to high-level languages, such as C, javaScript.</p>
                        <div className='flex gap-2 mt-4' >
                            <h4 className=' text-1xl font-semibold mb-4'>Technologies:</h4>
                            <p className=''>RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth</p>
                        </div>

                    </div>

                    <div className="card-actions justify-center mt-2 p-3 flex">
                        <button className='btn btn-sm bg-purple-700 border border-none '><a href="https://programing-language-auth.web.app/home" target="_blank">Live View</a></button>

                    </div>
                </article>
            </div>
        </div>
    );
};

export default MyProject;