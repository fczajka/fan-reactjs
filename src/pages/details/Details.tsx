import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { FoodInfo, FoodResponse } from "../../data/Types";
import Notification from "../../Components/ui/Notification";
import { makeFoodInfoObject } from "../../helpers/helpers";
import Table from "./Table";
import Buttons from "./Buttons";
import GramsControls from "./GramsControls";
import Transition from "../../Components/ui/Transition";

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
        if (inputValue < 0) {
            setInputValue(0);
            setNotificationMessage("Cannot set grams below 0");
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
        <Transition>
            <h2 className="text-center font-bree-serif text-xl pb-4 lg:text-2xl">
                {data.description}
            </h2>
            <Table
                inputValue={inputValue}
                foodInfo={foodInfo}
                setGrams={setGrams}
            />
            <GramsControls inputValue={inputValue} setGrams={setGrams} />
            <Buttons
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
        </Transition>
    );
}

export default Details;
