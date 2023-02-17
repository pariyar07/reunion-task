import PropertyCard from "./propertyCard";
import { propertyList } from "../assets/propertyList";

const Cards = () => {
  return (
    <ul className="flex flex-wrap gap-8 justify-between px-40 mt-10 w-full">
      {propertyList.map((list) => (
        <PropertyCard list={list} />
      ))}
    </ul>
  );
};

export default Cards;
