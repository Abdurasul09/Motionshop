import React from 'react';
import {AboutUs, Card, Phone, Email, Search} from "../Icons";
import NextLink from "next/link"
import {useSelector} from "react-redux";

const Header = () => {
    const {productsCountInCart} = useSelector(state => state.cart)
    return (
        <nav className="z-10 w-full bg-white-500  border-b-2">
            <div className="w-full bg-indigo-900 pt-3 pl-5 pr-5 pb-3 flex items-center justify-between">
                <div className="flex items-center text-white text-xs">
                    <span className="flex items-center">
                        <Phone/>
                        <span className="pl-2">+996 777 888 999</span>
                    </span>
                    <span className="flex items-center pl-5">
                        <Email/>
                        <span className="pl-2">motionweb@gmail.com</span>
                    </span>
                </div>
                <div className="flex items-center justify-end text-xs">
                    <span className="text-white pr-5">Create an account</span>
                    <span className="text-white pl-5 border-l-2">Sign in</span>
                </div>
            </div>
            <div className='flex items-center justify-between w-full flex-wrap pl-8 pr-8 pt-5 pb-5'>
                <div className="flex items-center flex-shrink-0 text-indigo-700 mr-6">
                <span className="font-semi-bold text-xl tracking-tight">
                    <NextLink href="/">
                        <a>
                            Motion<span className="text-blue-500">Shop</span>
                        </a>
                    </NextLink>
                </span>
                </div>
                <div className="block  lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href="#"
                           className="block mt-4 lg:inline-block lg:mt-0 text-grey-500 hover:text-pink-700 mr-4">
                            Docs
                        </a>
                        <a href="#"
                           className="block mt-4 lg:inline-block lg:mt-0 text-grey-500 hover:text-pink-700 mr-4">
                            Examples
                        </a>
                        <a href="#"
                           className="block mt-4 lg:inline-block lg:mt-0 text-grey-500 hover:text-pink-700">
                            Blog
                        </a>
                    </div>
                    <div>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                type="text" name="price" id="price"
                                className="focus:ring-indigo-500 py-2 border focus:border-indigo-500 block w-64 pl-2 pr-12 sm:text-sm border-gray-300 rounded-md"
                                placeholder="Поиск..."
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                                <span className="text-gray-500 sm:text-sm">
                                    <Search/>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex-grow '/>
                    <div className="mr-5">
                        <AboutUs/>
                    </div>

                    <div className="p-3 border-l-2 relative">
                        <Card/>
                            <span
                                className="absolute top-1 left-7 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold text-red-100 bg-red-600 rounded-full">
                                {productsCountInCart}
                            </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;