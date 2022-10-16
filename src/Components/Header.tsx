type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<boolean>;
};

function Header({ isOpen, setIsOpen }: Props) {
    return (
        <div className="w-full flex justify-center items-center h-16 bg-green-800 lg:h-20">
            <h1 className="text-green-50 text-2xl lg:text-3xl font-crimson-text">
                FOOD AND NUTRIENTS
            </h1>
            <button
                className="hidden top-5 right-16 py-2 px-4 bg-green-700 text-green-50 rounded-lg border-b-8 border-solid border-green-900 transition-all duration-300 lg:block lg:absolute hover:border-b-0 hover:mt-2 "
                onClick={() => setIsOpen(!isOpen)}
            >
                Open Calcualtor
            </button>
        </div>
    );
}

export default Header;
