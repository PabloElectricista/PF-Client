import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
  },
};
function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      // add to cart - newItem ya viene con el atributo quantity actualizado
      const newItem = action.payload;
      // console.log('newItem: ', newItem);
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      )
      // console.log('existItem: ', existItem)
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
          item._id === existItem._id ? newItem : item
        )
        // si existItem is null -> significa que newItem es un nuevo producto en el cart
        : [...state.cart.cartItems, newItem];
      // console.log('cartItems: ', cartItems)
      return {...state, cart: {...state.cart, cartItems},};
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children} </Store.Provider>;
}