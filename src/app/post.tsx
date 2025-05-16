import { db } from "~/server/db";
export default async function Posts() {
  const images = await db.query.images.findMany();
  return (
    <ul>
      {images.map(image => (
        <li key={image.id}>{image.name}</li>
      ))}
    </ul>
  );
}