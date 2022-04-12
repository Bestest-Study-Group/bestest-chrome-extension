import React from "react";
function Card(props:any){
    return(
        <div className="bg-white rounded-lg w-56 h-full p-4 hover:shadow-xl transition duration-300 hover:scale-125 hover:ease-in">
            {props.children}
        </div>
    )
}
export default Card