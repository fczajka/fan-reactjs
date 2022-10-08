import { Link } from "react-router-dom";

function Result({ food }) {
    return (
        <li className="w-full bg-purple-700 text-purple-50 rounded-lg hover:bg-purple-800">
            <Link
                to="/details"
                state={food}
                className="block w-full rounded-lg my-2 p-4 cursor-pointer"
            >
                {food.description}
            </Link>
        </li>
    );
}

export default Result;
