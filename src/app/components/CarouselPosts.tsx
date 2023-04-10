import { getPosts } from '../service/posts';
import MultiCarousel from './MultiCarousel';
import PostCard from './PostCard';

export default async function CarouselPosts() {
  const posts = await getPosts();
  return (
    <section className="mt-10 mb-5">
      <h2 className="text-xl font-bold">You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
