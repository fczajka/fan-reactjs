import { FaHamburger } from "react-icons/fa";
import { useState } from "react";

type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<boolean>;
};

function Header({ isOpen, setIsOpen }: Props) {
    const [windowWidth] = useState(window.innerWidth);

    return (
        <nav className="fixed bottom-0 w-full flex justify-center bg-yellow-50 lg:static">
            <div className="relative basis-full h-16 max-w-1920 flex justify-around items-center lg:justify-center lg:h-20 lg:static">
                <h1 className="font-bree-serif text-2xl lg:text-3xl">
                    FOOD AND NUTRIENTS
                </h1>
                <button
                    className="font-roboto p-3 flex-col items-center justify-center text-sm rounded-lg bg-rose-300 transition-all hover:scale-110 hover:bg-rose-400 hover:shadow-md focus:bg-rose-400 focus:shadow-md lg:text-base lg:flex lg:absolute lg:right-12 lg:px-2 lg:py-1 lg:bg-blue-100 lg:focus:bg-blue-200 lg:hover:bg-blue-200"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Open calculator"
                >
                    {windowWidth >= 1024 ? "Open calculator" : <FaHamburger />}
                </button>
            </div>
        </nav>
    );
}

export default Header;
