import Product from "./Product";
import SingleProduct from "./SingleProduct";
import soft from "@/public/icons/icecream/soft.png";
import affogato from "@/public/icons/icecream/affogato.png";
import Header from "./Header";

export default function IceCream() {
	const softTypes = {
		"Soft Classic": "2.0",
		"Soft Espresso": "3.0",
		"Soft Croissant": "5.0",
	};

	return (
		<div className="products">
			<Header productName="Ice Cream" />
			<Product name="Soft" icon={soft} types={softTypes} />
			<SingleProduct name="Affogato" icon={affogato} price="3.5" />
		</div>
	);
}
