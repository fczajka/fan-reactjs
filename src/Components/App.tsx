import * as React from "react";
import { useState, useEffect } from "react";
import { FoodsResponse } from "./Types";
import Results from "./Results";
import Notification from "./Notification";
import useFoodList from "../useFoodList";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showNotification, setShowNotification] = useState(false);
    const [isClicked, setIsCliced] = useState(false);
    const [foods, setFoods] = useState([] as FoodsResponse);
    const [APIData] = useFoodList(inputValue);

    function requestFood() {
        setIsCliced(true);
    }

    useEffect(() => {
        if (APIData.counter != 0) {
            return;
        }
        if (isClicked) {
            if (APIData.status === "error") {
                setErrorMessage(APIData.errorMessage);
                setShowNotification(true);
                setIsCliced(false);
                return;
            }
            if (APIData.status === "loaded") {
                setFoods(APIData.food);
                setIsCliced(false);
            }
        }
    }, [APIData, isClicked, inputValue]);

    useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(
                () => setShowNotification(!showNotification),
                3000
            );
            return () => clearTimeout(timer);
        }
    }, [showNotification]);

    return (
        <div className="basis-72 pt-4 overflow-hidden lg:basis-96 lg:pt-8">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestFood();
                }}
            >
                <label className="flex flex-col text-purple-900" htmlFor="food">
                    Food name:
                    <input
                        className="bg-purple-200 rounded-lg p-1 px-4"
                        type="text"
                        id="food"
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </label>
                <button
                    className="w-full text-purple-50 bg-purple-700 border-b-8 border-solid border-purple-900 rounded-lg p-2 mt-4 transition-all hover:border-0 hover:mt-6"
                    type="submit"
                    aria-label="Search food"
                >
                    CHECK
                </button>
            </form>
            <Results foods={foods} />
            <Notification isVisible={showNotification} text={errorMessage} />
        </div>
    );
}

export default App;
