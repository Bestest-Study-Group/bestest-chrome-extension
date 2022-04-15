import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons"
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
        <div className="h-80">
            <div className="h-full grid grid-rows-1 grid-flow-col px-20 py-4 gap-8 overflow-x-hidden" ref={ref}>
                {props.children}
            </div>
            <button
                className="bg-gray-500 w-16 h-16 rounded-full shadow-md relative bottom-2/3 ml-3 hover:scale-125 hover:ease-in duration-200"
                onClick={() => scroll(-600)}>
                <FontAwesomeIcon className="text-gray-100" icon={faChevronLeft} />
            </button>
            <button
                className="bg-gray-500 w-16 h-16 rounded-full shadow-md relative bottom-2/3 float-right mr-3 hover:scale-125 hover:ease-in duration-200"
                onClick={() => scroll(600)}
                >
                <FontAwesomeIcon className="text-gray-100" icon={faChevronRight} />
            </button>

        </div>
    )
}
export default CardRow