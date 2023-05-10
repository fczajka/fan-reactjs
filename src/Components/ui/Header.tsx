import Button from "../ui/Button";
import { FaHamburger } from "react-icons/fa";
import { useContext, useState } from "react";
import { ButtonTypes } from "../../data/Enums";
import IsOpenContext from "../../context/IsOpenContext";

function Header() {
    const [IsOpen, SetIsOpen] = useContext(IsOpenContext);
    const [windowWidth] = useState<number>(window.innerWidth);

    return (
        <nav className="fixed bottom-0 w-full flex justify-center bg-secondary-50 shadow-custom z-10 lg:shadow-none lg:static">
            <div className="relative basis-full h-16 max-w-1920 flex justify-around items-center lg:justify-center lg:h-20 lg:static">
                <h1 className="font-secondary text-lg sm:text-2xl lg:text-3xl">
                    FOOD AND NUTRIENTS
                </h1>
                <Button
                    tabIndex={IsOpen ? -1 : 0}
                    callback={() => SetIsOpen(!IsOpen)}
                    aria="Open calculator"
                    type={ButtonTypes.button}
                    myStyle="p-3 text-sm bg-tertiary-200 hover:bg-tertiary-300 focus:bg-tertiary-300 hover:-translate-y-0.5 sm:text-base lg:absolute lg:right-12 lg:p-primary lg:bg-primary-200 lg:focus:bg-primary-300 lg:hover:bg-primary-300"
                >
                    {windowWidth >= 1024 ? "Open calculator" : <FaHamburger />}
                </Button>
            </div>
        </nav>
    );
}

export default Header;
