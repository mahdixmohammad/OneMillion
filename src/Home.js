import cdi from "./icons/cold-drinks-icon.png"
import homeImage from "./images/home.png"

const Home = () => {
    return (
        <section id="home">
            <img src={homeImage}/>
            {/* <ul>
                <li>
                    <div>
                        <img src={cdi} />
                        <h4>Cold Drinks</h4>
                    </div> 
                </li>
            </ul> */}
        </section>
    );
}
 
export default Home;