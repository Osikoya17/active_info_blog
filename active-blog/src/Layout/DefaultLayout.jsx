import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const DefaultLayout = ({ children }) => {
    return (<main>
        <Navbar />
        <div>
            {children}
        </div>
        <Footer />
    </main>);
}

export default DefaultLayout;