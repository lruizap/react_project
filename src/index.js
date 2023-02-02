import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./components/Greeting";
import Product from "./components/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting />
    <UserCard />
    <Product />
  </>
);
