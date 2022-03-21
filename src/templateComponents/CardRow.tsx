import React, { ReactElement, useEffect, useRef, useState } from "react";

function CardRow(props: any) {

    const ref = useRef<any>(null)

    const scroll = (scroll: number) => {
        if (ref && ref.current) {
            let totalScroll = 0
            let scrollAmount = scroll / 20
            let slideTimer = setInterval(function () {
                ref.current.scrollLeft += scrollAmount;
                totalScroll += scrollAmount;
                if (Math.abs(totalScroll) >= Math.abs(scroll)) {
                    window.clearInterval(slideTimer);
                }
            }, 25);
        }

    };
    return (
        <div className="h-64">
            <div className="h-full grid grid-rows-1 grid-flow-col px-20 py-4 gap-10 overflow-x-hidden" ref={ref}>
                {props.children}
            </div>
            <button
                className="bg-white w-20 h-20 rounded-full shadow-md relative bottom-2/3 ml-2"
                onClick={() => scroll(-600)}>
                left
            </button>
            <button
                className="bg-white w-20 h-20 rounded-full shadow-md relative bottom-2/3 float-right mr-2"
                onClick={() => scroll(600)}
                >
                right
            </button>

        </div>
    )
}
export default CardRow