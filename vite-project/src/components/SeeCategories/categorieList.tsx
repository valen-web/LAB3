
import Categories from "../../data/data";
import SeeCategories from "./SeeCategories";

function CategoriesList({ selectedCategory }) {
 
  const filteredCategories = selectedCategory
    ? { [selectedCategory]: Categories[selectedCategory] }
    : Categories;

  return (
    <div className="categories-list">
      {Object.keys(filteredCategories).map((key) => {
        const category = filteredCategories[key][0];
        return (
          <SeeCategories
            key={key}
            title={category.title}
            img={category.img}
          />
        );
      })}
    </div>
  );
}

export default CategoriesList;
