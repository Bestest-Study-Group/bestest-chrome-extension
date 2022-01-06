import React from "react";
function CardRow(props:any){
    return(
        <div className="grid grid-rows-1 grid-flow-col px-20 py-4">
            {props.children}
        </div>
    )
}
export default CardRow