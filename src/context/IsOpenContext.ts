import { createContext } from "react";

const IsOpenContext = createContext<[boolean, (IsOpen: boolean) => void]>([
    false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {},
]);

export default IsOpenContext;
