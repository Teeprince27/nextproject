import { getImages } from "~/server/queries";
import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page-view";




export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  

  return (
    <Modal >
      <FullPageImageView id={photoId} />

    </Modal>
  );
}
