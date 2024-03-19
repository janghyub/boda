import Image from 'next/image';

export default function Home() {
    return (
        <section className="h-[100vh] flex flex-col items-center justify-center text-white relative ">
            <div className="absolute flex flex-col justify-center items-center mx-auto transform z-4">
                <span className="text-64">Creative Development Company</span>
                <span className="text-20">The BODA Lab</span>
            </div>
            <Image
                className="absolute right-10 transform z-2"
                src="/images/circle_01.svg"
                alt="right circle image"
                width={737}
                height={737}
                priority
            />
            <Image
                className="absolute left-30 transform z-3"
                src="/images/circle_02.svg"
                alt="center circle image"
                width={415}
                height={415}
                priority
            />
            <Image
                className="absolute left-10 transform z-1"
                src="/images/circle_03.svg"
                alt="left circle image"
                width={378}
                height={378}
                priority
            />
            <a href="#id-about">
                <Image
                    className="absolute bottom-0 z-10"
                    src="/images/scroll_down.svg"
                    alt="scroll down image"
                    width={72}
                    height={72}
                    priority
                />
            </a>
        </section>
    );
}
