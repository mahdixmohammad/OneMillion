import Link from "next/link";
import SingleProduct from "./SingleProduct";
import strawberry from "@/public/icons/bubbles/strawberry-bubbles.png";
import pineapple from "@/public/icons/bubbles/pineapple-bubbles.png";
import orange from "@/public/icons/bubbles/orange-bubbles.png";
import kiwi from "@/public/icons/bubbles/kiwi-bubbles.png";
import blues from "@/public/icons/bubbles/blues-bubbles.png";
import mojito from "@/public/icons/bubbles/mojito-bubbles.png";

const Bubbles = () => {
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
				Bubbles
			</h2>
			<SingleProduct name="Strawberry" icon={strawberry} price="4.0" />
			<SingleProduct name="Pineapple" icon={pineapple} price="4.0" />
			<SingleProduct name="Orange" icon={orange} price="4.0" />
			<SingleProduct name="Kiwi" icon={kiwi} price="4.0" />
			<SingleProduct name="Blues" icon={blues} price="4.0" />
			<SingleProduct name="Mojito" icon={mojito} price="4.0" />
		</div>
	);
};

export default Bubbles;
