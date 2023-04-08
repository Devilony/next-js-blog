import Image from 'next/image';
import { Inter } from 'next/font/google';
import { getPosts } from './service/posts';
import PostCard from './components/PostCard';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const posts = await getPosts();
  return (
    <>
      <section>banner</section>
      <section>
        <ul>
          {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
        </ul>
      </section>
    </>
  );
}
