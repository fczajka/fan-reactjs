function Form() {
    return (
        <div className="w-full flex justify-center pt-16">
            <div>
                <label className="text-purple-900" htmlFor="food">
                    Food name:
                </label>
                <div>
                    <input
                        className="bg-purple-200 rounded-l-lg p-1 mr-1"
                        type="text"
                        id="food"
                    />
                    <button
                        className="text-purple-50 bg-purple-700 rounded-r-lg p-1 ml-1 transition-all hover:bg-purple-800"
                        type="submit"
                    >
                        CHECK
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Form;
