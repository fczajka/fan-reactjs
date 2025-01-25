import type {
  Dispatch,
  JSX,
  ReactElement,
  RefObject,
  SetStateAction,
} from 'react';
import type { FoodResponse } from './Interfaces';

export type FoodsResponse = FoodResponse[];

export type Status = 'unloaded' | 'loading' | 'loaded' | 'error';

export type ButtonChildren =
  | (string | ReactElement)[]
  | string
  | JSX.Element
  | number;

export type SetStateActionBoolean = Dispatch<SetStateAction<boolean>>;

export type SetStateActionString = Dispatch<SetStateAction<string>>;

export type SetStateActionNumber = Dispatch<SetStateAction<number>>;

export type SetStateActionFoodsResponse = Dispatch<
  SetStateAction<FoodsResponse>
>;

export type MutableRef = RefObject<HTMLDivElement | null>;

export type ChangeValues = 1 | 5 | 10 | 100;

export type ChangableValues = ChangeValues[];

export type APIDataFood = FoodsResponse;
