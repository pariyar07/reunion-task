import Cards from "../components/cards";
import FilterBar from "../components/filterBar";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FilterBar />
      <Cards />
    </div>
  );
};

export default Home;
