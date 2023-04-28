import { motion } from "framer-motion";
import { TransitionProps } from "../../data/Types";

const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

function Transition({ children }: TransitionProps) {
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
