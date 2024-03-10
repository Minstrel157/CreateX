import React, { Children } from "react";
import classes from "../MyOrangeButtom/MyOrangeButtom.module.css"

const MyOrangeButtom = ({style, children, typeOfButton}) =>
{
    return(
        <>
            <button className={classes.myOrangeButton} style={style} type={typeOfButton}>{children}</button>
        </>
    )
}

export default MyOrangeButtom;