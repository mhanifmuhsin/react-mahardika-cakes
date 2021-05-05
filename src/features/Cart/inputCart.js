import { ADD_ITEM, DELETE_ITEM, RESET_ITEM } from './constants';

const initialState = [];

function reducer(state = initialState, action){
    switch(action.type){
        case ADD_ITEM:
        const id = Math.floor(Math.random() * 100);
        const newItem = {id:id, nama:action.nama, harga:action.harga, dekorasi:action.dekorasi ,bentuk:action.bentuk, ukuran:action.ukuran, topping:action.topping, jumlah:action.jumlah, total:action.total};
        return [...state, newItem]
        case DELETE_ITEM:
            return state.filter(cart => cart.id !== action.id);
        case RESET_ITEM:
            return initialState
        default:
            return state;
    }
}

export default reducer