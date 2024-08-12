import Link from "next/link";
import SingleProduct from "./SingleProduct";
import pistachioCheesecake from "@/public/icons/cheesecake/pistachio-cheesecake.png";
import chocolateCheesecake from "@/public/icons/cheesecake/chocolate-cheesecake.png";
import ferreroCheesecake from "@/public/icons/cheesecake/ferrero-rocher-cheesecake.png";
import strawberryCheesecake from "@/public/icons/cheesecake/strawberry-cheesecake.png";
import Header from "./Header";

export default function Cheesecake() {
	return (
		<div className="products">
			<Header productName="Cheesecake" />
			<SingleProduct name="Pistachio Cheesecake" icon={pistachioCheesecake} price="5.0" />
			<SingleProduct name="Chocolate Cheesecake" icon={chocolateCheesecake} price="5.0" />
			<SingleProduct name="Ferrero Rocher Cheesecake" icon={ferreroCheesecake} price="5.0" />
			<SingleProduct name="Strawberry Cheesecake" icon={strawberryCheesecake} price="5.0" />
		</div>
	);
}
