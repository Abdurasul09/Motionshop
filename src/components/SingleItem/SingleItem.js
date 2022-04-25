import React from 'react';
import {useDispatch} from "react-redux";
import {AddToCard} from "../../../utils/redux/actions/cardAction";

const SingleItem = ({singleItem}) => {
    const dispatch = useDispatch()
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
                    <div
                        className="w-full min-h-100 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-100 lg:aspect-none">
                        <img
                            src={singleItem?.image}
                            alt="Front of men&#039;s Basic Tee in black."
                            className="object-center object-cover lg:w-200 lg:h-200"
                        />
                    </div>
                    <div className="m-4 flex justify-between">
                        <div>
                            <h3 className="text-4xl text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" className="absolute inset-0"/>
                                    {singleItem?.description}
                                </a>
                            </h3>
                            <p className="mt-1 mb-2 text-sm text-gray-500 text-3xl">{singleItem?.name}</p>
                            <p className="text-4xl pt-4 pb-4">{singleItem?.price} com</p>
                            <div>
                                <p className="text-3xl pb-5">Таблица размеров:</p>
                                <p className="border-2 p-4 w-16">46</p>
                            </div>
                            <div className="mt-5">
                                <div className="mb-5">
                                    <button
                                        className="bg-transparent text-2xl  text-pink-700 font-semibold  py-2 px-4 border border-pink-600 hover:border-transparent rounded"
                                        onClick={() => dispatch(AddToCard(singleItem))}
                                    >
                                        Добавить в корзину
                                    </button>
                                </div>
                                <button
                                    className="bg-transparent text-2xl text-pink-700 font-semibold py-2 px-4 border border-pink-500 hover:border-transparent rounded">
                                    Купить сейчас
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;