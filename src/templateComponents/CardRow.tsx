import React, { ReactElement, useEffect, useRef, useState } from "react";

function CardRow(props:any){
   
    const ref = useRef<any>(null)

    const scroll = (scrollOffset:number) => {
        if(ref && ref.current){
            ref.current.scrollLeft += scrollOffset;
        }
        
      };
    return(
        <div>
            <div className="grid grid-rows-1 grid-flow-col px-20 py-4 gap-10 overflow-x-hidden" ref={ref}>
                {props.children}
            </div>
            <button onClick={()=>scroll(-200)}>left</button>
            <button onClick={()=>scroll(200)}>Right</button>

        </div>
    )
}
export default CardRow