import locationIcon from "../assets/icons/location-icon.png";
import phoneIcon from "../assets/icons/phone-icon.png";
import mailIcon from "../assets/icons/mail-icon.png";
import sendIcon from "../assets/icons/send-icon.png";

const FindUs = () => {
	return (
		<section id="contact">
			<div id="information">
				<h1>Find Us</h1>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499.6694964109219!2d44.01851654539218!3d32.59652681714507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155969676f964bc3%3A0xff4882a40e0dd280!2zT25lIE1pbGxpb24gfCDZiNmGINmF2YTZitmI2YY!5e0!3m2!1sen!2sca!4v1722843782910!5m2!1sen!2sca"
					width="400"
					height="300"
					title="Find Us"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
				<a href="https://maps.app.goo.gl/jHEWYkcwYjfe6YF1A" class="contact-info">
					<img src={locationIcon} alt="" />
					Hayy Al Hussain, Karbala
				</a>
				<a href="tel:+9647723900900" class="contact-info">
					<img src={phoneIcon} alt="" />
					+07716666911{" "}
				</a>
				<a href="mailto:ceo@futgulf.com" class="contact-info">
					<img src={mailIcon} alt="" />
					ceo@futgulf.com{" "}
				</a>
			</div>
			<form method="post" action="send-email.php">
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
			</form>
		</section>
	);
};

export default FindUs;
