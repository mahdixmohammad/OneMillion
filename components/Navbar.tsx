"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/images/one-million-logo-nav.png";

export default function Navbar() {
	const pathname = usePathname();
	const [activeLink, setActiveLink] = useState(pathname);

	useEffect(() => {
		const nav = document.querySelector("nav")!;
		nav.classList.remove("active");

		function checkNavActive() {
			if (window.scrollY <= window.innerHeight - 70) {
				nav.classList.add("active");
			} else {
				nav.classList.remove("active");
			}
		}

		if (pathname === "/") {
			checkNavActive();

			window.addEventListener("scroll", checkNavActive);

			return () => {
				window.removeEventListener("scroll", checkNavActive);
			};
		}
	}, [pathname]);

	const handleClick = (href: string) => {
		setActiveLink(href);
		const nav = document.querySelector("nav")!;
		if (nav.classList.contains("hamburger-active")) {
			nav.classList.remove("hamburger-active");
		}
	};

	const hamburgerClick = () => {
		const nav = document.querySelector("nav")!;
		nav.classList.toggle("hamburger-active");
	};

	return (
		<nav>
			<Link href="/" onClick={() => handleClick("/")}>
				<Image src={logo} id="logo" alt="Logo" />
			</Link>
			<ul>
				<li>
					<Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => handleClick("/")}>
						Home
					</Link>
				</li>
				<li>
					<Link href="/menu" className={pathname === "/menu/" ? "active" : ""} onClick={() => handleClick("/menu")}>
						Menu
					</Link>
				</li>
			</ul>
			<div className="hamburger" onClick={hamburgerClick}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
			<div className="x" onClick={hamburgerClick}>
				<div className="line-1"></div>
				<div className="line-2"></div>
			</div>
		</nav>
	);
}
