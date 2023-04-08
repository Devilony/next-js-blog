import { promises } from 'fs';
import path from 'path';

export type Post = {
  id: number;
  title: string;
  summary: string;
  category: string;
  description: string;
  createdAt: string;
};

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await promises.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}
