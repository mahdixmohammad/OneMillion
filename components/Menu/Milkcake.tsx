import Link from "next/link";
import SingleProduct from "./SingleProduct";
import caramelCake from "@/public/icons/milkcake/caramel-cake.png";
import pistachioCake from "@/public/icons/milkcake/pistachio-cake.png";
import tiramisuCake from "@/public/icons/milkcake/tiramisu-cake.png";
import Header from "./Header";

export default function Milkcake() {
	return (
		<div className="products">
			<Header productName="Milkcake" />
			<SingleProduct name="Caramel Cake" icon={caramelCake} price="3.0" />
			<SingleProduct name="Pistachio Cake" icon={pistachioCake} price="3.0" />
			<SingleProduct name="Caramel Cake" icon={tiramisuCake} price="3.0" />
		</div>
	);
}
