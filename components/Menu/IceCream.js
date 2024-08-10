import Link from "next/link";
import Product from "./Product";
import SingleProduct from "./SingleProduct";
import soft from "@/public/icons/icecream/soft.png";
import affogato from "@/public/icons/icecream/affogato.png";

const IceCream = () => {
	const softTypes = {
		"Soft Classic": "2.0",
		"Soft Espresso": "3.0",
		"Soft Croissant": "5.0",
	};

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
				Ice Cream
			</h2>
			<Product name="Soft" icon={soft} types={softTypes} />
			<SingleProduct name="Affogato" icon={affogato} price="3.5" />
		</div>
	);
};

export default IceCream;
