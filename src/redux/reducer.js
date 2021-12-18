import { combineReducers } from "redux";
import * as types from "./ActionTypes"
const F_reducer = (state = {
    ArrayF: []
}, action) => {
    switch (action.type) {
        case types.FOYDALANUVCHI_PUSH:
            state.ArrayF.push({
                id: state.ArrayF.length,
                name: action.name,
                phone: action.phone,
            })


            break;
        case types.FOYDALANUVCHI_EDIT:
            state.ArrayF.splice(action.indexF, 1, {
                ...state,
                id: action.index + 1,
                name: action.editName,
                phone: action.editPhone,
            })

            break;
        case types.FOYDALANUVCHI_DELETE:
            const a = [...state.ArrayF]
            a.splice(action.dataDeleteF, 1)
            state = {
                ArrayF: a
            }
            break;
        default:
            break;
    }
    return state

}

function Kassa_reducer(state = {
    ArrayKassa: []

}, action) {
    switch (action.type) {
        case types.KASSA_PUSH:
            state.ArrayKassa.push({
                id: state.ArrayKassa.length,
                name: action.dataKassa,
            })

            break;
        case types.KASSA_EDIT:
            state.ArrayKassa.splice(action.indexKassa, 1, {
                ...state,
                id: action.indexKassa + 1,
                name: state.ArrayKassa[action.indexKAssa] = action.dataEditKassa,
            })

            break;
        case types.KASSA_DELETE:
            const a = [...state.ArrayKassa]
            a.splice(action.dataDeleteKassa, 1)
            state = {
                ArrayKassa: a
            }
            break;

        default:
            break;
    }
    return state
}

function Kirim_reducer(state = {
    ArrayKirim: []
}, action) {
    switch (action.type) {
        case types.KIRIM_PUSH:
            let a = [...state.ArrayKirim]
            a.push({
                id: state.ArrayKirim.length,
                nameKirim: action.dataKirim.nameKirim,
                kassaKirim: action.dataKirim.kassaKirim,
                miqdori: action.dataKirim.miqdori,
                date: action.dataKirim.date
            })
            state = {
                ...state,
                ArrayKirim: a
            }
            break;
        case types.KIRIM_EDIT:
            state.ArrayKirim.splice(action.dataEditKirim.editIndex, 1, {
                ...state,
                id: action.dataEditKirim.editIndex,
                nameKirim: action.dataEditKirim.editKirimName,
                kassaKirim: action.dataEditKirim.editKassaName,
                miqdori: action.dataEditKirim.editMiqdor,
                date: action.dataEditKirim.editDate
            })
            break;
        case types.KIRIM_DELETE:
            let b = state.ArrayKirim.filter(item => item.id !== action.dataDeleteKirim)
            state={
                ArrayKirim:b
            }
            break;
        default:
            break;
    }
    return state
}
function Chiqim_reducer(state = {
    ArrayChiqim: []
}, action) {
    switch (action.type) {
        case types.CHIQIM_PUSH:
            let a = [...state.ArrayChiqim]
            a.push({
                id: state.ArrayChiqim.length,
                nameChiqim: action.dataChiqim.nameChiqim,
                kassaChiqim: action.dataChiqim.kassaChiqim,
                miqdori: action.dataChiqim.miqdori,
                date: action.dataChiqim.date
            })
            state = {
                ...state,
                ArrayChiqim: a
            }
            break;
        case types.CHIQIM_EDIT:
            console.log(action)
            state.ArrayChiqim.splice(action.dataEditChiqim.editIndex, 1, {
                ...state,
                id: action.dataEditChiqim.editIndex,
                nameChiqim: action.dataEditChiqim.editChiqimName,
                kassaChiqim: action.dataEditChiqim.editKassaName,
                miqdori: action.dataEditChiqim.editMiqdor,
                date: action.dataEditChiqim.editDate
            })
            break;
        case types.CHIQIM_DELETE:
            let b = state.ArrayChiqim.filter(item => item.id !== action.dataDeleteChiqim)
            state={
                ArrayChiqim:b
            }
            break;
        default:
            break;
    }
    return state
}




