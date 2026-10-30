import one from "../assets/images/one.jpg";
import two from "../assets/images/two.jpg";
import three from "../assets/images/one.jpg";

// Products component
function Products() {
    return (
        <div className="products">

            <div className="box">
                <img src={one} />
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
            </div>

            <div className="box">
                <img src={two} />
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
            </div>

            <div className="box">
                <img src={three} />
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>

        </div>
    );
}


export default Products;