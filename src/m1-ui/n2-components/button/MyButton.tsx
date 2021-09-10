import React, {ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import classes from './MyButton.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const MyButton: React.FC<DefaultButtonPropsType> = ({children, ...props}) => {
    return (
        <button className={classes.myBtn} {...props}>
            {children}
        </button>
    );
};

export default MyButton;