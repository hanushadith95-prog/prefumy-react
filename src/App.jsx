import Navbar from "./components/Navbar.jsx";
import Search from "./components/Search.jsx";
import About from "./components/About.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer.jsx";

function App()
{
    return(
        <div>
             <Navbar />
        <Search />
        <Products />
        <About />
        < Footer></Footer>
        </div>
    )
}

export default App