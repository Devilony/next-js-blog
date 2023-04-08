import Link from 'next/link';

export default function PostCard({
  post: { id, title, summary, category, createdAt },
}) {
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
