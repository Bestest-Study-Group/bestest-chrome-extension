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
                className="bg-white w-20 h-20 rounded-full shadow-md relative bottom-2/3 ml-2 float-left flex justify-center items-center"
                onClick={() => scroll(-600)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                className="bg-white w-20 h-20 rounded-full shadow-md relative bottom-2/3 float-right mr-2 flex justify-center items-center"
                onClick={() => scroll(600)}
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

        </div>
    )
}
export default CardRow