import Link from "next/link";
import SingleProduct from "./SingleProduct";
import redVelvet from "@/public/icons/cake/red-velvet.png";
import blueVelvet from "@/public/icons/cake/blue-velvet.png";
import nutellaCake from "@/public/icons/cake/nutella-cake.png";
import lotus from "@/public/icons/cake/lotus.png";
import ferreroRocherCake from "@/public/icons/cake/ferrero-rocher-cake.png";
import vanillaMixCake from "@/public/icons/cake/vanilla-mix-cake.png";
import pistachio from "@/public/icons/cake/pistachio.png";
import blackfruit from "@/public/icons/cake/blackfruit.png";
import nutellaHazelnut from "@/public/icons/cake/nutella-hazelnut.png";
import kinderCake from "@/public/icons/cake/kinder-cake.png";
import belgian from "@/public/icons/cake/belgian.png";
import pistachioCake from "@/public/icons/cake/pistachio.cake.png";
import oneMillion from "@/public/icons/cake/one-million.png";
import oreoCake from "@/public/icons/cake/oreo-cake.png";
import enoughChocolate from "@/public/icons/cake/enough-chocolate.png";
import lotusCake from "@/public/icons/cake/lotus-cake.png";
import kanshCake from "@/public/icons/cake/kansh-cake.png";
import creamyCake from "@/public/icons/cake/creamy-cake.png";
import redVelvetCake from "@/public/icons/cake/red-velvet-cake.png";
import honeyCake from "@/public/icons/cake/honey-cake.png";
import sanSebastian from "@/public/icons/cake/san-sebastian.png";
import chocolateHoneyCake from "@/public/icons/cake/chocolate-honey-cake.png";

const Cake = () => {
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
				Cake
			</h2>
			<SingleProduct name="Red Velvet" icon={redVelvet} price="4.0" />
			<SingleProduct name="Blue Velvet" icon={blueVelvet} price="4.0" />
			<SingleProduct name="Nutella" icon={nutellaCake} price="4.0" />
			<SingleProduct name="Lotus" icon={lotus} price="4.0" />
			<SingleProduct name="Ferrero Rocher" icon={ferreroRocherCake} price="4.0" />
			<SingleProduct name="Vanilla Mix" icon={vanillaMixCake} price="4.0" />
			<SingleProduct name="Pistachio" icon={pistachio} price="4.0" />
			<SingleProduct name="Blackfruit" icon={blackfruit} price="4.0" />
			<SingleProduct name="Nutella Hazelnut" icon={nutellaHazelnut} price="4.0" />
			<SingleProduct name="Kinder Cake" icon={kinderCake} price="4.0" />
			<SingleProduct name="Belgian" icon={belgian} price="4.0" />
			<SingleProduct name="Pistachio Cake" icon={pistachioCake} price="4.0" />
			<SingleProduct name="One Million" icon={oneMillion} price="4.0" />
			<SingleProduct name="Oreo Cake" icon={oreoCake} price="4.0" />
			<SingleProduct name="Enough Chocolate" icon={enoughChocolate} price="4.0" />
			<SingleProduct name="Lotus Cake" icon={lotusCake} price="4.0" />
			<SingleProduct name="Kansh Cake" icon={kanshCake} price="4.0" />
			<SingleProduct name="Creamy Cake" icon={creamyCake} price="4.0" />
			<SingleProduct name="Red Velvet Cake" icon={redVelvetCake} price="4.0" />
			<SingleProduct name="Honey Cake" icon={honeyCake} price="4.0" />
			<SingleProduct name="San Sebastian" icon={sanSebastian} price="4.0" />
			<SingleProduct name="Chocolate Honey Cake" icon={chocolateHoneyCake} price="4.0" />
		</div>
	);
};

export default Cake;
