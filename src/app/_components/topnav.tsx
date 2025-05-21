"use client";

import {
	ClerkProvider,
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
  } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";

// import { UploadButton } from "../../utils/uploadthing";


export function TopNav(){

	return (
		<nav className="flex items-center justify-between w-full border-b p-4 text-xl font-semibold ">
				<div>
					Gallery
				</div>
				<div className="flex flex-row gap-4 items-center">
					<SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
						<SimpleUploadButton />
                        <UserButton />
                    </SignedIn>
				</div>
		</nav>
	);
}