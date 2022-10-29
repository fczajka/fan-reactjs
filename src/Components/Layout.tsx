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
        <div className="w-full">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="max-w-1920 min-h-mobile lg:min-h-desktop bg-green-50">
                <div className="flex justify-center font-lato">{children}</div>
            </div>
            <WrapperCalculator isOpen={isOpen} setIsOpen={setIsOpen} />
            <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default Layout;
