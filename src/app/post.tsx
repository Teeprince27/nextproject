
import { db } from "~/server/db";
export default async function Posts() {
  const posts = await db.query.posts.findMany();
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
}