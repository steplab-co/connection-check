import Image from 'next/image'

export default function SlabLogo() {
    return <div className={'flex flex-row justify-center items-end'}>
        <Image
            src="/sl-logo.webp"
            alt=""
            width="50"
            height="50"/>

        <span className={'ml-2 font-bold text-5xl'}>
        Steplab
        </span>
    </div>

}