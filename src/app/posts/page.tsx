import { Inter } from 'next/font/google';
import { getPosts } from '../service/posts';
import FilteredPosts from '../components/FilteredPosts';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const posts = await getPosts();
  return <FilteredPosts posts={posts} />;
}
