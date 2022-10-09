function Footer() {
    return (
        <div className="w-full flex justify-center items-center h-16 bg-green-800 lg:h-20">
            <p className="text-green-50 text-xs text-center font-lato lg:text-lg xl:text-xl">
                Data provided by: U.S. Department of Agriculture, Agricultural
                Research Service. FoodData Central, 2019.
                <a href="fdc.nal.usda.gov" target="_blank">
                    fdc.nal.usda.gov
                </a>
            </p>
        </div>
    );
}

export default Footer;
