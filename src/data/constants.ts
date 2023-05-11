export const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export const animationsWithReducedMotion = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 1 },
};

export const API_KEY = process.env.REACT_APP_API_KEY as string;
export const API_URL = "https://api.nal.usda.gov";
