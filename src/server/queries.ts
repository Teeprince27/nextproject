import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";



// const images = await getImages(userId);


// Utility function
export async function getMyImages() {

    const user  = await auth();

    if (!user.userId) throw new Error("Unauthorized");

    const images = await db.query.images.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, { desc }) => desc(model.id),
    });

  return images;
}