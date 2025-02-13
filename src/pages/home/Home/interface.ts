import type { FoodResponse } from '@interfaces';
import type { Dispatch } from 'react';

export interface FormProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setFoods: React.Dispatch<React.SetStateAction<FoodResponse[]>>;
}

export interface ResultProps {
  food: FoodResponse;
  delay: string;
  expandedId: number | null;
  setExpandedId: Dispatch<React.SetStateAction<number | null>>;
}
export interface ResultsProps {
  foods: FoodResponse[];
  counter: number;
  isClicked: boolean;
}

export interface LoadingCircleProps {
  counter: number;
  isClicked: boolean;
  shouldReduceMotion: boolean | null;
}

export interface ExpandableDetailsProps {
  food: FoodResponse;
  expandedId: number | null;
}
