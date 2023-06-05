import AddCarForm from "./AddCarForm.js";
import "./AddCarForm.css";
function AddCar(props) {
  function NewCarData(car) {
    props.CarData(car);
  }
  return (
    <div className="form">
      <AddCarForm NewCarData={NewCarData} />
    </div>
  );
}

export default AddCar;
