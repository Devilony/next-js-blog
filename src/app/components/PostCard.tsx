import Link from 'next/link';
import { Post } from '../service/posts';

export default function PostCard({
  post: { id, title, summary, category, createdAt },
}: Post) {
  return (
    <li>
      <Link href={`/posts/${id}`}>
        <div>{title}</div>
        <p>{summary}</p>
        <p>{category}</p>
        <p>{createdAt}</p>
      </Link>
    </li>
  );
}
