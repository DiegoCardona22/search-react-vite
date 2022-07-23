// @packages
import { useState } from "react";

// @scripts
import { AddCategory, GiftGrid } from "./components";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Valorant"]);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories([value, ...categories]);
  };

  return (
    <>
      <h1>Gift Expert</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)}/>
      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
}

export default GiftExpertApp;