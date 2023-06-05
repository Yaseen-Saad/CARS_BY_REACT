import { useState } from "react";
import { giveAlert } from "../../Defaults/main";
function AddCarForm(props) {
  const [Name, setName] = useState();
  const [Price, setPrice] = useState();
  const [date, setDate] = useState();

  function carNameHandler(event) {
    setName(event.target.value);
  }
  function carPriceHandler(event) {
    setPrice(event.target.value);
  }
  function carDateHandler(event) {
    setDate(event.target.value);
  }
  function submitCarData(event) {
    event.preventDefault();
    console.log(date);
    if (Name) {
      if (!isNaN(Price)) {
        const thisDate = new Date(date)
        if (thisDate < Date.now()) {
          props.NewCarData({ name: Name, price: Price, date: new Date(date) });
        } else {
          giveAlert("Please enter a Valid Manufacturing Date", "red");
        }
      } else {
        giveAlert("Please enter a valid price", "red");
        
      }
    } else {
      giveAlert("Please enter a Valid name", "red");
    }
  }
  return (
    <form onSubmit={submitCarData}>
      <div>
        <div>
          <label>Car Name</label>
          <input onChange={carNameHandler} type="text" />
        </div>
        <div>
          <label>Car Price</label>
          <input onChange={carPriceHandler} type="number" />
        </div>
        <div>
          <label>Car Manufacturing Date</label>
          <input
            onChange={carDateHandler}
            type="date"
            min="1-1-2018"
            max="12-31-2023"
          />
        </div>
      </div>
      <div>
        <button type="submit">Add Car</button>
      </div>
    </form>
  );
}

export default AddCarForm;
