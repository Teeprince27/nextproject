import { url } from "inspector";
import Link from "next/link";
import Posts from "./post";


const mockUrls  = [
	"https://wu7w74tt7j.ufs.sh/f/0RT40tHuBEhj9Wm0E9tLic8TyE0rODNhWjARU3fgasFKqwQM",
	"https://wu7w74tt7j.ufs.sh/f/0RT40tHuBEhjstQpcLA8duvA5YzELqha4in6Mp8Sl2BDKfPm",
	"https://wu7w74tt7j.ufs.sh/f/0RT40tHuBEhjRDtsTIrcODz3Y06RqiC4dwro2uUMnhmX5NFS",
	"https://wu7w74tt7j.ufs.sh/f/0RT40tHuBEhjUs8BXRwjt9OkEQNLK4i8JHCcAjqIYSDwdbrm"
]

const mockImages = mockUrls.map((url, index) => ({
	id: index + 1,
	url,
})

)

export default async function HomePage() {


	return (
		<main className="">
			<div className="flex flex-wrap gap-4">
				{
					<Posts/>
				}
				{
					[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
						<div key={image.id + "-" + index} className="w-48">
							<img src={image.url} alt="image" />
						</div>
					)
				)
				}

			</div>
		</main>
	);
}
