import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImages } from "~/server/queries";
import { Button } from "./ui/button";



export default async function  FullPageImageView(props: {id: string }) {
 
   const idAsNumber = Number(props.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");
  const image = await getImages(idAsNumber)
  const client = await clerkClient();
  const uploaderInfo = await client.users.getUser(image.userId)
  return (
      <div className="flex  w-full h-full  bg-green-500 min-w-0 ">
           <div className="flex-shrink flex justify-center items-center " >
                <img src={image.url} alt={image.name} className="flex-shrink object-contain" />

           </div>
           <div className=" w-48 flex flex-col flex-shrink-0 border-1 ">
              <div className="text-lg border-b text-center p-2">
                {image.name}
              </div>
              <div className="flex flex-col p-2">
                <span>
                   Uploaded By:
                </span>
                 <span>
                   {uploaderInfo.fullName}
                </span>
              </div>
               <div className="flex flex-col p-2">
                <span>
                   Created On:
                </span>
                 <span>
                  {new Date(image.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="flex flex-col p-2">
                <form
                  action={async () => {
                    "use server";

                    await deleteImage(idAsNumber);
                  }} 
                >
                  <Button className="curssor" type="submit" variant="destructive">
                    Delete
                  </Button>
                </form>
              </div>
           </div>

      </div>
  );

} 