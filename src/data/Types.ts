import { MutableRefObject, ReactElement } from 'react';
import { FoodResponse } from './Interfaces';

export type FoodsResponse = FoodResponse[];

export type Status = 'unloaded' | 'loading' | 'loaded' | 'error';

export type ButtonChildren =
  | (string | ReactElement)[]
  | string
  | JSX.Element
  | number;

export type SetStateActionBoolean = (
  value: React.SetStateAction<boolean>,
) => void;

export type SetStateActionString = (
  value: React.SetStateAction<string>,
) => void;

export type SetStateActionNumber = (
  value: React.SetStateAction<number>,
) => void;

export type SetStateActionFoodsResponse = (
  value: React.SetStateAction<FoodsResponse>,
) => void;

export type MutableRef = MutableRefObject<HTMLDivElement | null>;

export type ChangeValues = 1 | 5 | 10 | 100;

export type ChangableValues = ChangeValues[];

export type APIDataFood = FoodsResponse;
