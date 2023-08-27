import AppLayout from "../layouts/appLayout.jsx";
import Loader from "../components/loader.jsx";
import { Link } from "react-router-dom";


const Index = () => {
  return (
    <AppLayout>
    < Loader isLoading={false} />
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4 text-indigo-800">Welcome to the Pokemon Card Collection</h1>
        <p className="text-gray-700 mb-8">Discover and explore the world of Pokemon cards</p>
        <div className="mb-8">
          <p className="mb-2">Find all the cards featuring your favorite Pokémon by simply typing its name</p>
          <Link to="/tcg" className="bg-indigo-500 px-5 py-2 rounded-lg text-white mr-4 hover:bg-indigo-600">
            <i className="fas fa-search mr-2 text-white"></i>
            Search by Name
          </Link>
          <p className="mb-4">Simply select from a range of Pokemon sets and revel in the excitement of uncovering hidden cards with just one click</p>
          <Link to="/booster" className="bg-indigo-500 px-5 py-2 rounded-lg text-white mr-4 hover:bg-indigo-600">
            <i className="fas fa-box-open mr-2 text-white"></i>
            Explore Sets
          </Link>
          <p className="mb-4">You can discover all the different species of Pokemon and learn more about each one</p>
          <Link to="/pokedex" className="bg-indigo-500 px-5 py-2 rounded-lg text-white hover:bg-indigo-600">
            <i className="fas fa-book mr-2 text-white"></i>
            Pokedex
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;