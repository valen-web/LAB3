import "./SeeCategories.css";

interface SeeCategoriesProps {
  title: string;
  img: string;
  name: string;
  date: string;
  amount: number;
}

function SeeCategories({ title, img, name, date, amount }: SeeCategoriesProps) {
  return (
    <div className="category">
      <div>
        <h2>Expense List:</h2>
      </div>
      <div id="category-item">
        <img src={img} alt={title} />
        <div id="details">
          <h3 id="catecoriName">{title}</h3>
          <p>{name}</p>
          <p>{date}</p>
        </div>
      </div>
      <h2 id="price">Costo: {amount}</h2>
    </div>
  );
}

export default SeeCategories;
