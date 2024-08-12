import Link from "next/link";

export default function Header({ productName }: { productName: string }) {
	return (
		<h2>
			<Link href="/menu">
				<div className="go-back-container">
					<svg
						data-slot="icon"
						fill="none"
						stroke-width="1.5"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						className="go-back-arrow"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"></path>
					</svg>
					Back
				</div>
			</Link>
			{productName}
		</h2>
	);
}
