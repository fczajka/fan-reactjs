import { InitialState } from "../../data/Types";

type Props = {
    data: InitialState;
};

function TableHead({ data }: Props) {
    return (
        <thead className="flex">
            <tr className="flex basis-3/5 flex-col items-start">
                <th className="text-base px-2 py-0.5 lg:text-lg">Name</th>
                {data.nutrients.map((nutrient) =>
                    nutrient.unit ? (
                        <th
                            key={nutrient.name}
                            className="text-sm px-2 py-0.5 lg:text-base"
                        >
                            {nutrient.name}
                        </th>
                    ) : (
                        ""
                    )
                )}
            </tr>
            <tr className="flex basis-2/5 flex-col items-end">
                <th className="text-base px-2 py-0.5 lg:text-lg">Sum</th>
                {data.nutrients.map((nutrient) =>
                    nutrient.unit ? (
                        <th
                            key={nutrient.name}
                            className="text-sm px-2 py-0.5 lg:text-base"
                        >
                            {nutrient.unit === "kcal"
                                ? `${Math.abs(Math.round(nutrient.value))} ${
                                      nutrient.unit
                                  }`
                                : `${Math.abs(nutrient.value).toFixed(2)} ${
                                      nutrient.unit
                                  }`}
                        </th>
                    ) : (
                        ""
                    )
                )}
            </tr>
        </thead>
    );
}

export default TableHead;
