import React, { useState } from "react";
const pizzaCategories = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onClickCategorie = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {pizzaCategories.map((categorie, index) => (
          <li
            onClick={() => onClickCategorie(index)}
            className={activeIndex === index ? "active" : " "}
          >
            {categorie}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
