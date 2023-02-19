import PropertyCard from "./propertyCard";
import { propertyList } from "../assets/propertyList";

const Cards = ({ filters: { Location, Rooms, Type, Price }, filtered }) => {
  const filteredProperties = () => {
    let filteredProperty = propertyList;
    if (Location) {
      filteredProperty = filteredProperty.filter((property) => {
        return property.address === Location;
      });
    }
    if (Rooms) {
      if (Rooms == "More than 4") {
        filteredProperty = filteredProperty.filter((property) => {
          return property.rooms > 4;
        });
      } else
        filteredProperty = filteredProperty.filter((property) => {
          return property.rooms == Rooms;
        });
    }
    if (Price) {
      if (Price == "< $500") {
        filteredProperty = filteredProperty.filter((property) => {
          return property.price < 500;
        });
      } else if (Price == "$500 - 1999") {
        filteredProperty = filteredProperty.filter((property) => {
          return property.price >= 500 && property.price <= 1999;
        });
      } else if (Price == "$2000 - 4999") {
        filteredProperty = filteredProperty.filter((property) => {
          return property.price >= 2000 && property.price <= 4999;
        });
      } else
        filteredProperty = filteredProperty.filter((property) => {
          return property.price >= 5000;
        });
    }
    if (Type) {
      filteredProperty = filteredProperty.filter((property) => {
        return property.type === Type;
      });
    }
    return filteredProperty;
  };

  return (
    <ul className="flex flex-wrap gap-14 px-32 mt-10 w-full">
      {filtered
        ? filteredProperties().map((list) => (
            <PropertyCard list={list} key={list._id} />
          ))
        : propertyList.map((list) => (
            <PropertyCard list={list} key={list._id} />
          ))}
    </ul>
  );
};

export default Cards;
