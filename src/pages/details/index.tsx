import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  foodInfoFactory,
  handleShowNotification,
  handleValueOver5000,
  handleValueUnder0,
} from '@helpers';
import DetailsTable from './Details/DetailsTable';
import GramsControls from './Details/GramsControls';
import Buttons from './Details/Buttons';
import { Transition, Notification } from '@ui';
import type { RootState } from '@store';
import type { FoodInfo, FoodResponse } from '@interfaces';

function Details() {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<number>(100);
  const location = useLocation();
  const data = location.state as FoodResponse;
  const storeData = useSelector((state: RootState) => state);
  const [notificationMessage, setNotificationMessage] = useState<string>('');

  function setGrams(inputValue: number) {
    if (inputValue > 5000) {
      handleValueOver5000(setInputValue, setNotificationMessage);
      setShowNotification(!showNotification);
      return;
    }
    if (inputValue < 0) {
      handleValueUnder0(setInputValue, setNotificationMessage);
      setShowNotification(!showNotification);
      return;
    }
    setInputValue(inputValue);
  }

  useEffect(() => {
    if (showNotification) {
      handleShowNotification(setShowNotification, showNotification);
    }
  }, [showNotification]);

  const foodInfo: FoodInfo = foodInfoFactory(storeData, data, inputValue);

  return (
    <Transition>
      <h2 className='text-center font-secondary text-lg pb-4 sm:text-xl lg:text-2xl'>
        {data.description}
      </h2>
      <DetailsTable inputValue={inputValue} foodInfo={foodInfo} />
      <GramsControls inputValue={inputValue} setGrams={setGrams} />
      <Buttons
        foodInfo={foodInfo}
        setNotificationMessage={setNotificationMessage}
        setShowNotification={setShowNotification}
        name={data.description}
        showNotification={showNotification}
      />
      <Notification isVisible={showNotification} text={notificationMessage} />
    </Transition>
  );
}

export default Details;
