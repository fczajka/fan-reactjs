import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import WrapperCalculator from "./WrapperCalculator";

type Props = {
    children: JSX.Element;
};

function Layout({ children }: Props) {
    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <div className="max-w-1920 w-full h-full flex items-center justify-center bg-green-50">
                <div className="w-72 flex flex-col items-center justify-start font-lato h-mobile lg:w-96 lg:h-desktop">
                    {children}
                </div>
            </div>
            <WrapperCalculator />
            <Footer />
        </div>
    );
}

export default Layout;
