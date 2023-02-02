import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./components/Greeting";
import Product from "./components/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
      name="Raulito"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2, 34]}
      address={{
        street: "123 Main Street",
        city: "New York",
      }}
    />
  </>
);
