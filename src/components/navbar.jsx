import Logo from "/reunion.jpeg";
import { MdKeyboardArrowDown } from "react-icons/md";

const navList = [
  { text: "Rent", icon: null },
  { text: "Buy", icon: null },
  { text: "Sell", icon: null },
  { text: "Manage Property", icon: <MdKeyboardArrowDown /> },
  { text: "Resources", icon: <MdKeyboardArrowDown /> },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between px-16 py-4 w-full shadow-lg">
      <div className="flex items-center gap-20">
        <img src={Logo} alt="Logo" className="w-14 h-14" />
        <ul className="flex gap-6">
          {navList.map((list, i) => {
            return (
              <li
                className={`flex items-center gap-1 cursor-pointer px-6 py-2 rounded-xl ${
                  i === 0 && "bg-gray-100"
                }`}
                key={i}
              >
                <p>{list.text}</p>
                <span>{list.icon && list.icon}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <button className="bg-gray-100 shadow-lg px-8">Login</button>
        <button className="bg-gray-600 text-white shadow-xl ml-6 px-8">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
