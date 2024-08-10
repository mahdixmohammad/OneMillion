import Link from "next/link";
import SingleProduct from "./SingleProduct";
import pistachioCheesecake from "@/public/icons/cheesecake/pistachio-cheesecake.png";
import chocolateCheesecake from "@/public/icons/cheesecake/chocolate-cheesecake.png";
import ferreroCheesecake from "@/public/icons/cheesecake/ferrero-rocher-cheesecake.png";
import strawberryCheesecake from "@/public/icons/cheesecake/strawberry-cheesecake.png";

const Cheesecake = () => {
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
				Cheesecake
			</h2>
			<SingleProduct name="Pistachio Cheesecake" icon={pistachioCheesecake} price="5.0" />
			<SingleProduct name="Chocolate Cheesecake" icon={chocolateCheesecake} price="5.0" />
			<SingleProduct name="Ferrero Rocher Cheesecake" icon={ferreroCheesecake} price="5.0" />
			<SingleProduct name="Strawberry Cheesecake" icon={strawberryCheesecake} price="5.0" />
		</div>
	);
};

export default Cheesecake;
