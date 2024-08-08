import { useEffect, useState } from "react";
import Card from "./Card";

const MenuSlider = () => {
	const [marginLeft, setMarginLeft] = useState(0);
	const [dimension, setDimension] = useState(175);

	const items = [
		"Cold Drinks",
		"Mix",
		"Bubbles",
		"Hot Drinks",
		"Bakery",
		"Cake",
		"Cheesecake",
		"Milkcake",
		"Gelato",
		"Ice Cream",
		"Waffle & Crepe",
	];

	const totalWidth = items.length * dimension;
	const maxMarginLeft = -(totalWidth + dimension);

	function slideLeft() {
		if (marginLeft < 0) {
			setMarginLeft(marginLeft + dimension);
		}
	}

	function slideRight() {
		if (marginLeft > maxMarginLeft) {
			setMarginLeft(marginLeft - dimension);
		}
	}

	useEffect(() => {
		function updateSlideButtonStyles(selector, condition) {
			const element = document.querySelector(selector);
			element.querySelector(".line-1").style.background = condition ? "gray" : "white";
			element.querySelector(".line-2").style.background = condition ? "gray" : "white";
			element.style.pointerEvents = condition ? "none" : "auto";
		}

		document.querySelector(".menu-slides").style.marginLeft = `${marginLeft}px`;
		updateSlideButtonStyles(".slide-left", marginLeft === 0);
		updateSlideButtonStyles(".slide-right", marginLeft <= maxMarginLeft);

		const viewMenu = document.querySelector(".view-menu");

		function visibleElement() {
			if (viewMenu.getBoundingClientRect().top <= 500) {
				viewMenu.classList.add("animateSlideUp");
			} else if (viewMenu.getBoundingClientRect().top > 500 && viewMenu.classList.contains("animateSlideUp")) {
				viewMenu.classList.remove("animateSlideUp");
			}
		}

		visibleElement();

		function handleResize() {
			if (window.innerWidth >= 500) setDimension(175);
			else setDimension(115);
		}

		handleResize();

		window.addEventListener("scroll", visibleElement);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", visibleElement);
			window.removeEventListener("resize", handleResize);
		};
	}, [marginLeft, dimension, maxMarginLeft]);

	return (
		<section className="view-menu">
			<h2>View Menu</h2>
			<div className="menu-slider">
				<div className="menu-slides" style={{ gap: dimension / 7 }}>
					{items.map(name => (
						<Card name={name} dimension={dimension} key={name} /> // Added key prop
					))}
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
