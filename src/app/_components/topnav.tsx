"use client";

import {
	ClerkProvider,
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
  } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
// import { UploadButton } from "../../utils/uploadthing";


export function TopNav(){
	return (
		<nav className="flex items-center justify-between w-full p-4 text-xl font-semibold">
				<div>
					Gallery
				</div>
				<div className= "flex flex-rol">
					<SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
						<UploadButton
							endpoint="imageUploader"
							onClientUploadComplete={(res) => {
							// Do something with the response
							console.log("Files: ", res);
							alert("Upload Completed");
							}}
							onUploadError={(error: Error) => {
							// Do something with the error.
							alert(`ERROR! ${error.message}`);
							}}
						/>
                        <UserButton />
                    </SignedIn>
				</div>
		</nav>
	)
}