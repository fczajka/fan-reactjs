import { useState, useEffect, useCallback } from 'react';
import useFoodList from './hooks/useFoodList';
import {
  handleCachedData,
  handleError,
  handleLoaded,
  handleSetFoods,
} from '@helpers';
import Results from './Home/Results';
import Form from './Home/Form';
import { Transition } from '@ui';
import type { FoodResponse } from '@interfaces';

function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  const [, setErrorMessage] = useState<string>('');
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [foods, setFoods] = useState<FoodResponse[]>([]);
  const [APIData] = useFoodList(inputValue);

  const handleAPIData = useCallback(() => {
    handleSetFoods(inputValue, APIData.food);
    if (APIData.status === 'error') {
      handleError(APIData.errorMessage, setErrorMessage, setIsClicked);
    }
    if (APIData.status === 'loaded') {
      handleLoaded(APIData.food, setIsClicked, setFoods);
    }
  }, [APIData.errorMessage, APIData.food, APIData.status, inputValue]);

  useEffect(() => {
    if (APIData.counter !== 0) {
      return;
    }
    if (isClicked) {
      handleAPIData();
    }
  }, [handleAPIData, APIData.counter, isClicked]);

  useEffect(() => {
    handleCachedData(setInputValue, setFoods);
  }, []);

  return (
    <Transition>
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        setIsClicked={setIsClicked}
        setFoods={setFoods}
      />
      <Results foods={foods} counter={APIData.counter} isClicked={isClicked} />
    </Transition>
  );
}

export default Home;
