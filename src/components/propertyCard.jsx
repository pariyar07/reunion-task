import { FaBed } from "react-icons/fa";

const PropertyCard = ({ list }) => {
  const {
    id,
    name: { capitalizedName },
    price,
    address,
    rooms,
    type,
    image,
  } = list;
  return (
    <li
      key={id}
      className="cursor-pointer rounded-xl overflow-hidden bg-gray-100 transition-all hover:scale-[1.01]"
    >
      <img src={image} alt="House" />
      <div className="p-6">
        <div className="flex flex-col gap-2">
          <p className="text-gray-800">
            ${price}
            <span className="text-gray-500 text-xs">/month</span>
          </p>
          <p className="text-xl text-gray-800 font-semibold">
            {capitalizedName.replace(/_/g, " ")}
          </p>
          <p className="text-gray-500 text-xs">{address}</p>
        </div>
        <div className="flex justify-between bg-gray-600 rounded-lg text-white px-4 py-2 mt-4">
          <div className="flex items-center gap-2">
            <FaBed />
            <p>{rooms}</p>
          </div>
          <p>Type: {type}</p>
        </div>
      </div>
    </li>
  );
};

export default PropertyCard;
