import React from 'react'
function CardImage (props:{src:string}){
    return(
        <div className="flex justify-center py-4">
            <img className="w-10"
                src={props.src}>
            </img>
        </div>
    )
}
export default CardImage