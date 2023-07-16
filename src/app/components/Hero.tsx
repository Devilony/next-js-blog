import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col items-center">
      <Link href="/about" className="hover:scale-110 transition-all">
        <Image
          className="rounded-full"
          src="/images/milk.webp"
          alt="profile"
          width={180}
          height={180}
        />
      </Link>
      <h1 className="m-2 text-lg font-semibold">Hello, I&apos;m Devilony</h1>
      <p className="text-sm">프론트엔드 하고 싶은 C언어로 밥 벌어먹는 개발자</p>
      <button className="p-2 bg-yellow-500 rounded-full text-white hover:scale-105 hover:brightness-110 font-semibold mt-2">
        <Link href="/contact">Contact me!</Link>
      </button>
    </section>
  );
}
