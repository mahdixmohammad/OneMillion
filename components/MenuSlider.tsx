"use client";

import { useEffect, useState, useCallback } from "react";
import Card from "./Card";

export default function MenuSlider() {
	const [marginLeft, setMarginLeft] = useState(0);
	const [dimension, setDimension] = useState(175);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [initialMarginLeft, setInitialMarginLeft] = useState(0);

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

	const cardWidth = dimension === 175 ? 199.8 : 174.8;
	const gapWidth = dimension / 7;
	let visibleCards = 1;
	if (typeof window !== "undefined") {
		visibleCards = Math.floor((window.innerWidth * 0.8) / cardWidth);
		visibleCards = Math.min(visibleCards, 4);
	}

	const maxMarginLeft = -((items.length - visibleCards) * cardWidth + gapWidth * (items.length - visibleCards));

	function slideLeft() {
		if (marginLeft < 0) {
			setMarginLeft(Math.min(marginLeft + cardWidth + gapWidth, 0));
		}
	}

	function slideRight() {
		if (marginLeft > maxMarginLeft) {
			setMarginLeft(Math.max(marginLeft - cardWidth - gapWidth, maxMarginLeft));
		}
	}

	const handleMouseDown = (e: any) => {
		e.preventDefault();
		setIsDragging(true);
		setStartX(e.pageX || e.touches[0].pageX);
		setInitialMarginLeft(marginLeft);
	};

	const handleMouseMove = useCallback(
		(e: any) => {
			if (!isDragging) return;
			const x = e.pageX || e.touches[0].pageX;
			const dragDistance = x - startX;
			let newMarginLeft = initialMarginLeft + dragDistance;

			// Clamp the marginLeft value
			newMarginLeft = Math.max(newMarginLeft, maxMarginLeft);
			newMarginLeft = Math.min(newMarginLeft, 0);

			setMarginLeft(newMarginLeft);
		},
		[isDragging, startX, initialMarginLeft, maxMarginLeft]
	);

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	useEffect(() => {
		function updateSlideButtonStyles(selector: string, condition: boolean) {
			const element: HTMLElement = document.querySelector(selector)!;
			const line1: HTMLElement = element.querySelector(".line-1")!;
			const line2: HTMLElement = element.querySelector(".line-2")!;

			line1.style.background = condition ? "rgb(70, 70, 70)" : "rgb(125, 39, 48)";
			line2.style.background = condition ? "rgb(70, 70, 70)" : "rgb(125, 39, 48)";
			element.style.pointerEvents = condition ? "none" : "auto";
		}

		(document.querySelector(".menu-slides")! as HTMLElement).style.marginLeft = `${marginLeft}px`;
		updateSlideButtonStyles(".slide-left", marginLeft === 0);
		updateSlideButtonStyles(".slide-right", marginLeft <= maxMarginLeft);

		const viewMenu = document.querySelector(".view-menu")!;

		function visibleElement() {
			if (viewMenu.getBoundingClientRect().top <= 450) {
				viewMenu.classList.add("animateSlideUp");
			} else if (viewMenu.getBoundingClientRect().top > 450 && viewMenu.classList.contains("animateSlideUp")) {
				viewMenu.classList.remove("animateSlideUp");
			}
		}

		visibleElement();

		function handleResize() {
			if (window.innerWidth >= 500) setDimension(175);
			else setDimension(150);
		}

		handleResize();

		window.addEventListener("scroll", visibleElement);
		window.addEventListener("resize", handleResize);

		const menuSlider = document.querySelector(".menu-slider")!;

		menuSlider.addEventListener("mousemove", handleMouseMove);
		menuSlider.addEventListener("mouseup", handleMouseUp);
		menuSlider.addEventListener("touchmove", handleMouseMove);
		menuSlider.addEventListener("touchend", handleMouseUp);

		return () => {
			window.removeEventListener("scroll", visibleElement);
			window.removeEventListener("resize", handleResize);
			menuSlider.removeEventListener("mousemove", handleMouseMove);
			menuSlider.removeEventListener("mouseup", handleMouseUp);
			menuSlider.removeEventListener("touchmove", handleMouseMove);
			menuSlider.removeEventListener("touchend", handleMouseUp);
		};
	}, [marginLeft, dimension, maxMarginLeft, handleMouseMove]);

	return (
		<section className="view-menu">
			<h2>View Menu</h2>
			<div className="menu-slider" onMouseDown={handleMouseDown} onTouchStart={handleMouseDown} onMouseLeave={handleMouseUp}>
				<div className="menu-slides" style={{ gap: gapWidth }}>
					{items.map(name => (
						<Card cardName={name} dimension={dimension} key={name} />
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
}
