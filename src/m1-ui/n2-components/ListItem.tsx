import React from 'react';
import MyButton from './button/MyButton';
import {ListItemType, removeItem} from "../../m2-bll/app-reduser";
import {useDispatch} from "react-redux";

const ListItem: React.FC<ListItemType> = ({id, address, balance}) => {
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(removeItem(id));
    }

    return (
        <tr>
            <td>{address}</td>
            <td style={{textAlign: "center"}}>{balance} ꜩ</td>
            <td style={{textAlign: "center", padding: 0}}><MyButton onClick={deleteHandler} className="item__btn">X</MyButton></td>
        </tr>
    );
};

export default ListItem;