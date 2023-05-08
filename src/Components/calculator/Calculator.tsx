import { useEffect, useRef } from "react";
import { useAppSelector } from "../../store/hooks/hooks";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { InitialState, IsOpen } from "../../data/Interfaces";

function Calculator({ isOpen }: IsOpen) {
    const data: InitialState = useAppSelector((state) => state.sum);
    const vh = useRef(window.innerHeight * 0.01);

    useEffect(() => {
        function handleResize() {
            vh.current = window.innerHeight * 0.01;
            document.documentElement.style.setProperty(
                "--vh",
                `${vh.current}px`
            );
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <table
            className={`fixed w-60 top-0 z-20 h-screen overflow-hidden transition-all ease-out duration-300 delay-100 bg-secondary-50 lg:w-80 ${
                isOpen ? "-left-0" : "-left-80"
            }`}
        >
            <TableHead data={data} />
            <TableBody data={data} />
        </table>
    );
}

export default Calculator;
