import React, { useState } from "react";
import classes from "../MyInput/MyInput.module.css";

const MyInput = ({style, children}) =>
{
    const [inputValue, setInputValue] = useState("")
    return(
        <>
            <input type="text" className={classes.myInput} style={style} placeholder={children} onChange={event => setInputValue(event.target.value)} />
        </>
    )
}

export default MyInput;
