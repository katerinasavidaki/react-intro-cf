import CounterButton from "./CounterButton.tsx";
// import {useState} from "react";
import {useAdvancedCounter} from "../hooks/useAdvancedCounter.ts";



const CounterAdvancedWithCustomHook = () => {


    // custom hook function
    const { count, lastAction, time, increase, decrease, reset } = useAdvancedCounter();


    return(
        <>
            <div className="space-y-4 text-2xl pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increase} label={"Increase"}/>
                    <CounterButton onClick={decrease} disabled={count === 0} label="Decrease"/>
                    <CounterButton onClick={reset} disabled={count === 0} label="Reset" addClass="bg-cf-dark-red"/>
                </div>
            </div>
            <p className="pt-8 text-center">
                Last change: <strong>{lastAction || "-"}</strong> at <strong>{time || "-"}</strong>
            </p>
        </>
    )
}

export default CounterAdvancedWithCustomHook;