import './ManDate.css'
const ManDate = ({ date }) => {
  return (
    <div className="Manufacture-date">
      <p>{date.toLocaleString('default', { month: 'long' })}</p>
      <p>{date.toLocaleString('default', { year: 'numeric' })}</p>
      <p>{date.toLocaleString('default', { day: 'numeric' })}</p>
    </div>
  );
};

export default ManDate;
