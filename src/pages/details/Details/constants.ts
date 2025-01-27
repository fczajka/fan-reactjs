import type { ChangableValues } from '@types';

export const changableValues: ChangableValues = [1, 5, 10, 100];

export const addToCalculatorText = 'Add to Calculator';

export const goBackText = 'Go Back';

export const nameText = 'Name';

export const amountText = (grams: number) => `Amount per ${grams}g`;

export const unitText = 'unit';

export const setValueToChangeGramsText = 'Set value that changes grams:';

export const decreaseGransText = 'Decrease grams';

export const increaseGransText = 'Increase grams';
