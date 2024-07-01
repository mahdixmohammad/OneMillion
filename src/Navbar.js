import logo from "./images/one-million-logo.png";

const Navbar = () => {
    const arrow = document.querySelector(".arrow");
    const dropdown = document.querySelector(".dropdown");

    const arrowClick = () => {
        arrow.classList.toggle("active");
        dropdown.classList.toggle("active");
        if (dropdown.classList.contains("active")) {
            setTimeout(() => {
                dropdown.style.zIndex = "1000";
            }, 500);
        }
        else {
            dropdown.style.zIndex = "-1";
        }
    };

    const hamburgerClick = () => {
        arrow.classList.toggle("active");
        dropdown.classList.toggle("active");
        if (dropdown.classList.contains("active")) {
            setTimeout(() => {
                dropdown.style.zIndex = "1000";
            }, 500);
        }
        else {
            dropdown.style.zIndex = "-1";
        }
    };

    return (
        <nav>
            <a href="#top"><img src={logo} id="logo" /></a>
            <ul>
                <li>
                    <div onClick={arrowClick} className="arrow">
                        <a href="#top">Menu</a>
                        <div>
                            <span className="larr"></span>
                            <span className="rarr"></span>
                        </div>
                    </div>
                </li>
            </ul>
            <div onClick={hamburgerClick} className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
}
 
export default Navbar;