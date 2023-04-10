import Image from 'next/image';
import { Inter } from 'next/font/google';
import { getPosts } from './service/posts';
import PostCard from './components/PostCard';
import Link from 'next/link';
import CarouselPosts from './components/CarouselPosts';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const posts = await getPosts();
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
      <section className="mt-10">
        <ul className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      </section>
      <CarouselPosts />
    </>
  );
}
