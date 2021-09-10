import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from '../../m2-bll/store';
import {ListItemType} from "../../m2-bll/app-reduser";
import ListItem from "./ListItem";

const List: React.FC = () => {
    const list = useSelector<AppRootStateType, Array<ListItemType>>(state => state.app.list);

    if (!list.length) {
        return (
            <h2 style={{textAlign: 'center'}}>
                The list is currently empty :(
            </h2>
        )
    }

    return (
        <table>
            {list.map((item) =><ListItem id={item.id} address={item.address} balance={item.balance}/>)}
        </table>
    );
};

export default List;