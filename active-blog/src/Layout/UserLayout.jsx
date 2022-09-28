import UserNavbar from "../Components/Navbar/UserNavbar";
import Footer from "../Components/Footer/Footer";

const UserLayout = ({ children }) => {
    return (<main>
        <UserNavbar />
        <div>
            {children}
        </div>
        <Footer />
    </main>);
}

export default UserLayout;