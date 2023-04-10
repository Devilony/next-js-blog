import React from 'react';
import MarkdownRenderer from '@/app/components/MarkdownRenderer';

type Props = {
  params: {
    slug: string;
  };
};

export default function PostPage() {
  return <MarkdownRenderer># Hello, *world*!</MarkdownRenderer>;
}
