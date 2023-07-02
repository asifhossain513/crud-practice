import { Link, useLoaderData } from "react-router-dom"
import './App.css'
import CoffeCard from "./components/CoffeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees); 
  return (
    <div className="m-2">
      <div className="md:flex justify-between p-4">
        <h1 className="text-2xl text-primary">Coffee House</h1>
        <div className="md:flex gap-2">
          <Link to="/addcoffee" className="btn btn-primary">
            Add coffe
          </Link>
          <Link to="" className="btn btn-primary">
            Update coffe
          </Link>
        </div>
      </div>
      {/* Header end */}
      <div className="p-4">
        <h1 className="text-2xl text-primary pb-4 text-center">
          Total Coffe {coffees.length}
        </h1>

        <div className="grid md:grid-cols-2 gap-4">
          {coffees.map((coffee) => (
            <CoffeCard
              key={coffee._id}
              coffee={coffee}
              coffees = {coffees}
              setCoffees = {setCoffees}

            ></CoffeCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
