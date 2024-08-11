import logo from "@/public/images/one-million-logo-white.png";
import Image from "next/image";

const Footer = () => {
	return (
		<footer>
			<a href="# ">
				<Image src={logo} id="logo" alt="" />
			</a>
			<ul>
				<li>
					<a href="https://www.futgulf.com" target="_blank" rel="noreferrer" className="social-media">
						FutGulf
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/1million.iraq/" target="_blank" rel="noreferrer" className="social-media">
						Instagram
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com/1millioniraq" target="_blank" rel="noreferrer" className="social-media">
						Facebook
					</a>
				</li>
			</ul>
			<label className="copyright">Copyright &copy; Future Gulf Company 2024</label>
		</footer>
	);
};

export default Footer;
