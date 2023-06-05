import "./main.css";
import { Cars } from "./components/cars/cars.js";
import AddCar from "./components/cars/AddCar.js";
import { useState } from "react";
const carsList = [
  { name: "supra", date: new Date("5-22-2019"), price: 100 },
  { name: "audi", date: new Date("6-22-2020"), price: 50 },
  { name: "toyota", date: new Date("7-22-2023"), price: 500 },
  { name: "porch", date: new Date("4-22-2021"), price: 200 },
];
function App() {
  const [cars, setCars] = useState(carsList);
  function newCar(Car) {
    console.log(cars);
    setCars((prev) => [Car, ...prev]);
  }
  return (
    <div>
      <AddCar CarData={newCar} />
      <Cars carsList={cars} />
    </div>
  );
}

export default App;
