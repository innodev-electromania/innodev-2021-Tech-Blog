import React from "react";
import {categories} from '../../../assets/Category_data';
import './Categories.css';
const Categories = () => {
  return (
    <>
      <table className="categories">
      {
        categories.map((category) => (
                <tr className="category">
                <td>{category}</td>
               </tr> 
            ))}
      </table>


     
    </>
  )
}
export default Categories;
