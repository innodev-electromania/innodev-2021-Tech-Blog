import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../../assets/Category_data";
import "./Categories.css";
const Categories = () => {
  return (
    <>
      <table className="categories">
        <tr
          className="category"
          style={{ marginBottom: "30px", marginTop: "10px" }}
        >
          <Link to={`/`} className="link">
            <td>All Categories</td>
          </Link>
        </tr>
        {categories.map((category) => (
          <tr className="category">
            <Link to={`/?category=${category}`} className="link">
              <td>{category}</td>
            </Link>
          </tr>
        ))}
      </table>
    </>
  );
};
export default Categories;
