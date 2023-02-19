import { MdArrowDropDownCircle } from "react-icons/md";

const filters = [
  {
    type: "Location",
    list: ["Select", "New York", "San Fransisco", "Texas", "Miami"],
  },
  {
    type: "Rooms",
    list: ["Select", "2", "3", "4", "More than 4"],
  },
  {
    type: "Price",
    list: ["Select", "< $500", "$500 - 1999", "$2000 - 4999", "> $5000"],
  },
  {
    type: "Type",
    list: ["Select", "Ranch", "Cottage", "Villa", "Penthouse"],
  },
];

const FilterBar = ({ filterHandler, searchFilter }) => {
  return (
    <div className="px-40 mt-10">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-5xl font-extrabold">Search properties to rent</h1>
        <div className="flex relative w-1/4">
          <input
            type="search"
            name="search-properties"
            placeholder="Search properties"
            className="bg-gray-100 w-full"
          />
          <MdArrowDropDownCircle className="absolute w-6 h-6 right-2 top-2 text-gray-600" />
        </div>
      </div>
      <ul className="flex justify-between mt-10 w-full bg-slate-100 py-4 px-4 rounded-xl">
        {filters.map((filter, i) => {
          return (
            <li
              key={i}
              className="flex flex-col border-r border-gray-200 flex-1 mx-2 pr-4"
            >
              <span className="text-gray-500 text-xs">{filter.type}</span>
              <select
                className="text-sm bg-transparent px-0"
                onChange={filterHandler(filter.type)}
              >
                {filter?.list.map((option, i) => {
                  return (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </li>
          );
        })}
        <button
          className="bg-gray-200 px-20 transition-all hover:scale-[1.02] active:scale-95"
          onClick={searchFilter}
        >
          Search
        </button>
      </ul>
    </div>
  );
};

export default FilterBar;
