import { FoodInfo } from "data/Interfaces";
import { SetStateActionBoolean, SetStateActionString } from "data/Types";

export interface ButtonsProps {
    foodInfo: FoodInfo;
    setNotificationMessage: SetStateActionString;
    setShowNotification: SetStateActionBoolean;
    name: string;
    showNotification: boolean;
}

export interface GramsControlsProps {
    inputValue: number;
    setGrams: (inputValue: number) => void;
}

export interface TableProps {
    inputValue: number;
    foodInfo: FoodInfo;
}
