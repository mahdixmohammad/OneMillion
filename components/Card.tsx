import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import coldDrinksIcon from "@/public/icons/cold-drinks/natural-juice.png";
import mixIcon from "@/public/icons/mix/mexico-pomegranate.png";
import bubblesIcon from "@/public/icons/bubbles/strawberry-bubbles.png";
import hotdrinksIcon from "@/public/icons/hot-drinks/latte.png";
import bakeryIcon from "@/public/icons/bakery/brownies.png";
import cakeIcon from "@/public/icons/cake/nutella-cake.png";
import cheesecakeIcon from "@/public/icons/cheesecake/pistachio-cheesecake.png";
import milkcakeIcon from "@/public/icons/milkcake/caramel-cake.png";
import gelatoIcon from "@/public/icons/gelato/strawberry.png";
import icecreamIcon from "@/public/icons/icecream/soft.png";
import wafflecrepeIcon from "@/public/icons/waffle-crepe/waffle-burger.png";

interface Props {
	cardName: string;
	dimension: number;
}

export default function Card({ cardName, dimension }: Props): JSX.Element {
	const info: Record<string, [StaticImageData, string]> = {
		"Cold Drinks": [coldDrinksIcon, "/menu/cold-drinks"],
		Mix: [mixIcon, "/menu/mix"],
		Bubbles: [bubblesIcon, "/menu/bubbles"],
		"Hot Drinks": [hotdrinksIcon, "/menu/hot-drinks"],
		Bakery: [bakeryIcon, "/menu/bakery"],
		Cake: [cakeIcon, "/menu/cake"],
		Cheesecake: [cheesecakeIcon, "/menu/cheesecake"],
		Milkcake: [milkcakeIcon, "/menu/milkcake"],
		Gelato: [gelatoIcon, "/menu/gelato"],
		"Ice Cream": [icecreamIcon, "/menu/ice-cream"],
		"Waffle & Crepe": [wafflecrepeIcon, "/menu/waffle-crepe"],
	};

	const icon = info[cardName as keyof typeof info][0];
	const link = info[cardName as keyof typeof info][1];

	return (
		<Link href={link} className="card">
			<div>
				<Image src={icon} alt={cardName} style={{ width: dimension, height: dimension }} />
			</div>
			<h3 style={{ fontSize: dimension / 8 }}>{cardName}</h3>
		</Link>
	);
}
