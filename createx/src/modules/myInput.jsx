import React from "react";
import classes from "../modules/myInput.module.css"
const myInput = (children) =>
{
    return(
        <input type={children} className={classes}/>
    )
}

export default myInput;