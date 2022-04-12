import React from 'react'
function CardBody (props:any){
    return(
        <div className='p-4 text-center'>
            {props.children}

        </div>
    )

}
export default CardBody