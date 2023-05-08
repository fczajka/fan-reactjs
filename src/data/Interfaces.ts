import { ButtonTypes } from "./Enums";
import {
    ButtonChildren,
    FoodsResponse,
    SetStateActionBoolean,
    SetStateActionString,
} from "./Types";

export interface InitialFoodResponse {
    aggregations: {
        dataType: {
            Branded: number;
            Experimental: number;
            Foundation: number;
            "SR Legacy": number;
            "Survey (FNDDS)": number;
        };
        nutrients: unknown;
    };
    currentPage: number;
    foodSearchCriteria: {
        dataType: string[];
        foodTypes: string[];
        numberOfResultsPerPage: number;
        pageNumber: number;
        pageSize: number;
        query: string;
        requireAllWords: boolean;
        sortBy: string;
    };
    foods: FoodsResponse;
    pageList: number[];
    totalHits: number;
    totalPages: number;
}

export interface FoodResponse {
    additionalDescriptions: string;
    allHighlightFields: string;
    commonNames: string;
    dataType: string;
    description: string;
    fdcId: number;
    finalFoodInputFoods: {
        foodDescription: string;
        gramWeight: number;
        id: number;
        portionCode: string;
        portionDescription: string;
        rank: number;
        srCode: number;
        unit: string;
        value: number;
    }[];
    foodAttributeTypes: {
        description: string;
        foodAttributes: { value: string; id: number; sequenceNumber: number }[];
        id: number;
        name: string;
    }[];
    foodAttributes: unknown;
    foodCategory: string;
    foodCategoryId: number;
    foodCode: number;
    foodMeasures: {
        disseminationText: string;
        gramWeight: number;
        id: number;
        measureUnitAbbreviation: string;
        measureUnitId: number;
        measureUnitName: string;
        modifier: string;
        rank: number;
    }[];
    foodNutrients: {
        foodNutrientId: number;
        indentLevel: number;
        nutrientId: number;
        nutrientName: string;
        nutrientNumber: string;
        rank: number;
        unitName: string;
        value: number;
    }[];
    foodVersionIds: [];
    lowercaseDescription: string;
    publishedDate: string;
    score: number;
}

export interface FoodInfo {
    id: number;
    food: {
        name: string;
        value: string | number;
        unit?: string;
    }[];
}

export interface InitialState {
    id: number;
    name: string;
    nutrients: {
        name: string;
        value: string | number;
        unit?: string;
    }[];
    foods: FoodInfo[];
}

export interface TableBodyProps {
    data: InitialState;
}

export interface TableProps {
    inputValue: number;
    foodInfo: FoodInfo;
}

export interface NotificationProps {
    isVisible: boolean;
    text: string;
}

export interface FormProps {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
    setFoods: React.Dispatch<React.SetStateAction<FoodsResponse>>;
}

export interface ModalProps {
    showModal: boolean;
    setShowModal: SetStateActionBoolean;
}

export interface GramsControlsProps {
    inputValue: number;
    setGrams: (inputValue: number) => void;
}

export interface ResultProps {
    food: FoodResponse;
}
export interface ResultsProps {
    foods: FoodsResponse;
}

export interface ButtonProps {
    children: ButtonChildren;
    callback: () => void;
    aria: string;
    type: ButtonTypes;
    style: string;
}

export interface ButtonsProps {
    foodInfo: FoodInfo;
    setNotificationMessage: SetStateActionString;
    setShowNotification: SetStateActionBoolean;
    name: string;
    showNotification: boolean;
}

export interface JSXChild {
    children: JSX.Element;
}
export interface JSXChildren {
    children: JSX.Element[];
}
