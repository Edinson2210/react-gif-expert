import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory);
    // categories.push("Valorant")
    // setCategories((cat) => [...cat, "Valorant"]);

    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Título */}
      <h1>GiftExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* Listado de Gifs */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* Gif Item */}
    </>
  );
};
