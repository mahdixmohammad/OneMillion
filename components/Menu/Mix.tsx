import Link from "next/link";
import SingleProduct from "./SingleProduct";
import mix from "@/public/icons/mix/mexico-pomegranate.png";
import icerose from "@/public/icons/mix/ice-rose.png";
import skycloud from "@/public/icons/mix/sky-cloud.png";
import flowermoon from "@/public/icons/mix/flower-moon.png";
import oceandream from "@/public/icons/mix/ocean-dream.png";
import wintermojito from "@/public/icons/mix/winter-mojito.png";
import Header from "./Header";

export default function Mix() {
	return (
		<div className="products">
			<Header productName="Mix" />
			<SingleProduct name="Mexico Pomegranate" icon={mix} price="4.0" />
			<SingleProduct name="Ice Rose" icon={icerose} price="4.0" />
			<SingleProduct name="Sky Cloud" icon={skycloud} price="4.0" />
			<SingleProduct name="Flower Moon" icon={flowermoon} price="4.5" />
			<SingleProduct name="Ocean Dream" icon={oceandream} price="4.0" />
			<SingleProduct name="Winter Mojito" icon={wintermojito} price="4.0" />
		</div>
	);
}
