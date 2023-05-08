import { motion } from "framer-motion";
import { animations } from "../../data/constants";
import { JSXChildren } from "../../data/Interfaces";

function Transition({ children }: JSXChildren) {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}

export default Transition;
