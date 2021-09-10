import {Dispatch} from "redux"
import {Tezos} from "../m3-dal/tezos";

const initialState: AppInitialStateType = {list: []};

export type ListItemType = {
    id: string
    address: string
    balance: number
}

export type AppInitialStateType = {list: Array<ListItemType>}

export const appReducer = (state: AppInitialStateType = initialState, action: AppActionsType): AppInitialStateType => {
    switch (action.type) {
        case 'APP/ADD-ITEM':
            const newItem = {
                id: Date.now().toString(),
                ...action.item
            }
            return {...state, list: [...state.list, newItem]};
        case 'APP/REMOVE-ITEM':
            return {...state, list: state.list.filter(item => item.id !== action.id)};
        default:
            return state;
    }
}

export const addItem = (address: string, balance: number) => ({type: 'APP/ADD-ITEM', item: {address, balance}} as const);
export const removeItem = (id: string) => ({type: 'APP/REMOVE-ITEM', id} as const);

export const getBalance = (address: string) => (dispatch: Dispatch) => {
    Tezos.tz
        .getBalance(address)
        .then(balance => dispatch(addItem(address, balance.toNumber() / 1000000)))
        .catch(error => console.log(JSON.stringify(error)));
};

export type AppActionsType = ReturnType<typeof addItem> | ReturnType<typeof removeItem>