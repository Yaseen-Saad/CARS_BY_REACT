const years = ["2018", "2019", "2020", "2021", "2022", "2023", "2024"];
export default function Filter(props) {
  function yearFilter(event) {
    props.yearHandler(event.target.value);
  }
  return (
    <div className="filter-div">
      <p>Filter by Year</p>
      <select value={props.year} onChange={yearFilter}>
        <option value="All">All</option>
        {years.map((year, i) => (
          <option key={i} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
