'use client'
import {useState} from "react";
import Spinner from "@/components/Spinner";

interface ConnectionCheckProps {
    id: number;
    name: string;
    url: string;
}


export default function ConnectionCheck(props: ConnectionCheckProps) {
    const [responseCode, setResponseCode] = useState(0);

    fetch(props.url).then(response => {
        setResponseCode(response.status)
    // })

    }).catch(error => {
        // console.error(error)
        setResponseCode(0)

    })


    return <div className={'ml-2 flex justify-start gap-x-3 items-center'}>
        <div className={'text-3xl'}>
            {responseCode === 200 && '✅'}
            {(responseCode && responseCode) > 399 && '❌'}
            {(responseCode === 0) && <Spinner/>}
        </div>
        <div className={'flex flex-col'}>
            <div className={'text-xl'}>{props.name}</div>
            <div className={'text-sm'}>{props.url}</div>
        </div>


    </div>

}