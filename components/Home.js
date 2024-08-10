"use client";

import { useEffect } from "react";
import Image from "next/image";
import homeImage from "@/public/one-million-background.jpg";

const Home = () => {
	useEffect(() => {
		function scrollDownClick() {
			window.scrollTo(0, document.querySelector("#home").offsetHeight - 20);
		}

		const scrollDown = document.querySelector(".scroll-down");

		scrollDown.addEventListener("click", scrollDownClick);

		return () => {
			scrollDown.removeEventListener("click", scrollDownClick);
		};
	}, []);
	return (
		<section id="home">
			<Image src={homeImage} alt="Home" />
			<div className="scroll-down">
				<span className="larr"></span>
				<span className="rarr"></span>
			</div>
		</section>
	);
};

export default Home;
