import { motion, useReducedMotion } from "framer-motion";
import { JSXChildren } from "data/Interfaces";
import { animations, animationsWithReducedMotion } from "data/constants";

function Transition({ children }: JSXChildren) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            variants={
                shouldReduceMotion ? animationsWithReducedMotion : animations
            }
            initial="initial"
            animate="animate"
            exit="exit"
            transition={
                shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }
            }
        >
            {children}
        </motion.div>
    );
}

export default Transition;
