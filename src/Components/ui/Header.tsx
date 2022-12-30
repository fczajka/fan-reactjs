type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<boolean>;
};

function Header({ isOpen, setIsOpen }: Props) {
    return (
        <header className="w-full flex justify-center bg-yellow-50">
            <div className="basis-full h-16 max-w-1920 flex justify-center items-center lg:h-20">
                <h1 className="font-bree-serif text-2xl lg:text-3xl">
                    FOOD AND NUTRIENTS
                </h1>
                <button
                    className="absolute right-12 font-roboto px-2 py-1 hidden flex-col items-center justify-center text-sm rounded-lg bg-blue-100 transition-all hover:scale-110 hover:bg-blue-200 hover:shadow-md focus:bg-blue-200 focus:shadow-md lg:text-base lg:flex"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Open calculator"
                >
                    Open Calculator
                </button>
            </div>
        </header>
    );
}

export default Header;
