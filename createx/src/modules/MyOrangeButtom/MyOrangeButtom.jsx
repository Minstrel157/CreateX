import React, { Children } from "react";
import classes from "../MyOrangeButtom/MyOrangeButtom.module.css"

const MyOrangeButtom = ({style, children}) =>
{
    return(
        <>
            <button className={classes.myOrangeButton} style={style}>{children}</button>
        </>
    )
}

export default MyOrangeButtom;