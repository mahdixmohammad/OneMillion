import logo from "../assets/images/one-million-logo-white.png";

const Footer = () => {
	return (
		<footer>
			<a href="# ">
				<img src={logo} id="logo" alt="" />
			</a>
			<ul>
				<li>
					<a href="https://www.futgulf.com" target="_blank" rel="noreferrer" class="social-media">
						FutGulf
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/1million.iraq/" target="_blank" rel="noreferrer" class="social-media">
						Instagram
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com/1millioniraq" target="_blank" rel="noreferrer" class="social-media">
						Facebook
					</a>
				</li>
			</ul>
			<label class="copyright">Copyright &copy; Future Gulf Company 2024</label>
		</footer>
	);
};

export default Footer;
