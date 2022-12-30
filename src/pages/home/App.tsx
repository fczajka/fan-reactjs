import { useState, useEffect } from "react";
import { FoodsResponse } from "../../data/Types";
import Results from "../../Components/ui/Results";
import Notification from "../../Components/ui/Notification";
import useFoodList from "../../hooks/useFoodList";
import Form from "../../Components/form/Form";
import { clearFocus } from "../../helpers/helpers";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showNotification, setShowNotification] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [foods, setFoods] = useState([] as FoodsResponse);
    const [APIData] = useFoodList(inputValue);

    useEffect(() => {
        if (APIData.counter != 0) {
            return;
        }
        if (isClicked) {
            localStorage.setItem("lastFoodName", inputValue);
            localStorage.setItem("lastFoodList", JSON.stringify(APIData.food));
            if (APIData.status === "error") {
                setErrorMessage(APIData.errorMessage);
                setShowNotification(true);
                setIsClicked(false);
                return;
            }
            if (APIData.status === "loaded") {
                setFoods(APIData.food);
                setIsClicked(false);
            }
        }
    }, [APIData, isClicked, inputValue, foods]);

    useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(
                () => setShowNotification(!showNotification),
                3000
            );
            return () => clearTimeout(timer);
        }
    }, [showNotification]);

    useEffect(() => {
        const lastFoodName = localStorage.getItem("lastFoodName");
        const lastFoodList = localStorage.getItem("lastFoodList");
        if (lastFoodName && lastFoodList) {
            const lastFoodListCleaned = JSON.parse(
                lastFoodList
            ) as FoodsResponse;
            if (lastFoodListCleaned.length === 0) {
                setInputValue(lastFoodName);
                return;
            }
            setInputValue(lastFoodName);
            setFoods(lastFoodListCleaned);
        }
    }, []);

    useEffect(() => {
        setTimeout(clearFocus, 1000);
    }, [isClicked]);

    return (
        <>
            <Form
                inputValue={inputValue}
                setInputValue={setInputValue}
                setIsClicked={setIsClicked}
                setFoods={setFoods}
            />
            <Results foods={foods} />
            <Notification isVisible={showNotification} text={errorMessage} />
        </>
    );
}

export default App;
