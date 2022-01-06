import React from "react";
function Card(props:any){
    return(
        <div className="bg-white rounded-lg w-60 h-60 p-4 hover:shadow-xl transition duration-500">
            {props.children}
        </div>
    )
}
export default Card