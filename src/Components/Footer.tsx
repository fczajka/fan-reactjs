import { FaHamburger } from "react-icons/fa";

type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<boolean>;
};

function Footer({ isOpen, setIsOpen }: Props) {
    return (
        <div className="w-full fixed bottom-0 flex justify-center items-center h-20 bg-green-800 lg:h-20">
            <p className="basis-5/6 text-green-50 text-xs text-center font-lato px-4 lg:text-lg xl:text-xl lg:basis-full">
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
                    className="px-3 py-2 rounded-lg text-green-50 border-b-8 border-solid border-green-900 font-lato bg-green-600 transition-all z-10 hover:border-b-0 hover:mt-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Open calculator"
                >
                    <FaHamburger />
                </button>
            </div>
        </div>
    );
}

export default Footer;
