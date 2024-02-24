import React, {useState} from 'react';
import './App.css';
import MenuItem from './components/MenuItem';

import 'bootstrap/dist/css/bootstrap.min.css';  
 
// This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    const updatedCart = [...cartItems];
    const index = updatedCart.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      updatedCart[index].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }
    setCartItems(updatedCart);
  };

  const removeItemFromCart = (item) => {
    const updatedCart = [...cartItems];
    const index = updatedCart.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      } else {
        updatedCart.splice(index, 1);
      }
      setCartItems(updatedCart);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleOrder = () => {
    if (cartItems.length === 0) {
      alert("No items in cart");
    } else {
      const orderDetails = cartItems.map(item => `${item.quantity} ${item.title}`).join(", ");
      alert(`Order placed: ${orderDetails}`);
      clearCart();
    }
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <div>
        <div className="text-center mt-3">
          <img src="https://images-platform.99static.com//jmZYr2qnWF3VhUki004SvldizSA=/fit-in/590x590/99designs-contests-attachments/110/110226/attachment_110226747" className="logo-image" alt="taco bell logo" />
        </div>
        <div className="text-center mt-3">
          こんにちは!
          <p id="desc">UT's new go-to food choice!</p>
        </div>
      </div>
      <div className="menu">
        {          console.log(cartItems)}
      {menuItems.map((item) => {
          const cartItem = cartItems.find(cartItem => cartItem.id === item.id) || { quantity: 0 };
          // console.log(cartItem)
          return (
            <MenuItem
              key={item.id}
              item={item}
              quantity={cartItem.quantity}
              onAddToCart={addItemToCart}
              onRemoveFromCart={removeItemFromCart}
            />
          );
        })}
      </div>
      <div className="subtotal mt-5">
        <div className="row">
          <div className="col-6">
            <p>Total: ${totalPrice.toFixed(2)}</p>
          </div>
          <div className="col d-flex justify-content-end">
            <div className="col-auto">
              <button className="rounded-circle mr-2 small-text" onClick={handleOrder}>Order</button>
            </div>
            <div className="col-9">
              <button className="rounded-circle small-text" onClick={clearCart}>Clear All</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default App;
