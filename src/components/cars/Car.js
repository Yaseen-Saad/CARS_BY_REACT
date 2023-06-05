import ManDate from "./ManDate.js";
import "./Car.css";
const Car = ({ car }) => {
  return (
    <li className="Car">
      <ManDate date={car.date} />
      <div>
        <p>{car.name}</p> <div>${car.price}</div>
      </div>
    </li>
  );
};
export default Car;
