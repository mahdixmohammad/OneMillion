import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import croissant from "../../assets/icons/bakery/croissant.png";
import coffeeBun from "../../assets/icons/bakery/coffee-bun.png";
import pistachioCroissant from "../../assets/icons/bakery/pistachio-croissant.png";
import chocolateHazelnutC from "../../assets/icons/bakery/chocolate-hazelnut-croissant.png";
import brownies from "../../assets/icons/bakery/brownies.png";
import cinnabon from "../../assets/icons/bakery/cinnabon.png";
import vanillaCookie from "../../assets/icons/bakery/vanilla-cookie.png";
import chocolateCookie from "../../assets/icons/bakery/chocolate-cookie.png";
import pistachioCookie from "../../assets/icons/bakery/pistachio-cookie.png";
import lotusCookie from "../../assets/icons/bakery/lotus-cookie.png";
import crownie from "../../assets/icons/bakery/crownie.png";
import coffeeCookie from "../../assets/icons/bakery/coffee-cookie.png";

const Bakery = () => {
	return (
		<div className="products">
			<h2>
				<Link to="/menu">
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
			<SingleProduct name="Croissant" icon={croissant} description="" price="2.5" />
			<SingleProduct name="Coffee Bun" icon={coffeeBun} description="" price="5.0" />
			<SingleProduct name="Pistachio Croissant" icon={pistachioCroissant} description="" price="3.5" />
			<SingleProduct name="Chocolate Hazelnut Croissant" icon={chocolateHazelnutC} description="" price="2.5" />
			<SingleProduct name="Brownies" icon={brownies} description="" price="5.0" />
			<SingleProduct name="Cinnabon" icon={cinnabon} description="" price="3.0" />
			<SingleProduct name="Vanille Cookie" icon={vanillaCookie} description="" price="2.5" />
			<SingleProduct name="Chocolate Cookie" icon={chocolateCookie} description="" price="2.5" />
			<SingleProduct name="Pistachio Cookie" icon={pistachioCookie} description="" price="3.0" />
			<SingleProduct name="Lotus Cookie" icon={lotusCookie} description="" price="3.0" />
			<SingleProduct name="Crownie" icon={crownie} description="" price="3.0" />
			<SingleProduct name="Coffee Cookie" icon={coffeeCookie} description="" price="1.5" />
		</div>
	);
};

export default Bakery;
