'use client'

import SlabLogo from "@/components/SlabLogo";
import StartButton from "@/components/StartButton";
import ConnectionCheck from "@/components/ConnectionCheck";
import {useState} from 'react';
import ConnectionCheckGroup from "@/components/ConnectionCheckGroup";
import Spinner from "@/components/Spinner";


export default function Home() {
    const [checkStarted, setCheckStarted] = useState(false);

    function startCheck() {
        console.log('check status', checkStarted)
        setCheckStarted(true);
        console.log('check status', checkStarted)
    }

    return (
        <main className="mx-auto my-20 bg-white rounded shadow-lg p-8 max-w-md">
            <SlabLogo/>
            <div className={'mt-4'}>
                <h1 className={'text-3xl text-center'}>Connection Check</h1>
            </div>

            <div>
                <StartButton onClick={startCheck} shouldShow={!checkStarted}/>
            </div>

            <ConnectionCheckGroup started={checkStarted} />
        </main>
    )
}
