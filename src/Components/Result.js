function Result({ food }) {
    console.log(food);

    return (
        <li className="w-full bg-purple-700 text-purple-50 rounded-lg hover:bg-purple-800">
            <button className="block w-full rounded-lg my-2 p-4 cursor-pointer">
                {food.description}
            </button>
        </li>
    );
}

export default Result;
