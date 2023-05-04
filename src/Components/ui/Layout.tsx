import { useState } from "react";
import Header from "./Header";
import WrapperCalculator from "../calculator/Wrapper";
import WrapperModal from "../modal/WrapperModal";
import { JSXChild } from "../../data/Types";

function Layout({ children }: JSXChild) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full h-screen font-primary text-slate-900 flex flex-col items-center bg-secondary-50">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <WrapperModal />
            <div className="w-full mt-4 p-4 sm:p-0 sm:w-96">{children}</div>
            <WrapperCalculator isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default Layout;
