import { useEffect, useState } from "react";
import Card from "./Card";

const MenuSlider = () => {
	const [marginLeft, setMarginLeft] = useState(0);
	const [slideLeftColor, setSLColor] = useState("gray");
	const [slideRightColor, setSRColor] = useState("white");

	function slideLeft() {
		if (marginLeft <= -230) {
			setMarginLeft(marginLeft + 230);
			setSLColor("white");
		} else setSLColor("gray");
	}
	function slideRight() {
		if (marginLeft >= -230 * 6) {
			setMarginLeft(marginLeft - 230);
			setSRColor("white");
		} else setSRColor("gray");
	}

	useEffect(() => {
		document.querySelector(".menu-slides").style.marginLeft = `${marginLeft}px`;
		document.querySelector(".slide-left .line-1").style.background = slideLeftColor;
		document.querySelector(".slide-left .line-2").style.background = slideLeftColor;
		document.querySelector(".slide-right .line-1").style.background = slideRightColor;
		document.querySelector(".slide-right .line-2").style.background = slideRightColor;
	}, [marginLeft, slideLeftColor, slideRightColor]);

	return (
		<section className="view-menu">
			<h2>View Menu</h2>
			<div className="menu-slider">
				<div className="menu-slides">
					<Card name="Cold Drinks" dimension={175} />
					<Card name="Mix" dimension={175} />
					<Card name="Bubbles" dimension={175} />
					<Card name="Hot Drinks" dimension={175} />
					<Card name="Bakery" dimension={175} />
					<Card name="Cake" dimension={175} />
					<Card name="Cheesecake" dimension={175} />
					<Card name="Milkcake" dimension={175} />
					<Card name="Gelato" dimension={175} />
					<Card name="Ice Cream" dimension={175} />
					<Card name="Waffle & Crepe" dimension={175} />
				</div>
			</div>
			<div className="slider-controls">
				<div className="slide-left" onClick={slideLeft}>
					<div className="line-1"></div>
					<div className="line-2"></div>
				</div>
				<div className="slide-right" onClick={slideRight}>
					<div className="line-1"></div>
					<div className="line-2"></div>
				</div>
			</div>
		</section>
	);
};

export default MenuSlider;
