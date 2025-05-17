import { getImages } from "~/server/queries";



export default async function FullPageImageView(props: {id: number }) {
 
  const image = await getImages(props.id)
  return (
        <img src={image.url} alt={image.name} className="w-96" />

  );

} 