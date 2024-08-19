import locationIcon from "@/public/icons/location-icon.png";
import phoneIcon from "@/public/icons/phone-icon.png";
import instagramIcon from "@/public/icons/instagram-icon.png";
import facebookIcon from "@/public/icons/facebook-icon.png";
import mailIcon from "@/public/icons/mail-icon.png";
import Image from "next/image";

export default function FindUs() {
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
				<a href="tel:+07716666911" className="contact-info">
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
		</section>
	);
}
