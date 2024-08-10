"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import whiteLogo from "@/public/images/one-million-logo-white.png";
import goldLogo from "@/public/images/one-million-logo-gold.png";

const Navbar = () => {
	const pathname = usePathname();
	const [activeLink, setActiveLink] = useState(pathname);
	const [currentLogo, setCurrentLogo] = useState(goldLogo);

	useEffect(() => {
		document.querySelector("nav").classList.remove("active");
		setCurrentLogo(goldLogo);

		if (pathname === "/") {
			function checkNavActive() {
				if (window.scrollY <= 400) {
					document.querySelector("nav").classList.add("active");
					setCurrentLogo(whiteLogo);
				} else {
					document.querySelector("nav").classList.remove("active");
					setCurrentLogo(goldLogo);
				}
			}

			checkNavActive();

			window.addEventListener("scroll", checkNavActive);

			return () => {
				window.removeEventListener("scroll", checkNavActive);
			};
		}
	}, [pathname]);

	const handleClick = href => {
		setActiveLink(href);
	};

	return (
		<nav>
			<Link href="/" onClick={() => handleClick("/")}>
				<Image src={currentLogo} id="logo" alt="Logo" />
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
			<div className="hamburger">
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</nav>
	);
};

export default Navbar;
