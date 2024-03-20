import Image from 'next/image';

export default function About() {
    return (
        <section className="flex">
            <div className="flex-1 flex flex-col text-white ml-[321px] mt-[120px]">
                <span className="text-40">ABOUT US</span>
                <span className="text-16 leading-26 ml-[80px] mt-[109px]">
                    The BODA LAB은 디지털시대에 발맞춰 클라이언트의 비즈니스를 위한
                    <br />
                    다양한 기술적 노하우로 완성된 경험을 제공합니다.
                    <br />
                    우리의 활동은 웹, 앱, 모바일을 넘나들며 세상의 모든 비즈니스 활동에 강한 영향력을 전달합니다.
                </span>
            </div>
            <div className="flex-1 overflow-hidden relative">
            <Image src="/images/content_01.svg" alt="content_01" width={1152} height={769} priority />
            <span className='text-white text-40 absolute bottom-0 left-0 w-full whitespace-nowrap'>Creative Development Company BODA.Lab</span>
            </div>
        </section>
    );
}
