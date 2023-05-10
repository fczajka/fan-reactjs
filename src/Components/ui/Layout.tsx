import Header from "./Header";
import WrapperCalculator from "../calculator/WrapperCalculator";
import WrapperModal from "../modal/WrapperModal";
import { JSXChild } from "../../data/Interfaces";

function Layout({ children }: JSXChild) {
    return (
        <div className="w-full min-h-screen font-primary text-slate-900 flex flex-col items-center bg-secondary-50">
            <Header />
            <WrapperModal />
            <div className="w-full mt-4 p-4 sm:p-0 sm:w-110">{children}</div>
            <WrapperCalculator />
        </div>
    );
}

export default Layout;
