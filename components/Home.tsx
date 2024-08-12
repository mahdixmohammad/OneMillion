"use client";

import { useEffect } from "react";
import Image from "next/image";
import homeImage from "@/public/images/one-million-background.jpeg";
import logo from "@/public/images/homeLogo.png";

export default function Home() {
	useEffect(() => {
		function scrollDownClick() {
			window.scrollTo(0, (document.querySelector("#home")! as HTMLElement).offsetHeight - 20);
		}

		const scrollDown = document.querySelector(".scroll-down")!;

		scrollDown.addEventListener("click", scrollDownClick);

		return () => {
			scrollDown.removeEventListener("click", scrollDownClick);
		};
	}, []);

	return (
		<section id="home">
			<Image className="homeImage" src={homeImage} alt="Home" />
			<div className="main-title">
				{/* <h1>WELCOME TO</h1> */}
				{/* <h1 className="name">ONE MILLION</h1> */}
				<Image className="homeLogo" src={logo} alt="" />
			</div>
			<div className="scroll-down">
				<span className="larr"></span>
				<span className="rarr"></span>
			</div>
		</section>
	);
}
