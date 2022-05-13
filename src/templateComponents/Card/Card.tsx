import React from "react";
function Card(props:any){
    return(
        <div className="p-4">
            <div className="bg-white rounded-lg w-56 h-56 p-4 hover:shadow-xl transition duration-200 hover:scale-125 hover:ease-in">
                {props.children}
            </div>
        </div>
    )
}
export default Card