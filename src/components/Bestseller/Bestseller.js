import React, {useEffect, useState} from 'react';
import Modal from "../Modal/Modal";
import api from "../../../api/Api";
import SingleItem from "../SingleItem/SingleItem";
import {AddToCart} from "../../../utils/redux/actions/cardAction";
import {useDispatch} from "react-redux";

const Bestseller = () => {
    const [modalActive, setModalActive] = useState(false)
    const [singleItem, setSingleItem] = useState()
    const dispatch = useDispatch()
    useEffect(() => {
        data?.products.slice(0, 1).map((item) => {
            setSingleItem(item)
        })
    }, [data])
    return (
        <div className="bg-white">
            <div className="sm:py-5 py-16 sm:py-5">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-600">Хит продаж</h2>
                <div className="mt-2 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.products.map((el, idx) => (
                        <div key={el.id}>
                            <div className="group relative">
                                <div
                                    className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
                                >
                                    <img
                                        src={el.image}
                                        alt="Front of men&#039;s Basic Tee in black."
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
                                <div>
                                    <button
                                        className="w-full bg-gray-200 hover:bg-gray-400 text-gray-800  py-2 px-4 rounded mt-4"
                                        onClick={() => dispatch(AddToCart(el))}
                                    >
                                        Добавить в корзину
                                    </button>
                                </div>
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

export default Bestseller;


export async function getStaticProps() {
    const res = await api('rec-list/')
    const products = await res.data
    return {props: {products}}
}

const data = {
    products: [
        {
            id: 1,
            name: 'Free Shirt',
            category: 'Shirts',
            image: '/images/shirt1.jpg',
            isFeatured: true,
            featuredImage: '/images/banner1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular shirt',
        },
        {
            id: 2,
            name: 'Fit Shirt',
            slug: 'fit-shirt',
            category: 'Shirts',
            image: '/images/shirt2.jpg',
            isFeatured: true,
            featuredImage: '/images/banner2.jpg',
            price: 80,
            brand: 'Adidas',
            rating: 4.2,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular shirt',
        },
        {
            id: 3,
            name: 'Slim Shirt',
            slug: 'slim-shirt',
            category: 'Shirts',
            image: '/images/shirt3.jpg',
            price: 90,
            brand: 'Raymond',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular shirt',
        },
        {
            id: 4,
            name: 'Golf Pants',
            slug: 'golf-pants',
            category: 'Pants',
            image: '/images/pants1.jpg',
            price: 90,
            brand: 'Oliver',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'Smart looking pants',
        },
    ]
}