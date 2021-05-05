import {SET_INPUT_BENTUK,SET_INPUT_UKURAN,SET_INPUT_TOPPING,SET_INPUT_DEKORASI, SET_INPUT_JUMLAH,SET_INPUT_TOTAL, RESET_INPUT} from './constants';

const initialState = {
    bentuk:'',
    ukuran:'',
    topping:'',
    dekorasi:'',
    jumlah:'',
    total:''
}

function input(state =initialState,action){
    switch(action.type){
        case SET_INPUT_BENTUK:{
            const {bentuk} =action;
            return{
                ...state,bentuk
            }
        }
        case SET_INPUT_UKURAN:{
            const {ukuran} = action;
            return{
                ...state,ukuran
            }
        }
        case SET_INPUT_TOPPING:{
            const {topping} = action;
            return{
                ...state,topping
            }
        }
        case SET_INPUT_DEKORASI:{
            const {dekorasi} = action;
            return{
                ...state,dekorasi
            }
        }
        case SET_INPUT_JUMLAH:{
            const {jumlah} = action;
            return{
                ...state,jumlah
            }
        }
        case SET_INPUT_TOTAL:{
            const {total} = action;
            return{
                ...state,total
            }
        }
        case RESET_INPUT:{
            return initialState;
        }
        default:
            return state;
    }
}

export default input