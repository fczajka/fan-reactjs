import { MutableRef } from "data/Types";
import { useEffect, useRef, ReactElement } from "react";
import { createPortal } from "react-dom";

function Logic({ children }: { children: ReactElement }) {
    const elRef: MutableRef = useRef(null);
    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        if (!modalRoot || !elRef.current) {
            return;
        }
        modalRoot.appendChild(elRef.current);
        return () => {
            if (elRef.current) {
                modalRoot.removeChild(elRef.current);
            }
        };
    }, []);

    return createPortal(<>{children}</>, elRef.current);
}

export default Logic;
