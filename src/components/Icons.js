import React from 'react';
import NextLink from 'next/link'


export const AboutUs = () => {
    return (
        <div>
            <svg className="h-6 w-6 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
        </div>
    );
};


export const Card = () => {
    return (
        <div>
            <NextLink href="/card">
                <a>
                    <svg className=" h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                </a>
            </NextLink>
        </div>
    );
};
export const Phone = () => {
    return (
        <div>
            <NextLink href="#">
                <a>
                    <svg className="h-5 w-5 text-gray-200" width="24" height="24" viewBox="0 0 24 24"
                         strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                         strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <path
                            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                    </svg>
                </a>
            </NextLink>
        </div>
    )
}

export const Email = () => {
    return (
        <div>
            <NextLink href="#">
                <a>
                    <svg className="h-6 w-6 text-gray-200" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                         stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <rect x="3" y="5" width="18" height="14" rx="2"/>
                        <polyline points="3 7 12 13 21 7"/>
                    </svg>
                </a>
            </NextLink>
        </div>
    )
}

export const ArrowLeft = () => {
    return(
        <div>
            <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                 stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <polyline points="15 6 9 12 15 18"/>
            </svg>
        </div>
    )
}
export const ArrowRight = () => {
    return(
        <div>
            <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
            </svg>
        </div>
    )
}

export const Close = () => {
    return(
        <div>
            <svg
                className="h-6 w-6 text-gray-500 cursor-pointer my-4 hover:text-red-500"
                width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" fill="none" strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z"/>
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
        </div>
    )
}

export const Search = () => {
    return(
        <div>
            <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
        </div>
    )
}