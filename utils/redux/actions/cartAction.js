import {ActionType} from "./typs";

// const calcSubPrice = (clothes) => {
//     return clothes.count * clothes.price;
// };

// const calcTotalPrice = (cart) => {
//     let sum = 0;
//     cart.products.filter((item) => {
//         sum += item.subPrice;
//     });
// };
// export const addAndDeleteProductInCart = (product) => {
//     return async (dispatch) => {
//         let cart = JSON.parse(localStorage.getItem("cart"));
//         if (!cart) {
//             cart = {
//                 products: [],
//                 totalPrice: 0,
//             };
//         }
// let checkArr = cart.products.filter((item) => {
//     return item.id === product.id;
// });
// if (checkArr.length === 0) {
//     cart.products.push(product);
// } else {
//     cart.products = cart.products.filter((item) => {
//         return item.id !== product.id;
//     });
// }
//         localStorage.setItem("cart", JSON.stringify(cart));
//         dispatch({type: ActionType.ADD_AND_DELETE_PRODUCT_IN_CART, payload: cart.products.length});
//     };
// }


// export const checkProductInCart = (id,cart) => {
//     if (!cart) {
//         cart = {
//             products: [],
//             totalPrice: 0,
//         };
//     }
//     let checkArr = cart.products.filter((item) => {
//         return item.id === id;
//     });
//     if (checkArr.length === 0) {
//         return false;
//     } else {
//         return true;
//     }
// };


export const getCart = (cart) => {
    return async (dispatch) => {
        dispatch({type: ActionType.GET_CART, payload: cart});
    }
};
//
// export const getCartInfo = (data) => {
//     return async (dispatch) => {
//         try {
//             dispatch({type: ActionType.GET_CART_INFO, payload: data})
//         } catch (e) {
//             console.log(e)
//         }
//     }
// }


export const addToCart = (el) => {
    return async (dispatch) => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            };
        }
        localStorage.setItem("cart", JSON.stringify(el));
        dispatch({type: ActionType.ADD_TO_CARD, payload: cart?.products?.id})
    }
}
