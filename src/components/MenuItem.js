import React, { useState } from 'react';
import '../App.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ item, onAddToCart, onRemoveFromCart, quantity }) => {
  const { title, description, price, imageName, id } = item;

  return (
    <div className="row mt-2">
      <div className="col-5">
        <img src={`./images/${imageName}`} className="menu-image" alt={title} />
      </div>
      <div className="col-7">
        <div className="row">
          <div className="col">
            <p className="menu-item">{title}</p>
            <p className="item-desc">{description}</p>
          </div>
          <div className="col">
            <div className="row">
              <div className="col text-right">
                <p className="item-price">${price}</p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-auto pr-1">
                {/* Button to remove item from cart */}
                <button className="button button-sm" onClick={() => onRemoveFromCart(item)}>-</button>
              </div>
              <div className="col-auto px-1">
                <p className="mb-0" style={{ fontSize: '0.8rem' }}>{quantity || 0}</p>
              </div>
              <div className="col-auto pl-1">
                {/* Button to add item to cart */}
                <button className="button button-sm" onClick={() => onAddToCart(item)}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
