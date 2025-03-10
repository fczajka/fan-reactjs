import type { FoodInfo } from '@interfaces';

export interface ButtonsProps {
  foodInfo: FoodInfo;
  name: string;
}

export interface GramsControlsProps {
  inputValue: number;
  // eslint-disable-next-line no-unused-vars
  setGrams: (inputValue: number) => void;
}

export interface TableProps {
  inputValue: number;
  foodInfo: FoodInfo;
}
