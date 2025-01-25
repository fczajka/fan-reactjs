import { LoadingCircleProps } from './interface';

export const displayLoadingCircle = ({
  counter,
  isClicked,
  shouldReduceMotion,
}: LoadingCircleProps) => {
  return counter && isClicked && !shouldReduceMotion;
};
