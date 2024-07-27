const Dropdown = () => {
    const menuClick = (button) => {
        const arrow = document.querySelector(".arrow");
        const dropdown = document.querySelector(".dropdown");
        arrow.classList.toggle("active");
        dropdown.classList.toggle("active");
        dropdown.style.zIndex = "-1";
        let all = document.getElementsByClassName("all");

        
        switch(button) {
            case "all":
                for (let i = 0; i < all.length; i++) {
                    all[i].style.display = "block";
                }
                break;
            default:
                for (let i = 0; i < all.length; i++) {
                    all[i].style.display = "none";
                }
    
                let element = document.getElementsByClassName(button);
                for (let i = 0; i < element.length; i++) {
                    element[i].style.display = "block";
                }
        }
    }

    return (
        <div class="dropdown">
        <ul>
            <li><a onClick={() => menuClick('all')}>All</a></li>
            <li><a onClick={() => menuClick('cold-drinks')}>Cold Drinks</a></li>
            <li><a onClick={() => menuClick('mix')}>Mix</a></li>
            <li><a onClick={() => menuClick('bubbles-juice')}>Bubbles Juice</a></li>
            <li><a onClick={() => menuClick('hot-drinks')}>Hot Drinks</a></li>
            <li><a onClick={() => menuClick('bakery')}>Bakery</a></li>
            <li><a onClick={() => menuClick('cake')}>Cake</a></li>
            <li><a onClick={() => menuClick('cheesecake')}>Cheesecake</a></li>
            <li><a onClick={() => menuClick('milkcake')}>Milkcake</a></li>
            <li><a onClick={() => menuClick('gelato')}>Gelato</a></li>
            <li><a onClick={() => menuClick('ice-cream')}>Ice Cream</a></li>
            <li><a onClick={() => menuClick('waffle-crepe')}>Waffle & Crepe</a></li>
        </ul>
    </div>
    );
}
 
export default Dropdown;