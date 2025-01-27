import type { FoodResponse } from '@interfaces';
import type { FoodsResponse } from '@types';

export interface FormProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setFoods: React.Dispatch<React.SetStateAction<FoodsResponse>>;
}

export interface ResultProps {
  food: FoodResponse;
  delay: string;
}
export interface ResultsProps {
  foods: FoodsResponse;
  counter: number;
  isClicked: boolean;
}

export interface LoadingCircleProps {
  counter: number;
  isClicked: boolean;
  shouldReduceMotion: boolean | null;
}
