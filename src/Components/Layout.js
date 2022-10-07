import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <div className="max-w-1920 w-full">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
