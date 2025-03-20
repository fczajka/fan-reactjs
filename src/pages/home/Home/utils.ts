import type { LoadingCircleProps } from './interface';

export const displayLoadingCircle = ({
  counter,
  isClicked,
  shouldReduceMotion,
}: LoadingCircleProps) => {
  return counter && isClicked && !shouldReduceMotion;
};

export const getNutrientDisplayName = (nutrientName: string): string => {
  return nutrientName === 'Carbohydrate, by difference'
    ? 'Total carbohydrates'
    : nutrientName;
};
