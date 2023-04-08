import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Post, getPosts } from './service/posts';
import PostCard from './components/PostCard';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const posts = await getPosts();
  return (
    <>
      <section>banner</section>
      <section>
        <ul>
          {posts.map(({ id, title, summary, category, createdAt }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                  alt="shop"
                  width={400}
                  height={400}
                  priority
                />
                <div>{title}</div>
                <p>{summary}</p>
                <p>{category}</p>
                <p>{createdAt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
