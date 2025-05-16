
import {
	ClerkProvider,
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
  } from '@clerk/nextjs'

export function TopNav(){
	return (
		<nav className="flex items-center justify-between w-full p-4 text-xl font-semibold">
				<div>
					Gallery
				</div>
				<div>
					<SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
				</div>
		</nav>
	)
}