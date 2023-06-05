import Car from "./Car.js";
import "./CarsList.css";

const CarsList = ({ cars }) => {
  return (
    <ul className="Cars-List">
      {cars.map((car, i) => (
        <Car key={i} car={car} />
      ))}
    </ul>
  );
};
export default CarsList;
