import React, { useEffect } from "react";
function TimeDisplay(props:any){
    const date:Date = new Date();
    const days:string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const month:string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    useEffect(startTime)

    function startTime() {
        const today:Date = new Date();
        let h:number = today.getHours();
        let m:number = today.getMinutes();
        let s:number = today.getSeconds();
        let minutes:string = checkTime(m);
        let seconds:string = checkTime(s);
        document.getElementById('time')!.innerHTML =  h + ":" + minutes + ":" + seconds;
        setTimeout(startTime, 1000);
    }

    function checkTime(i: number) {
        let result: string = i.toString();
        if (i < 10) {result = "0" + i.toString()};  // add zero in front of numbers < 10
        return result;
      }

    return(
        <div className="flex w-100 justify-center py-10">
            <div className="bg-rose-700 rounded-lg w-1/3 h-60 text-center py-10">
                <h1 id='time' className="text-5xl text-white"></h1>
                <h1 className="text-3xl text-white">{days[date.getDay() - 1] + ", " + month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()}</h1>
                <h1 className="text-2xl text-white">Good Evening!</h1>
            </div>
        </div>
    )
}
export default TimeDisplay