import { getImages } from "~/server/queries";

import FullPageImageView from "~/components/full-image-page-view";
import { Modal } from "~/app/@modal/(.)img/[id]/modal";




export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
    const idAsNumber = Number(photoId);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  return (
   
      <FullPageImageView id={idAsNumber} />
    
  );
}
