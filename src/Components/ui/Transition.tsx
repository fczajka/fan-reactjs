import { motion } from "framer-motion";
import { JSXChildren } from "../../data/Types";
import { animations } from "../../data/constants";

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
