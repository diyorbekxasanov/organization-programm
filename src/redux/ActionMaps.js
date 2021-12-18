import * as types from "./ActionTypes"

export function FPush(name, phone) {
    return {
        type:types.FOYDALANUVCHI_PUSH,
        name, 
        phone
    }
}
export function EditF(editName, editPhone, indexF) {
    return {
        type:types.FOYDALANUVCHI_EDIT,
        editName,
        editPhone,
        indexF
    }
}
export function DeleteF(dataDeleteF) {
    return {
        type:types.FOYDALANUVCHI_DELETE,
        dataDeleteF
    }
}
export function KassaPush(dataKassa) {
    return {
        type:types.KASSA_PUSH,
        dataKassa
    }
}
export function EditKassa(dataEditKassa, indexKassa) {
    return {
        type:types.KASSA_EDIT,
        dataEditKassa,
        indexKassa

    }
}
export function DeleteKassa(dataDeleteKassa) {
    return {
        type:types.KASSA_DELETE,
        dataDeleteKassa
    }
}
export function KirimPush(dataKirim) {    
    return {
        type:types.KIRIM_PUSH,
        dataKirim

    }
}
export function EditKirim(dataEditKirim) {
    return {
        type:types.KIRIM_EDIT,
        dataEditKirim
    }
}
export function DeleteKirim(dataDeleteKirim) {
    return {
        type:types.KIRIM_DELETE,
        dataDeleteKirim
    }
}
export function ChiqimPush(dataChiqim) {    
    return {
        type:types.CHIQIM_PUSH,
        dataChiqim

    }
}
export function EditChiqim(dataEditChiqim) {
    return {
        type:types.CHIQIM_EDIT,
        dataEditChiqim
    }
}
export function DeleteChiqim(dataDeleteChiqim) {
    return {
        type:types.CHIQIM_DELETE,
        dataDeleteChiqim
    }
}
