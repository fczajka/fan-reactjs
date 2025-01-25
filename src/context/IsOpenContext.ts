import { createContext } from 'react';

// eslint-disable-next-line no-unused-vars
const IsOpenContext = createContext<[boolean, (IsOpen: boolean) => void]>([
  false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {},
]);

export default IsOpenContext;
