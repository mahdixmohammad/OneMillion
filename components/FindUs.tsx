"use client";

import locationIcon from "@/public/icons/location-icon.png";
import phoneIcon from "@/public/icons/phone-icon.png";
import instagramIcon from "@/public/icons/instagram-icon.png";
import facebookIcon from "@/public/icons/facebook-icon.png";
import mailIcon from "@/public/icons/mail-icon.png";
import { useEffect } from "react";
import Image from "next/image";

const FindUs = () => {
	useEffect(() => {
		const googleMapIframe = document.querySelector("#contact iframe")!;
		const findUs = document.querySelector("#contact .find-us")!;

		function visibleElement() {
			if (googleMapIframe.getBoundingClientRect().top <= 500) {
				googleMapIframe.classList.add("animateSlideRight");
			} else if (googleMapIframe.getBoundingClientRect().top > 600 && googleMapIframe.classList.contains("animateSlideRight")) {
				googleMapIframe.classList.remove("animateSlideRight");
			}
			if (findUs.getBoundingClientRect().top <= 500) {
				findUs.classList.add("animateSlideLeft");
			} else if (findUs.getBoundingClientRect().top > 600 && findUs.classList.contains("animateSlideLeft")) {
				findUs.classList.remove("animateSlideLeft");
			}
		}

		visibleElement();

		window.addEventListener("scroll", visibleElement);

		return () => {
			window.removeEventListener("scroll", visibleElement);
		};
	});

	return (
		<section id="contact">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13445.433593710222!2d44.018725!3d32.596631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155969676f964bc3%3A0xff4882a40e0dd280!2zT25lIE1pbGxpb24gfCDZiNmGINmF2YTZitmI2YY!5e0!3m2!1sen!2sca!4v1723235348089!5m2!1sen!2sca"
				width="1000"
				height="450"
				title="Find Us"
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
			<div className="find-us">
				<h2>Find Us</h2>
				<a href="https://maps.app.goo.gl/DsDANDpa1EHWUtS48" className="contact-info">
					<Image src={locationIcon} alt="" />
					Hayy Al Hussain, Karbala
				</a>
				<a href="tel:+9647723900900" className="contact-info">
					<Image src={phoneIcon} alt="" />
					+07716666911
				</a>
				<a href="https://www.instagram.com/1million.iraq" className="contact-info">
					<Image src={instagramIcon} alt="" />
					@1million.iraq
				</a>
				<a href="https://www.facebook.com/1millioniraq" className="contact-info">
					<Image src={facebookIcon} alt="" />
					1millioniraq
				</a>
				<a href="mailto:ceo@futgulf.com" className="contact-info">
					<Image src={mailIcon} alt="" />
					ceo@futgulf.com
				</a>
			</div>
			{/* <form method="post" action="send-email.php">
				<h2>Get in touch with us!</h2>
				<input type="text" id="name" name="name" placeholder="Full Name" autocomplete="off" required />
				<input type="email" id="email" name="email" placeholder="Email Address" autocomplete="off" required />
				<input type="text" id="subject" name="subject" placeholder="Subject" autocomplete="off" required />
				<textarea id="message" rows="4" name="message" placeholder="Message"></textarea>
				<button type="submit">
					<img src={sendIcon} alt="" />
					Send
				</button>
				<input type="hidden" name="_captcha" value="false" />
			</form> */}
		</section>
	);
};

export default FindUs;
