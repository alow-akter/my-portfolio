import React from 'react';


const Banner = () => {
    return (
        <div>
            <div>
                <section className="relative bg-purple-400 mt-4">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <span className="text-violet-700 font-bold text-3xl ">Hello</span><p className='text-2xl'>This is</p>
                            <h1 className="text-5xl lg:ml-6 font-bold leading-none sm:text-6xl text-purple-700 ">Alow
                                <span className="dark:text-violet-400 m-3 text-black">Akter</span>
                            </h1>

                            <p className="mt-6 mb-8 text-lg sm:mb-12">
                                I am a Frontend(ReactJs)/Full-Stack(MERN) web developer with 6 months of learning/working experience. I love to work with logic and build it by programming

                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <button className='btn btn-sm bg-[#8c2ce6] hover:bg-purple-500 border border-none'><a href="https://drive.google.com/file/d/1IiVBJ_nGgCutxHRi4OJ3FnEIsMIZQxp0/view?usp=share_link" target="_blank">RESUME</a></button>
                                <button className='btn btn-sm bg-[#9138e3] hover:bg-purple-500 border border-none'><a href="https://www.linkedin.com/in/alow-akter-117b22252/" target="_blank">HIRE ME</a></button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img src="https://thumbs.dreamstime.com/b/man-programmer-working-computer-code-screen-illustration-writing-pc-testing-ui-ux-guy-laptop-115509734.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Banner;