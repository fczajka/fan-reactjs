import type { TableBodyProps } from './interface';

function TableHead({ data }: TableBodyProps) {
  return (
    <ul className='grid grid-cols-2 gap-4'>
      {data.nutrients.map(
        (nutrient) =>
          nutrient.unit && (
            <li
              key={nutrient.name}
              className={`flex justify-between text-xs px-2 py-0.5 ${nutrient.name === 'Grams' && 'col-span-2'} md:text-sm lg:text-base`}
            >
              <div>{nutrient.name}</div>
              <div>
                {nutrient.unit === 'kcal'
                  ? typeof nutrient.value === 'number' &&
                    `${Math.abs(Math.round(nutrient.value))} ${nutrient.unit}`
                  : typeof nutrient.value === 'number' &&
                    `${Math.abs(nutrient.value).toFixed(2)} ${nutrient.unit}`}
              </div>
            </li>
          ),
      )}
    </ul>
  );
}

export default TableHead;
