import { useState } from "react";
import Navbar from "../components/navbar";
import FilterBar from "../components/filterBar";
import Cards from "../components/cards";

const Home = () => {
  const [filtered, setFiltered] = useState(false);
  const [filters, setFilters] = useState({
    Location: "",
    Rooms: "",
    Price: "",
    PropertyType: "",
  });

  const filterHandler = (field) => {
    return (e) => {
      setFilters((prev) => ({ ...prev, [field]: e.target.value }));
    };
  };

  const searchFilter = () => {
    setFiltered(true);
  };

  return (
    <div>
      <Navbar />
      <FilterBar filterHandler={filterHandler} searchFilter={searchFilter} />
      <Cards filters={filters} filtered={filtered} />
    </div>
  );
};

export default Home;
