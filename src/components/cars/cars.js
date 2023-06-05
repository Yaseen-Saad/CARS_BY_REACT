import { useState } from "react";
import Filter from "./Filter";
import CarsList from "./CarsList";
import "./Cars.css";

export const Cars = (props) => {
  const [year, setYear] = useState("All");
  function yearHandler(selectedYear) {
    setYear(selectedYear);
  }
  let cars = props.carsList.filter(
    (car) => car.date.getFullYear().toString() === year
  );

  if (year === "All") {
    cars = props.carsList;
  }
  return (
    <div className="cars">
      <Filter year={year} yearHandler={yearHandler} />
      {cars.length > 0 && <CarsList cars={cars} />}
      {!cars.length && (
        <h2 style={{ color: "red", fontSize: "3rem", textAlign: "center" }}>
          NO CARS TO SHOW
        </h2>
      )}
    </div>
  );
};
