import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { FoodInfo, FoodResponse } from "../../data/Types";
import Notification from "../../Components/Notification";
import { makeFoodInfoObject } from "../../helpers/helpers";
import DetailsTable from "./DetailsTable";
import DetailsButtons from "./DetailsButtons";

function Details() {
    const [showNotification, setShowNotification] = useState(false);
    const [inputValue, setInputValue] = useState(100);
    const location = useLocation();
    const data = location.state as FoodResponse;
    const storeData = useSelector((state) => state as RootState);
    const [notificationMessage, setNotificationMessage] = useState("");

    function setGrams(inputValue: number) {
        if (inputValue > 5000) {
            setInputValue(5000);
            setNotificationMessage("Cannot set grams over 5000");
            setShowNotification(!showNotification);
            return;
        }
        if (inputValue < 0.1) {
            setInputValue(0.1);
            setNotificationMessage("Cannot set grams below 0.1");
            setShowNotification(!showNotification);
            return;
        }
        setInputValue(inputValue);
    }

    useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(
                () => setShowNotification(!showNotification),
                3000
            );
            return () => clearTimeout(timer);
        }
    }, [showNotification]);

    const foodInfo = makeFoodInfoObject(
        storeData,
        data,
        inputValue
    ) as FoodInfo;

    return (
        <div className="basis-72 lg:basis-96">
            <h2 className="font-bold pt-4 pb-4 text-center text-lg lg:text-xl lg:pt-8">
                {data.description}
            </h2>
            <DetailsTable
                inputValue={inputValue}
                foodInfo={foodInfo}
                setGrams={setGrams}
            />
            <DetailsButtons
                foodInfo={foodInfo}
                setNotificationMessage={setNotificationMessage}
                setShowNotification={setShowNotification}
                name={data.description}
                showNotification={showNotification}
            />
            <Notification
                isVisible={showNotification}
                text={notificationMessage}
            />
        </div>
    );
}

export default Details;
