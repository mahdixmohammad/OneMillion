import Link from "next/link";
import SingleProduct from "./SingleProduct";
import strawberry from "@/public/icons/bubbles/strawberry-bubbles.png";
import pineapple from "@/public/icons/bubbles/pineapple-bubbles.png";
import orange from "@/public/icons/bubbles/orange-bubbles.png";
import kiwi from "@/public/icons/bubbles/kiwi-bubbles.png";
import blues from "@/public/icons/bubbles/blues-bubbles.png";
import mojito from "@/public/icons/bubbles/mojito-bubbles.png";
import Header from "./Header";

export default function Bubbles() {
	return (
		<div className="products">
			<Header productName="Bubbles" />
			<SingleProduct name="Strawberry" icon={strawberry} price="4.0" />
			<SingleProduct name="Pineapple" icon={pineapple} price="4.0" />
			<SingleProduct name="Orange" icon={orange} price="4.0" />
			<SingleProduct name="Kiwi" icon={kiwi} price="4.0" />
			<SingleProduct name="Blues" icon={blues} price="4.0" />
			<SingleProduct name="Mojito" icon={mojito} price="4.0" />
		</div>
	);
}
