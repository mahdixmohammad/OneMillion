import type { Metadata } from "next";
import { Merienda } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const merienda = Merienda({ subsets: ["latin"] });

export const metadata: Metadata = {
	icons: {
		icon: "/favicon.ico",
	},
	title: "One Million",
	description: "The official menu of One Million brought to you by Future Gulf Co.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={merienda.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
