import * as React from "react";

type Props = {
    isVisible: boolean;
    text: string;
};

function Notification({ isVisible, text }: Props) {
    return (
        <div
            className={`absolute bg-green-700 text-green-50 text-sm max-w px-4 py-2 rounded-lg transition-all duration-500 lg:text-base ${
                isVisible ? "bottom-24" : "-bottom-0"
            }`}
        >
            {text}
        </div>
    );
}

export default Notification;
