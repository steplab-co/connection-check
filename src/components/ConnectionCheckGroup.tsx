'use client'

import ConnectionCheck from "@/components/ConnectionCheck";
import {connections} from '@/app/connections';
import Spinner from "@/components/Spinner";

interface ConnectionCheckGroupProps {
    started: boolean;
}

export default function ConnectionCheckGroup(props: ConnectionCheckGroupProps) {
    if (!props.started) {
        return null;
    }

    return (
        <div className={'mt-8 flex flex-col gap-y-4'}>
            {connections.map(connection =>
                <ConnectionCheck {...connection} key={connection.id}/>
            )}
        </div>
    )
}
