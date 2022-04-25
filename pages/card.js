import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Layout from "../src/components/Layout";
import {getCart} from "../utils/redux/actions/cartAction";

const Card = () => {
    const {cart} = useSelector(state => state.cart)
    console.log(cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCart(JSON.parse(localStorage.getItem("cart"))))
    }, [])

    return (
        <Layout>
            <div>
                <h1 className='text-3xl text-gray-700 py-3'>Корзина</h1>
                {cart.length === 0 ? (
                    <h1>Корзина пуста!</h1>
                ) : (
                    <div
                        className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 justify-between items-start">
                        <div>
                            {/*{cart.products?.map((item, id) => (*/}
                                <table className="table-auto w-full" >
                                    <tbody>
                                    <tr className="flex items-start border-b-2">
                                        <td className="py-4 px4 w-full">
                                            <div
                                                className='className="w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-50 lg:aspect-none"'>
                                                <img
                                                    src={cart.image}
                                                    className="w-full h-full object-center object-cover lg:w-100 lg:h-100"
                                                    alt="image"
                                                />
                                            </div>
                                        </td>
                                        <td className='py-4 px-8 w-full h-64 flex flex-col justify-between'>
                                            <div className="flex flex-col">
                                                <div>
                                                    <h3 className="text-sm text-gray-700">
                                                        <span aria-hidden="true" className="inset-0"/>
                                                        {cart.category}
                                                    </h3>
                                                    {/*<p className="mt-1 text-sm text-gray-500">{item.name}</p>*/}
                                                </div>
                                                {/*<p className="text-sm font-medium text-gray-900">${item.price}</p>*/}
                                            </div>
                                            <div className='flex items-center'>
                                                <span className="text-sm">Размер:</span>
                                                <span className="text-sm p-2">46</span>
                                            </div>
                                        </td>
                                        <td className='py-4 px-8 w-full'>
                                            <div className="flex items-center">
                                                <span
                                                    className='text-xl border px-2 rounded-full flex items-center justify-center border-indigo-700 cursor-pointer'
                                                    // onClick={() => dispatch(DecFromCart(id))}
                                                >
                                                    -
                                                </span>
                                                <span className='text-xl p-2'>{cart.quantity}</span>
                                                <span
                                                    className='text-xl border px-2 rounded-full flex items-center justify-center border-indigo-700 cursor-pointer'
                                                    // onClick={() => dispatch(IncToCart(item))}
                                                >
                                                    +
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <svg
                                                className="h-6 w-6 text-gray-500 cursor-pointer my-4 hover:text-red-500"
                                                width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                                                stroke="currentColor" fill="none" strokeLinecap="round"
                                                strokeLinejoin="round"
                                                // onClick={() => (dispatch(DeleteFromCart(item)))}
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z"/>
                                                <line x1="18" y1="6" x2="6" y2="18"/>
                                                <line x1="6" y1="6" x2="18" y2="18"/>
                                            </svg>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            {/*))}*/}
                        </div>
                        <div>
                            <table className="table-auto w-3/4 bg-gray-100 rounded-lg">
                                <thead>
                                <tr>
                                    <th className="flex justify-start py-2  text-gray-600 text-xl px-2">Итог заказа</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className='border-b-2 flex items-center justify-between'>
                                    <td className="px-4 py-2">Промежуточный итог</td>
                                    {/*<td className="px-4 py-2">*/}
                                    {/*    ({cart.reduce((a, c)=> a + c.quantity, 0)} {''}*/}
                                    {/*    items) : $ {''}*/}
                                    {/*    {cart.reduce((a, c)=> a + c.quantity * c.price, 0).toFixed(2)}*/}
                                    {/*</td>*/}
                                </tr>
                                <tr className='border-b-2 flex items-center justify-between'>
                                    <td className="px-4 py-2">Доставки</td>
                                    <td className="px-4 py-2">$678</td>
                                </tr>
                                <tr className='border-b-2 flex items-center justify-between'>
                                    <td className="px-4 py-2">Скидка</td>
                                    <td className="px-4 py-2">$678</td>
                                </tr>
                                <tr>
                                    <button
                                        type="button"
                                        className="mt-4 mb-0 w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                                    >
                                        Проверить
                                    </button>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Card;