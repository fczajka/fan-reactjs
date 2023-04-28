import { useState } from "react";
import Header from "./Header";
import WrapperCalculator from "../calculator/Wrapper";
import WrapperModal from "../modal/WrapperModal";
import { JSXChild } from "../../data/Types";

function Layout({ children }: JSXChild) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full flex flex-col items-center bg-yellow bg-center bg-cover">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <WrapperModal />
            <div className="w-72 mt-4 min-h-mobile lg:w-96 lg:min-h-desktop">
                {children}
            </div>
            <WrapperCalculator isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default Layout;
