import React from 'react';

const Footer = () => {
    return (
        <section className="flex justify-between flex-wrap bg-gray-100 p-10 mt-10">
            <div className="w-full block flex-grow lg:flex lg:w-auto border-b-2 border-gray-400 pb-5">
                <div className="flex-1">
                    <span className="font-semibold text-xl tracking-tight">Motion Shop</span>
                </div>
                <div className='flex flex-col flex-1 text-start'>
                    <a href="#"
                       className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-pink-700 mr-4">
                        Женщинам
                    </a>
                    <a href="#"
                       className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-pink-700 mr-4">
                        Мужчинам
                    </a>
                    <a href="#"
                       className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-pink-700 mr-4">
                        Детям
                    </a>
                    <a href="#"
                       className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-pink-700 mr-4">
                        Обувь
                    </a>
                </div>
                <div className='flex flex-col  text-start flex-1'>
                    <a href="#"
                       className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-pink-700 mr-4">
                        О нас
                    </a>
                    <a href="#"
                       className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-pink-700 mr-4">
                        FAQ
                    </a>
                </div>
                <div className='flex flex-col flex-1 text-start'>
                    <h1>Связаться с нами:</h1>
                    <div className="flex justify-start mt-2">
                        <svg className="h-5 w-5 text-gray-500" width="24" height="24" viewBox="0 0 24 24"
                             stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <path
                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                        </svg>
                        <a href="#"
                           className=" text-xs mt-4  lg:mt-0 text-gray-700 text-center hover:text-pink-700 ">
                            +996 222 533 735
                        </a>
                    </div>

                    <div className="flex justify-start mt-2">
                        <svg className="h-5 w-5 text-gray-500" width="24" height="24" viewBox="0 0 24 24"
                             stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <path
                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                        </svg>
                        <a href="#"
                           className=" text-xs mt-4  lg:mt-0 text-gray-700 text-center hover:text-pink-700 ">
                            +996 222 533 735
                        </a>
                    </div>
                    <div className="flex justify-start mt-2">
                        <svg className="h-5 w-5 text-gray-500" width="24" height="24" viewBox="0 0 24 24"
                             stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <path
                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                        </svg>
                        <a href="#"
                           className=" text-xs mt-4  lg:mt-0 text-gray-700 text-center hover:text-pink-700 ">
                            +996 222 533 735
                        </a>
                    </div>
                </div>
                <div className='flex flex-col flex-1 text-start'>
                    <h1>Адрес</h1>
                    <p className="text-xs text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius in dolor viverra feugiat neque, sed in. Mattis volutpat malesuada velit parturient aliquam, est.</p>
                </div>
            </div>
            <div className="text-center pt-5">
                <div className="flex">
                    <svg className="h-6 w-6 text-gray-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                         stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <circle cx="12" cy="12" r="9"/>
                        <path d="M14.5 9a3.5 4 0 1 0 0 6"/>
                    </svg>
                    <h1 className="text-gray-500">Motion-Shop - все права защищены</h1>
                </div>
            </div>
        </section>
    );
};

export default Footer;