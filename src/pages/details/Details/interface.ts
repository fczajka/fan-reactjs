import type { FoodInfo } from '@interfaces';
import type { SetStateActionBoolean, SetStateActionString } from '@types';

export interface ButtonsProps {
  foodInfo: FoodInfo;
  setNotificationMessage: SetStateActionString;
  setShowNotification: SetStateActionBoolean;
  name: string;
  showNotification: boolean;
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
