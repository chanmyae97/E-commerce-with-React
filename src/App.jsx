import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";

//Database
import data from "./db/data.jsx";
import Category from "./Sidebar/Category/Category.jsx";
import Card from "./conponents/Card.jsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //Input Filter

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = data.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  //Radio filter

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //Buttons filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filterData(data, selected, query) {
    let filterProducts = data;
    //Filtering Input Items
    if (query) {
      filterProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      filterProducts = filterProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filterProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  const result = filterData(data, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
