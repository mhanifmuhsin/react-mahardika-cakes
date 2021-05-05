import { ADD_ITEM, DELETE_ITEM, RESET_ITEM, SET_INPUT_BENTUK, RESET_INPUT, SET_INPUT_DEKORASI, SET_INPUT_UKURAN, SET_INPUT_TOPPING, SET_INPUT_JUMLAH,SET_INPUT_TOTAL } from './constants'


export function addItem(nama, harga, dekorasi, bentuk, ukuran, topping, jumlah,total) {
    return {
        type: ADD_ITEM,
        nama,
        harga,
        dekorasi,
        bentuk,
        ukuran,
        topping,
        jumlah,
        total
    }
}

export function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        id
    }
}

export function resetCart() {
    return {
        type: RESET_ITEM
    }
}

export function resetInput() {
    return {
        type: RESET_INPUT
    }
}

export function setInputBentuk(bentuk) {
    return {
        type: SET_INPUT_BENTUK,
        bentuk
    }
}

export function setInputDekorasi(dekorasi) {
    return {
        type: SET_INPUT_DEKORASI,
        dekorasi
    }
}

export function setInputUkuran(ukuran) {
    return {
        type: SET_INPUT_UKURAN,
        ukuran
    }
}

export function setInputTopping(topping) {
    return {
        type: SET_INPUT_TOPPING,
        topping
    }
}

export function setInputJumlah(jumlah) {
    return {
        type: SET_INPUT_JUMLAH,
        jumlah
    }
}

export function setInputTotal(total) {
    return {
        type: SET_INPUT_TOTAL,
        total
    }
}