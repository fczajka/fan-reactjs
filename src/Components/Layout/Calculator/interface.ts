import type { InitialState } from '@interfaces';

export interface TableBodyProps {
  data: InitialState;
}

export interface TableHeadProps {
  IsOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  SetIsOpen: (isOpen: boolean) => void;
}

export interface CardProps {
  foodName: string;
  nutrients: {
    name: string;
    value: string | number;
    unit?: string;
  }[];
}
