export const dynamic = "force-dynamic";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { url } from "inspector";import Link from "next/link";

import { db } from "~/server/db";
import { getMyImages } from "../server/queries"
import { object } from "zod";
import Image from 'next/image'


async function Images(){
	
	const images = await getMyImages();

	  return (
			<div className="flex flex-wrap justify-center gap-4">
				
				{
					images.map((image) => (
						<div key={image.id} className="flex h-48 w-48 flex-col">
							<Image 
							src={image.url} 
							style={{objectFit: "contain"}}
							alt={image.name}
							width={500}
      						height={500} 
							/>

							<div>{image.name}</div>
						</div>
					)
				)
				}

			</div>
	  )

}

export default async function HomePage() {
	
	


	return (
		<main className="">
			<SignedOut >
				<div className = "w-full h-full text-2x1 text-center">
				Please Sign In Above
				</div>
			</SignedOut>
			<SignedIn>
				<Images/>
			</SignedIn>
			
		</main>
	);
}


							// <img src={image.url} alt="image" />

