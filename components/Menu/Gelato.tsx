import Product from "./Product";
import strawberry from "@/public/icons/gelato/strawberry.png";
import lemon from "@/public/icons/gelato/lemon.png";
import bubblegum from "@/public/icons/gelato/bubblegum.png";
import vanilla from "@/public/icons/gelato/vanilla.png";
import ferreroRocher from "@/public/icons/gelato/ferrero-rocher.png";
import pistachio from "@/public/icons/gelato/pistachio.png";
import blueberry from "@/public/icons/gelato/blueberry.png";
import lotus from "@/public/icons/gelato/lotus.png";
import Header from "./Header";

export default function Gelato() {
	const gelatoTypes = {
		"Three Scoops": "4.0",
		"0.5 KG": "7.0",
		"1.0 KG": "14.0",
	};

	return (
		<div className="products">
			<Header productName="Gelato" />
			<Product name="Strawberry" icon={strawberry} types={gelatoTypes} />
			<Product name="Lemon" icon={lemon} types={gelatoTypes} />
			<Product name="Bubblegum" icon={bubblegum} types={gelatoTypes} />
			<Product name="Vanilla" icon={vanilla} types={gelatoTypes} />
			<Product name="Ferrero Rocher" icon={ferreroRocher} types={gelatoTypes} />
			<Product name="Pistachio" icon={pistachio} types={gelatoTypes} />
			<Product name="Blueberry" icon={blueberry} types={gelatoTypes} />
			<Product name="Lotus" icon={lotus} types={gelatoTypes} />
		</div>
	);
}
