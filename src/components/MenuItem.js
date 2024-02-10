import React from 'react';
import '../App.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, itemDesc, itemPrice, imageSrc, alt }) => {
    return (
    <div className="row mt-2">
      <div className="col-5">
        <img src={imageSrc} className="menu-image" alt={alt} />
      </div>
      <div className="col-7">
        <p className="menu-item">{title}</p>
        <p className="item-desc">{itemDesc}</p>
        <div className="row">
          <div className="col">
            <p className="item-price">{itemPrice}</p>
          </div>
          <div className="col"></div>
          <div className="col">
            <button className="button">Add</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MenuItem;
