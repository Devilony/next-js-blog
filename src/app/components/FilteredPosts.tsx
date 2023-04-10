'use client';
import React, { useState } from 'react';
import PostCard from './PostCard';

export default function FilteredPosts({ posts }) {
  const [datas, setDatas] = useState(posts);
  const set = new Set();
  posts.forEach((post) => set.add(post.category));
  const categories = Array.from(set);
  const handleClick = (e) => {
    if (e.target.innerText === 'All Posts') {
      setDatas(posts);
    } else {
      setDatas(posts.filter((post) => post.category === e.target.innerText));
    }
  };
  return (
    <section className="flex mt-10">
      <section>
        <ul className="grid grid-cols-3 gap-4">
          {datas.map((data) => (
            <PostCard key={data.id} post={data} />
          ))}
        </ul>
      </section>
      <div className="ml-20">
        <div className="mb-2 text-xl font-semibold">Category</div>
        <p className="cursor-pointer" onClick={handleClick}>
          All Posts
        </p>
        {categories.map((category) => (
          <p className="cursor-pointer" key={category} onClick={handleClick}>
            {category}
          </p>
        ))}
      </div>
    </section>
  );
}
