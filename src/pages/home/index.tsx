import { useState, useEffect, useCallback } from 'react';
import type { FoodsResponse } from '../../data/Types';
import Notification from '../../Components/ui/Notification';
import useFoodList from './hooks/useFoodList';
import Transition from '../../Components/ui/Transition';
import {
  handleCachedData,
  handleError,
  handleLoaded,
  handleSetFoods,
  handleShowNotification,
} from '../../helpers/helpers';
import Results from './Home/Results';
import Form from './Home/Form';

function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [foods, setFoods] = useState<FoodsResponse>([]);
  const [APIData] = useFoodList(inputValue);

  const handleAPIData = useCallback(() => {
    handleSetFoods(inputValue, APIData.food);
    if (APIData.status === 'error') {
      handleError(
        APIData.errorMessage,
        setErrorMessage,
        setShowNotification,
        setIsClicked,
      );
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
    if (showNotification) {
      handleShowNotification(setShowNotification, showNotification);
    }
  }, [showNotification]);

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
      <Notification isVisible={showNotification} text={errorMessage} />
    </Transition>
  );
}

export default Home;
