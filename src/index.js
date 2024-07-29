import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Pizza = (props) => {
  return (
    <li className="pizza">
      <img src={props.p.photoName} alt={props.p.name} />
      <div>
        <h3>{props.p.name}</h3>
        <p>{props.p.ingredients}</p>
        <span>{props.p.price}</span>
      </div>
    </li>
  );
};

function Header() {
  // const style={color:"red", fontSize:"2rem", textTransform:"uppercase"}
  return (
    <header className="header">
      <h1> Fast React Pizza Co.</h1>{" "}
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza, index) => (
          <Pizza p={pizza} key={index} />
        ))}
      </ul>
      {/* <Pizza
        name="focaccia"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/focaccia.jpg"
        price={20}
      />
      <Pizza
        name="funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={10}
      /> */}
      {/* <button className="btn">Order</button> */}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if(hour >= openHour && hour <= closeHour)
  //   alert ("we are currently open ");
  // else
  //  alert ( "sorry we are currently close");
  
  if (!isOpen){
    return( <p>we are still wroking on our pizza menu so kindly wait for somewhile</p>)
   
  }
  return (
    <Footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>we are open untill {openHour}:00. Come vist us or order us</p>
          <buttion>Order</buttion>
        </div>
      ) : (
        <p>
          we are happy to vist us between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </Footer>
  );
}

// v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();}
