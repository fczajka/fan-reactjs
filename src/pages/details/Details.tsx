import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { FoodResponse } from "../../data/Types";
import Notification from "../../Components/ui/Notification";
import { foodInfoFactory } from "../../helpers/helpers";
import Table from "./Table";
import Buttons from "./Buttons";
import GramsControls from "./GramsControls";
import Transition from "../../Components/ui/Transition";

function Details() {
    const [showNotification, setShowNotification] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<number>(100);
    const location = useLocation();
    const data = location.state as FoodResponse;
    console.log(data);
    const storeData = useSelector((state: RootState) => state);
    const [notificationMessage, setNotificationMessage] = useState<string>("");

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

    const foodInfo = foodInfoFactory(storeData, data, inputValue);

    return (
        <Transition>
            <h2 className="text-center font-secondary text-lg pb-4 sm:text-xl lg:text-2xl">
                {data.description}
            </h2>
            <Table inputValue={inputValue} foodInfo={foodInfo} />
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
