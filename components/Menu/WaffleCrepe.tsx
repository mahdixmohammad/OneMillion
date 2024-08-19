import SingleProduct from "./SingleProduct";
import bubbleWaffle from "@/public/icons/waffle-crepe/bubble-waffle.png";
import waffleBurger from "@/public/icons/waffle-crepe/waffle-burger.png";
import crepe from "@/public/icons/waffle-crepe/crepe.png";
import Header from "./Header";

const WaffleCrepe = () => {
	return (
		<div className="products">
			<Header productName="Waffle & Crepe" />
			<SingleProduct name="Bubble Waffle" icon={bubbleWaffle} price="5.0" />
			<SingleProduct name="Waffle Burger" icon={waffleBurger} price="5.0" />
			<SingleProduct name="Crepe" icon={crepe} price="5.0" />
		</div>
	);
};

export default WaffleCrepe;
