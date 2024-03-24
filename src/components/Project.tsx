import Image from 'next/image';

export default function Project() {
    return (
        <section>
            <div className="py-[120px] text-white">
                <div className="w-[1280px] mx-auto">
                    <div className="text-40">PROJECT</div>
                    <div className="pt-[100px] pb-[80px] flex flex-wrap justify-between">
                        <div className="mb-[100px]">
                            <div>
                                <Image src={`/images/content_01.svg`} alt="" width={624} height={396} priority />
                            </div>
                            <div>
                                <div className="mt-[24px] flex justify-between text-18">
                                    <div>신한유니버설앱 구축</div>
                                    <div className="text-gray-lighter">2023.12</div>
                                </div>
                                <div className="mt-[18px]">신한은행</div>
                                <div className="mt-[24px] flex gap-[10px]">
                                    <div className="rounded-[20px] font-14 border border-solid border-gray-lightest bg-gray-lighter px-[14px] py-[1px]">
                                        html
                                    </div>
                                    <div className="rounded-[20px] font-14 border border-solid border-gray-lightest bg-gray-lighter px-[14px] py-[1px]">
                                        css
                                    </div>
                                    <div className="rounded-[20px] font-14 border border-solid border-gray-lightest bg-gray-lighter px-[14px] py-[1px]">
                                        js
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-[100px]">
                            <div>
                                <Image src={`/images/content_01.svg`} alt="" width={624} height={396} priority />
                            </div>
                            <div>
                                <div>
                                    <div>신한유니버설앱 구축</div>
                                    <div>2023.12</div>
                                </div>
                                <div>신한은행</div>
                                <div>html</div>
                            </div>
                        </div>
                        <div className="mb-[100px]">
                            <div>
                                <Image src={`/images/content_01.svg`} alt="" width={624} height={396} priority />
                            </div>
                            <div>
                                <div>
                                    <div>신한유니버설앱 구축</div>
                                    <div>2023.12</div>
                                </div>
                                <div>신한은행</div>
                                <div>html</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// export const VISION_ITEMS = [
//     { title: 'Perspective', description: '고객사의 눈으로 관점을 바라봅니다.', image: 'vision_01' },
//     { title: 'Expertise', description: '다양한 기술력을 가진 인재들을 보유하고 있습니다.', image: 'vision_02' },
//     { title: 'Satisfaction', description: '타사보다 높은 만족도와 완성도를 갖추고 있습니다.', image: 'vision_03' },
// ];
