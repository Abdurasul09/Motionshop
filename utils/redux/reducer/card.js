// import {ActionType} from "../actions/typs";
//
// const initialState = {
//     card: [],
//     productsCountInCart: 0
// }
//
// export const cardReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ActionType.ADD_AND_DELETE_PRODUCT_IN_CART:
//              return  {...state, productsCountInCart: action.payload}
//
//         case ActionType.ADD_TO_CARD: {
//             const findProduct = state.card.find(el => el.id === action.payload.id)
//             if (findProduct) {
//                 return {
//                     ...state, card: state.card.map(el => el.id === action.payload.id ?
//                         {...el, quantity: el.quantity + 1} : el)
//                 }
//             }
//             return {...state, card: [...state.card, {...action.payload, quantity: 1}]};
//         }
//
//
//         case ActionType.DELETE_FROM_CARD: {
//             return {...state, cart: state.cart.filter((el) => el.id !== action.payload)};
//         }
//         case ActionType.DEC_FROM_CART: {
//             if (state.card [action.payload].quantity > 0)
//                 return {
//                     ...state, card: state.card.map((el, id) => id === action.payload ?
//                         {...el, quantity: el.quantity - 1} : el)
//                 }
//         }
//
//         case ActionType.GET_CART: {
//             return {...state, cart: action.payload};
//         }
//         default:
//             return state
//     }
// }


// import {ActionType} from "../actions/typs";
//
// const initialState = {
//     productsCountInCart: 0,
//     cart: null
// }
//
// export const CartReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ActionType.ADD_AND_DELETE_PRODUCT_IN_CART:
//             return {...state, productsCountInCart: action.payload}
//         case ActionType.GET_CART: {
//             return {...state, cart: action.payload};
//         }
//         case ActionType.GET_CART_INFO:
//             return {...state, productsCountInCart: action.payload}
//         default:
//             return state
//     }
// }