const rootReducers = {
    F_reducer,
    Kassa_reducer,
    Kirim_reducer,
    Chiqim_reducer
}

export default combineReducers(rootReducers)


























// const LavozimReducer = (state = {
//     ArrayLavozim: []
// }, action) => {
//     switch (action.type) {
//         case types.LavozimPush:
//             state.ArrayLavozim.push({
//                 id: state.ArrayLavozim.length,
//                 ism: action.dataLavozim.ism,
//                 familiya: action.dataLavozim.familiya,
//                 telefon: action.dataLavozim.telefon,
//                 lavozim: action.dataLavozim.lavozim,
//                 ilmiydaraja: action.dataLavozim.ilmiydaraja
//             })

//             break;
//         case types.editLavozim:
//             state.ArrayLavozim.splice(action.dataEditLavozim.index, 1, {
//                 ...state,
//                 id: action.dataEditLavozim.index + 1,
//                 ism: state.ArrayLavozim[action.dataEditLavozim.index] = action.dataEditLavozim.ism,
//                 familiya: state.ArrayLavozim[action.dataEditLavozim.index] = action.dataEditLavozim.familiya,
//                 telefon: state.ArrayLavozim[action.dataEditLavozim.index] = action.dataEditLavozim.telefon,
//                 lavozim: state.ArrayLavozim[action.dataEditLavozim.index] = action.dataEditLavozim.lavozim,
//                 ilmiydaraja: state.ArrayLavozim[action.dataEditLavozim.index] = action.dataEditLavozim.ilmiydaraja
//             })

//             break;
//         case types.deleteLavozim:
//             const a = [...state.ArrayLavozim]
//             a.splice(action.dataDeleteLavozim, 1)
//             state = {
//                 ArrayLavozim: a
//             }
//             break;
//         default:
//             break;
//     }
//     return state

// }
// const IlmiyDarajaReducer = (state = {
//     ArrayIlmiydaraja: []
// }, action) => {
//     switch (action.type) {
//         case types.IlmiydarajaPush:
//             state.ArrayIlmiydaraja.push({
//                 id: state.ArrayIlmiydaraja.length,
//                 ism: action.datailmiy.ism,
//                 familiya: action.datailmiy.familiya,
//                 telefon: action.datailmiy.telefon,
//                 lavozim: action.datailmiy.lavozim,
//                 ilmiydaraja: action.datailmiy.ilmiydaraja
//             })

//             break;
//         case types.editIlmiydaraja:
//             state.ArrayIlmiydaraja.splice(action.dataEditilmiy.index, 1, {
//                 ...state,
//                 id: action.dataEditilmiy.index + 1,
//                 ism: state.ArrayIlmiydaraja[action.dataEditilmiy.index] = action.dataEditilmiy.ism,
//                 familiya: state.ArrayIlmiydaraja[action.dataEditilmiy.index] = action.dataEditilmiy.familiya,
//                 telefon: state.ArrayIlmiydaraja[action.dataEditilmiy.index] = action.dataEditilmiy.telefon,
//                 lavozim: state.ArrayIlmiydaraja[action.dataEditilmiy.index] = action.dataEditilmiy.lavozim,
//                 ilmiydaraja: state.ArrayIlmiydaraja[action.dataEditilmiy.index] = action.dataEditilmiy.ilmiydaraja
//             })

//             break;
//         case types.deleteIlmiydaraja:
//             const c = [...state.ArrayIlmiydaraja]
//             c.splice(action.dataDeleteilmiy, 1)
//             state = {
//                 ArrayIlmiydaraja: c
//             }
//             break;
//         default:
//             break;
//     }
//     return state

// }




