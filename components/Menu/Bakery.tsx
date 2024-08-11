import Link from "next/link";
import SingleProduct from "./SingleProduct";
import croissant from "@/public/icons/bakery/croissant.png";
import coffeeBun from "@/public/icons/bakery/coffee-bun.png";
import pistachioCroissant from "@/public/icons/bakery/pistachio-croissant.png";
import chocolateHazelnutC from "@/public/icons/bakery/chocolate-hazelnut-croissant.png";
import brownies from "@/public/icons/bakery/brownies.png";
import cinnabon from "@/public/icons/bakery/cinnabon.png";
import vanillaCookie from "@/public/icons/bakery/vanilla-cookie.png";
import chocolateCookie from "@/public/icons/bakery/chocolate-cookie.png";
import pistachioCookie from "@/public/icons/bakery/pistachio-cookie.png";
import lotusCookie from "@/public/icons/bakery/lotus-cookie.png";
import crownie from "@/public/icons/bakery/crownie.png";
import coffeeCookie from "@/public/icons/bakery/coffee-cookie.png";

const Bakery = () => {
	return (
		<div className="products">
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
						Go Back
					</div>
				</Link>
				Bakery
			</h2>
			<SingleProduct name="Croissant" icon={croissant} price="2.5" />
			<SingleProduct name="Coffee Bun" icon={coffeeBun} price="5.0" />
			<SingleProduct name="Pistachio Croissant" icon={pistachioCroissant} price="3.5" />
			<SingleProduct name="Chocolate Hazelnut Croissant" icon={chocolateHazelnutC} price="2.5" />
			<SingleProduct name="Brownies" icon={brownies} price="5.0" />
			<SingleProduct name="Cinnabon" icon={cinnabon} price="3.0" />
			<SingleProduct name="Vanille Cookie" icon={vanillaCookie} price="2.5" />
			<SingleProduct name="Chocolate Cookie" icon={chocolateCookie} price="2.5" />
			<SingleProduct name="Pistachio Cookie" icon={pistachioCookie} price="3.0" />
			<SingleProduct name="Lotus Cookie" icon={lotusCookie} price="3.0" />
			<SingleProduct name="Crownie" icon={crownie} price="3.0" />
			<SingleProduct name="Coffee Cookie" icon={coffeeCookie} price="1.5" />
		</div>
	);
};

export default Bakery;
