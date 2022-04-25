import {ActionType} from "../actions/typs";

const initialState = {
    productsCountInCart: 0,
    cart: [],
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_TO_CARD: {
            const findProduct = state.cart.find(el => el.id === action.payload.id)
            if (findProduct) {
                return {
                    ...state, cart: state.cart.map(el => el.id === action.payload.id ?
                        {...el, quantity: el.quantity + 1} : el)
                }
            }
            return {...state, cart: [...state.cart, {...action.payload, quantity: 1}]};
        }

        case ActionType.ADD_AND_DELETE_PRODUCT_IN_CART:
            return {...state, productsCountInCart: action.payload}
        case ActionType.GET_CART: {
            return {...state, cart: action.payload};
        }
        case ActionType.GET_CART_INFO:
            return {...state, productsCountInCart: action.payload}
        default:
            return state
    }
}