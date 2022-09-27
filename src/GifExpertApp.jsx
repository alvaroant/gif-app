import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  

  const onAddCategory = (newCategory) => {
    const lowerNewCategory = newCategory.toLowerCase();
    const lowerCategories = categories.map((category) =>
      category.toLowerCase()
    );

    if (lowerCategories.includes(lowerNewCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

    </>
  );
};
