import { FaHamburger } from "react-icons/fa";

type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<boolean>;
};

function Footer({ isOpen, setIsOpen }: Props) {
    return (
        <footer className="w-full fixed bottom-0 flex justify-center items-center h-16 bg-yellow-50 lg:h-20">
            <p className="basis-5/6 text-xs text-center font-roboto px-4 lg:text-lg xl:text-xl lg:basis-full">
                Data provided by: U.S. Department of Agriculture, Agricultural
                Research Service. FoodData Central, 2019. Link:
                <a
                    className="ml-2 underline"
                    href="https://fdc.nal.usda.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    fdc.nal.usda.gov
                </a>
            </p>
            <div className="basis-1/6 text-center lg:basis-0 lg:absolute lg:right-16 lg:hidden">
                <button
                    className="p-3 z-10 bg-rose-300 rounded-lg text-base transition-all hover:scale-105 hover:bg-rose-400 hover:shadow-md focus:bg-rose-400 focus:shadow-md"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Open calculator"
                >
                    <FaHamburger />
                </button>
            </div>
        </footer>
    );
}

export default Footer;
