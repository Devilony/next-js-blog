import Link from 'next/link';
import { Post } from '../service/posts';
import Image from 'next/image';

export default function PostCard({
  post: { id, title, summary, category, createdAt, description },
}: Post) {
  return (
    <li className="rounded-md overflow-hidden shadow-md hover:scale-105 transition-all md:m-0 sm:m-4">
      <Link href={`/posts/${id}`}>
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="profile"
          width={1000}
          height={400}
        />
        <div className="p-4 flex flex-col items-center">
          <p className="self-end">{createdAt}</p>
          <div className="font-semibold text-xl">{title}</div>
          <p className="text-gray-400">{summary}</p>
          <p className="text-sm p-2 bg-blue-300 text-white rounded-full">
            {category}
          </p>
        </div>
      </Link>
    </li>
  );
}
