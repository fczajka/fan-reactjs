import type {
  SetStateActionBoolean,
  SetStateActionFoodsResponse,
  SetStateActionString,
} from '@types';
import type { FoodInfo, FoodResponse } from '@interfaces';
import type { RootState } from '@store';

export function foodInfoFactory(
  storeData: RootState,
  data: FoodResponse,
  inputValue: number,
) {
  const foodInfo: FoodInfo = {
    id: storeData.sum.id,
    food: [
      { name: 'Name', value: data.description },
      {
        name: 'Energy',
        value: Number(
          ((data.foodNutrients[3].value * inputValue) / 100).toFixed(0),
        ),
        unit: 'kcal',
      },
      {
        name: 'Carbohydrate',
        value: ((data.foodNutrients[2].value * inputValue) / 100).toFixed(2),
        unit: 'g',
      },
      {
        name: 'of which sugars',
        value: ((data.foodNutrients[8].value * inputValue) / 100).toFixed(2),
        unit: 'g',
      },
      {
        name: 'Protein',
        value: ((data.foodNutrients[0].value * inputValue) / 100).toFixed(2),
        unit: 'g',
      },
      {
        name: 'Fat',
        value: ((data.foodNutrients[1].value * inputValue) / 100).toFixed(2),
        unit: 'g',
      },
      {
        name: 'Fiber',
        value: ((data.foodNutrients[9].value * inputValue) / 100).toFixed(2),
        unit: 'g',
      },
      {
        name: 'Grams',
        value: inputValue.toFixed(2),
        unit: 'g',
      },
    ],
  };
  return foodInfo;
}

export function validateInput(food: string) {
  return /^[A-Za-z\s]*$/.test(food);
}

export function isLengthZero(foods: FoodResponse[]) {
  if (foods.length === 0) {
    return true;
  }
  return false;
}

export function handleLastFood(
  lastFoodName: string,
  lastFoodList: string,
  setInputValue: SetStateActionString,
  setFoods: SetStateActionFoodsResponse,
) {
  const lastFoodListCleaned = JSON.parse(lastFoodList) as FoodResponse[];
  if (lastFoodListCleaned.length === 0) {
    setInputValue(lastFoodName);
    return;
  }
  setInputValue(lastFoodName);
  setFoods(lastFoodListCleaned);
}

export function handleCachedData(
  setInputValue: SetStateActionString,
  setFoods: SetStateActionFoodsResponse,
) {
  const lastFoodName = localStorage.getItem('lastFoodName');
  const lastFoodList = localStorage.getItem('lastFoodList');
  if (lastFoodName && lastFoodList) {
    handleLastFood(lastFoodName, lastFoodList, setInputValue, setFoods);
  }
}
export function handleSetFoods(inputValue: string, food: FoodResponse[]) {
  localStorage.setItem('lastFoodName', inputValue);
  localStorage.setItem('lastFoodList', JSON.stringify(food));
}

export function handleError(
  errorMessage: string,
  setErrorMessage: SetStateActionString,
  setIsClicked: SetStateActionBoolean,
) {
  setErrorMessage(errorMessage);
  setIsClicked(false);
  return;
}

export function handleLoaded(
  food: FoodResponse[],
  setIsClicked: SetStateActionBoolean,
  setFoods: SetStateActionFoodsResponse,
) {
  setFoods(food);
  setIsClicked(false);
}

export function handleModal(
  isModalClosed: string | null,
  setShowModal: SetStateActionBoolean,
) {
  if (isModalClosed) {
    const isModalClosedCleaned = JSON.parse(isModalClosed) as boolean;
    if (isModalClosedCleaned) {
      setShowModal(false);
    }
  } else {
    return;
  }
}

export function handleClearInput(
  setFoods: SetStateActionFoodsResponse,
  setInputValue: SetStateActionString,
) {
  setFoods([]);
  setInputValue('');
  localStorage.setItem('lastFoodName', '');
  localStorage.setItem('lastFoodList', '');
}
