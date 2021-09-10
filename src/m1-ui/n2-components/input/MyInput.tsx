import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import classes from './MyInput.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const MyInput = React.forwardRef<HTMLInputElement, DefaultInputPropsType>((props, ref) => {
    return (
        <input ref={ref} className={classes.myInput} {...props}/>
    );
});

export default MyInput;