import * as React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WrapperCalculator from "../calculator/Wrapper";

type Props = {
    children: JSX.Element;
};

function Layout({ children }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full flex flex-col items-center bg-yellow bg-center bg-cover">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="w-72 min-h-mobile lg:w-96 lg:min-h-desktop">
                {children}
            </div>
            <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
            <WrapperCalculator isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default Layout;
