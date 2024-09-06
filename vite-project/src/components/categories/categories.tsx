import { useState } from "react";
import CategoriesList from "../SeeCategories/categorieList";
import "./categories.css";



function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <div id="CategoriesSelect">
        <label htmlFor="Categories">Filter categories</label>
        <select
          name="Categories"
          id="Categories"
          onChange={handleCategoryChange}
        >
          <option value="">--All categories--</option>
          <option value="Savings">Savings</option>
          <option value="Food">Food</option>
          <option value="House">House</option>
          <option value="MiscellaneousExpenses">Miscellaneous Expenses</option>
          <option value="Leisure">Leisure</option>
          <option value="Health">Health</option>
          <option value="Subscriptions">Subscriptions</option>
        </select>
      </div>
      <CategoriesList selectedCategory={selectedCategory} />
    </>
  );
}

export default Categories;
