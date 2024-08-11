import Link from "next/link";
import SingleProduct from "./SingleProduct";
import mix from "@/public/icons/mix/mexico-pomegranate.png";
import icerose from "@/public/icons/mix/ice-rose.png";
import skycloud from "@/public/icons/mix/sky-cloud.png";
import flowermoon from "@/public/icons/mix/flower-moon.png";
import oceandream from "@/public/icons/mix/ocean-dream.png";
import wintermojito from "@/public/icons/mix/winter-mojito.png";

const Mix = () => {
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
				Mix
			</h2>
			<SingleProduct name="Mexico Pomegranate" icon={mix} price="4.0" />
			<SingleProduct name="Ice Rose" icon={icerose} price="4.0" />
			<SingleProduct name="Sky Cloud" icon={skycloud} price="4.0" />
			<SingleProduct name="Flower Moon" icon={flowermoon} price="4.5" />
			<SingleProduct name="Ocean Dream" icon={oceandream} price="4.0" />
			<SingleProduct name="Winter Mojito" icon={wintermojito} price="4.0" />
		</div>
	);
};

export default Mix;
