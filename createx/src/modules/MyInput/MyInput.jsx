import React from "react";
import classes from "../MyInput/MyInput.module.css";

const MyInput = ({style, children}) =>
{
    return(
        <>
            <input type="text" className={classes.myInput} style={style} placeholder={children} />
        </>
    )
}

export default MyInput;
