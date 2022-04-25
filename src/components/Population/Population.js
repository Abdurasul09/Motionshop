import React, {useEffect, useState} from 'react';
import Modal from "../Modal/Modal";
import SingleItem from "../SingleItem/SingleItem";
import {useDispatch} from "react-redux";
import api from "../../../api/Api";
import {addAndDeleteProductInCart, checkProductInCart, getCartInfo, addToCart} from "../../../utils/redux/actions/cartAction";
import {ActionType} from "../../../utils/redux/actions/typs";

const Population = () => {
    const [modalActive, setModalActive] = useState(false);
    const [singleItem, setSingleItem] = useState();
    const dispatch = useDispatch();

    const [productsCountInCart, setProductsCountInCart] = useState()
    const [checkProductInCartt, setCheckProductInCart] = useState(0)

    // useEffect(() => {
    //     setProductsCountInCart(JSON.parse(localStorage.getItem("cart")))
    //     dispatch(getCartInfo(productsCountInCart))
    // }, [productsCountInCart])

    useEffect(() => {
        data?.products.slice(0, 1).map((item) => {
            setSingleItem(item)
        })
        setCheckProductInCart(JSON.parse(localStorage.getItem("cart")))
    }, [data, checkProductInCartt])
    return (
        <div className="bg-white">
            <div className="py-16 sm:py-5">
                <h2 className="text-2xl font-extrabold tracking-tight  text-gray-600">Самые популярные</h2>
                <div className="mt-2 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.products.map(el => (
                        <div key={el.id}>
                            <div className="group relative" key={el.id}>
                                <div
                                    className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
                                >
                                    <img
                                        src={el.image}
                                        alt="image"
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between"
                                     onClick={() => setSingleItem(el)}
                                >
                                    <div>
                                        <h3 className="text-sm text-gray-700"
                                            onClick={() => setModalActive(true)}
                                        >
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {el.category}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{el.name}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">${el.price}</p>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="w-full bg-gray-200 hover:bg-gray-400 text-gray-800  py-2 px-4 rounded mt-4"
                                    // style={{color: checkProductInCart(el.id, checkProductInCartt) ? "red" : "blue"}}
                                    onClick={() => dispatch(addToCart(el))}
                                >
                                    korzina
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <SingleItem singleItem={singleItem}/>
            </Modal>
        </div>
    );
};

export default Population;

export async function getStaticProps() {
    const res = await api('/prod-list/')
    const products = await res
    return {props: {products}}
}

const data = {
    products: [
        {
            id: 1,
            name: 'Fit Pants',
            slug: 'fit-pants',
            category: 'Pants',
            image: '/images/pants2.jpg',
            price: 95,
            brand: 'Zara',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
        },
        {
            id: 2,
            name: 'Classic Pants',
            slug: 'classic-pants',
            category: 'Pants',
            image: '/images/women-shirt.jpeg',
            price: 75,
            brand: 'Casely',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
        },
        {
            id: 3,
            name: 'Classic Pants',
            slug: 'classic-pants',
            category: 'Pants',
            image: '/images/wom-2.jpeg',
            price: 75,
            brand: 'Casely',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
        },
        {
            id: 4,
            name: 'Classic Pants',
            slug: 'classic-pants',
            category: 'Pants',
            image: '/images/shirt.jpeg',
            price: 75,
            brand: 'Casely',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
        },
    ]
}