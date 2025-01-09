import Input from "../../conponents/Input";
import "./Category.css";

const Category = (handleChange) => {
  return (
    <>
      <h2 className="sidebar-title">Category</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="falts"
        title="Falts"
        name="test"
      />

      <Input
        handleChange={handleChange}
        value="scanadals"
        title="Scanadals"
        name="test"
      />

      <Input
        handleChange={handleChange}
        value="heels"
        title="Heels"
        name="test"
      />
    </>
  );
};

export default Category;
