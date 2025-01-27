import type { InitialState } from '@interfaces';

export const initialState: InitialState = {
  id: 0,
  name: 'Sum',
  nutrients: [
    { name: 'Name', value: 'Name' },
    {
      name: 'Energy',
      value: 0,
      unit: 'kcal',
    },
    {
      name: 'Carbohydrate',
      value: 0,
      unit: 'g',
    },
    {
      name: 'of which sugars',
      value: 0,
      unit: 'g',
    },
    {
      name: 'Protein',
      value: 0,
      unit: 'g',
    },
    {
      name: 'Fat',
      value: 0,
      unit: 'g',
    },
    {
      name: 'Fiber',
      value: 0,
      unit: 'g',
    },
    {
      name: 'Grams',
      value: 0,
      unit: 'g',
    },
  ],
  foods: [],
};
