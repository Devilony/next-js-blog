import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <section className="flex flex-col items-center">
        <Link href="/about" className="hover:scale-110 transition-all">
          <Image
            className="rounded-full"
            src="/images/milk.png"
            alt="profile"
            width={180}
            height={180}
          />
        </Link>
        <h1 className="m-2 text-lg font-semibold">Hello, I'm Devilony</h1>
        <p className="text-sm">
          프론트엔드 하고 싶은 C언어로 밥 벌어먹는 개발자
        </p>
        <button className="p-2 bg-yellow-500 rounded-full text-white hover:scale-105 hover:brightness-110 font-semibold mt-2">
          <Link href="/contact">Contact me!</Link>
        </button>
      </section>
      <section className="bg-gray-100 flex flex-col items-center p-5 mx-10 mt-10 text-2xl font-bold">
        <h1>Who am I?</h1>
        <p className="text-sm font-normal">C언어로 밥벌이를 하는 개발자</p>
        <p className="text-sm font-normal">
          그러나 프론트엔드가 격하게 하고 싶은 개발자
        </p>
        <h1 className="mt-5">Career</h1>
        <p className="text-sm font-normal">일본 글로벌 인턴십 (2019)</p>
        <p className="text-sm font-normal">SSAFY (2020)</p>
        <p className="text-sm font-normal">
          삼성전자 5G MAC Scheduler 개발(2021~)
        </p>
        <h1 className="mt-5">Skills</h1>
        <p className="text-sm font-normal">React, HTML, JS, CSS</p>
        <p className="text-sm font-normal">Python, C</p>
      </section>
    </>
  );
}
