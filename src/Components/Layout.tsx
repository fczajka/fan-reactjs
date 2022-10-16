import * as React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WrapperCalculator from "./WrapperCalculator";

type Props = {
    children: JSX.Element;
};

function Layout({ children }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full flex flex-col items-center">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="max-w-1920 w-full h-mobile flex items-start justify-center bg-green-50 lg:h-desktop">
                <div className="w-72 flex flex-col items-center justify-start font-lato lg:w-96">
                    {children}
                </div>
            </div>
            <WrapperCalculator isOpen={isOpen} setIsOpen={setIsOpen} />
            <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default Layout;
